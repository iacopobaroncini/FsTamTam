/*

    ------------------------------------------
    FsTamTam
    
    (c) Iacopo Baroncini. All rights reserved.
    ------------------------------------------
    
    Redistribution and use in source and binary forms, with or without modification,
    are permitted provided that the following conditions are met:
    
    1)  Redistributions of source code must retain the above copyright notice, this list
        of conditions and the following disclaimer.

    2)  Redistributions in binary form must reproduce the above copyright notice, this
        list of conditions and the following disclaimer in the documentation and/or other
        materials provided with the distribution.

    3)  Neither the name of Iacopo Baroncini nor the names of its contributors may be
        used to endorse or promote products derived from this software without specific
        prior written permission.

    THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
    AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
    WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
    IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
    INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
    NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA,
    OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
    WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
    ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY
    OF SUCH DAMAGE.
    
*/


#include <iostream>
#include <stdio.h>
#include <stdlib.h>
#include <algorithm>
#include <sys/time.h>
#include <chrono>
#include <thread>
#include <string.h>
#include "FsTamTam.h"
#include "Serial.h"


#define NAME_MAX_SIZE               32
#define IN_BUFFER_SIZE              2048
#define OUT_BUFFER_SIZE             512
#define TIMEOUT_PERIOD_SHORT        2500
#define TIMEOUT_PERIOD_LONG         4000


//
// Timer
//


class Timer {
    
    private:
    
        int64_t t;
    
    public:
    
        Timer()                         { t = 0L; }
        inline void now()               { t = millis(); }
        inline bool elapsed(int64_t ms) { return ((millis() - t) > ms); }
        static inline uint64_t millis() {
            struct timeval tp;
            gettimeofday(&tp, NULL);
            return tp.tv_sec * 1000 + tp.tv_usec / 1000;
        }
    
};


//
// Simulation info
//


class FsTamTamSimulation {
    
    public:
        char    modelName[NAME_MAX_SIZE];
        int8_t  numberOfEngines;
        bool    isPmdgNgxModel;
        bool    accepted;
        
        FsTamTamSimulation() {
            reset();
        }
        
        void reset() {
            memset(&modelName, 0x00, NAME_MAX_SIZE);
            numberOfEngines = -1;
            isPmdgNgxModel = accepted = false;
        }
    
};


//
// FsTamTam
//


typedef enum  {
    NOT_INITIALIZED,
    INITIALIZED,
    CONNECTED,
    WAIT_FOR_NUMBER_OF_ENGINES,
    SIMULATION,
    STANDARD_SIMULATION,
    PMDG_NGX_SIMULATION
} FsTamTamState;


static FsTamTamState        state = NOT_INITIALIZED;
static char                 serverAddr[32] = "";
static int                  serverPort;
static char                 device[NAME_MAX_SIZE];
static char                 iBuf[IN_BUFFER_SIZE];
static char                 oBuf[OUT_BUFFER_SIZE];
static uint16_t             iBufIdx;
static FsTamTamSimulation   simulation;
static Timer                timeout;
static int64_t              msLoop;
static char                 *tokens[20];

FsTamTamData                __FsTamTam::simulationData;
FsTamTamCallback            __FsTamTam::onConnect = NULL;
FsTamTamCallback            __FsTamTam::onSimulationStart = NULL;
FsTamTamCallback            __FsTamTam::onSimulationLoop = NULL;
FsTamTamCallback            __FsTamTam::onSimulationData = NULL;
FsTamTamCallback            __FsTamTam::onSimulationStop = NULL;
FsTamTamCallback            __FsTamTam::onDisconnect = NULL;


__FsTamTam FsTamTam;


static void sendMagicNumberMessage() {
    Serial::print("\n!AB3F8F86718BD092\n");
    Serial::flush();
}


static void safeStringCopy(char *dst, char *src, int dstSize) {
    int len = (int) strlen(src);
    dstSize--;
    len = std::min<int>(len, dstSize);
    if (len > 0) memcpy(dst, src, len);
    dst[len] = '\0';
}


static int split(char *p) {
    int len;
    int n = 0;
    char ch;
    char *tokenStart = p;
    if (!p || (len = (int) strlen(p)) == 0) return 0;
    for (int i = 0; i < len; i++, p++) {
        ch = *p;
        if (ch == ':') {
            tokens[n++] = tokenStart;
            tokenStart = p + 1;
            *p = (char) 0;
            continue;
        }
    }
    tokens[n++] = tokenStart;
    return n;
}


static void manageSubscription(bool subscribe, int32_t id, int8_t index, FsTamTamDataDelivery delivery = DELIVER_ON_CHANGE) {
    if (state < SIMULATION || !simulation.accepted) return;
    char del = (delivery == DELIVER_ON_CHANGE) ? 'C' : 'T';
    if (id >= PMDG_NGX_ID_OFFSET) {
        if (state != PMDG_NGX_SIMULATION) return;
        // PMDG variable
        if (subscribe)
            sprintf(oBuf, "RP%c%d\n", del, id - PMDG_NGX_ID_OFFSET);
        else
            sprintf(oBuf, "DP%d\n", id - PMDG_NGX_ID_OFFSET);
    } else
    if (id < 0) {
        sprintf(oBuf, "%cG%d\n", subscribe ? 'R' : 'D', -id);
    } else {
        // SimConnect variable
        if (id >= 2000) {
            if (subscribe)
                sprintf(oBuf, "RS%c%d:%d\n", del, id, index);
            else
                sprintf(oBuf, "DS%d:%d\n", id, index);
        } else {
            if (subscribe)
                sprintf(oBuf, "RS%c%d\n", del, id);
            else
                sprintf(oBuf, "DS%d\n", id);
        }
    }
    Serial::print(oBuf);
    Serial::flush();
    return;
}


static inline void processReceivedPacket() {
    bool                error = false;
    int                 n;
    char                *p = iBuf;
    int                 ti;
    switch (*(p++)) {
        case 'P':
            if (iBufIdx < 4) { error = true; break; }
            if (state != PMDG_NGX_SIMULATION) break;
            bzero(&__FsTamTam::simulationData, sizeof(FsTamTamData));
            __FsTamTam::simulationData.type = (FsTamTamDataType) (*(p++) - '0');
            if (split(p) != 2) { error = true; break; }
            ti = 0;
            __FsTamTam::simulationData.id = atoi(tokens[ti++]) + PMDG_NGX_ID_OFFSET;
            __FsTamTam::simulationData.index = 0;
            switch (__FsTamTam::simulationData.type) {
                case DATA_TYPE_BOOLEAN:
                    __FsTamTam::simulationData.asBool = atoi(tokens[ti]) ? 1 : 0;
                    break;
                case DATA_TYPE_INTEGER:
                    __FsTamTam::simulationData.asInt32 = atoi(tokens[ti]);
                    break;
                case DATA_TYPE_DOUBLE:
                    __FsTamTam::simulationData.asDouble = strtod(tokens[ti], NULL);
                    break;
                case DATA_TYPE_TEXT:
                    __FsTamTam::simulationData.asText = tokens[ti];
                    break;
                default:
                    error = true;
                    break;
            }
            if (error) break;
            if (simulation.accepted && __FsTamTam::onSimulationData) __FsTamTam::onSimulationData();
            break;
        case 'S':
            if (iBufIdx < 4) { error = true; break; }
            if (state <= CONNECTED && state != WAIT_FOR_NUMBER_OF_ENGINES) break;
            bzero(&__FsTamTam::simulationData, sizeof(FsTamTamData));
            __FsTamTam::simulationData.type = (FsTamTamDataType) (*(p++) - '0');
            n = split(p);
            if (n < 2) { error = true; break; }
            ti = 0;
            __FsTamTam::simulationData.id = atoi(tokens[ti++]);
            __FsTamTam::simulationData.index = (__FsTamTam::simulationData.id < 2000) ? 0 : atoi(tokens[ti++]);
            switch (__FsTamTam::simulationData.type) {
                case DATA_TYPE_BOOLEAN:
                    if (n - ti != 1) { error = true; break; }
                    __FsTamTam::simulationData.asBool = atoi(tokens[ti]) ? 1 : 0;
                    break;
                case DATA_TYPE_INTEGER:
                    if (n - ti != 1) { error = true; break; }
                    __FsTamTam::simulationData.asInt32 = atoi(tokens[ti]);
                    break;
                case DATA_TYPE_DOUBLE:
                    if (n - ti != 1) { error = true; break; }
                    __FsTamTam::simulationData.asDouble = strtod(tokens[ti], NULL);
                    break;
                case DATA_TYPE_TEXT:
                    if (n - ti != 1) { error = true; break; }
                    __FsTamTam::simulationData.asText = tokens[ti];
                    break;
                case DATA_TYPE_LLA:
                    if (n - ti != 3) { error = true; break; }
                    __FsTamTam::simulationData.asLLA.latitude = strtod(tokens[ti++], NULL);
                    __FsTamTam::simulationData.asLLA.longitude = strtod(tokens[ti++], NULL);
                    __FsTamTam::simulationData.asLLA.altitude = strtod(tokens[ti], NULL);
                    break;
                case DATA_TYPE_PBH:
                    if (n - ti != 3) { error = true; break; }
                    __FsTamTam::simulationData.asPBH.pitch = strtod(tokens[ti++], NULL);
                    __FsTamTam::simulationData.asPBH.bank = strtod(tokens[ti++], NULL);
                    __FsTamTam::simulationData.asPBH.heading = strtod(tokens[ti], NULL);
                    break;
                case DATA_TYPE_XYZ:
                    if (n - ti != 3) { error = true; break; }
                    __FsTamTam::simulationData.asXYZ.x = strtod(tokens[ti++], NULL);
                    __FsTamTam::simulationData.asXYZ.y = strtod(tokens[ti++], NULL);
                    __FsTamTam::simulationData.asXYZ.z = strtod(tokens[ti], NULL);
                    break;
                default:
                    error = true;
                    break;
            }
            if (error) break;
            if (state == WAIT_FOR_NUMBER_OF_ENGINES) {
                if (__FsTamTam::simulationData.id == NUMBER_OF_ENGINES) {
                    state = (simulation.isPmdgNgxModel) ? PMDG_NGX_SIMULATION : STANDARD_SIMULATION;
                    Serial::print("DS1001\n");
                    Serial::flush();
                    simulation.numberOfEngines = __FsTamTam::simulationData.asInt32;
                    if (__FsTamTam::onSimulationStart) __FsTamTam::onSimulationStart();
                }
            } else
                if (simulation.accepted && state > SIMULATION && __FsTamTam::onSimulationData) __FsTamTam::onSimulationData();
            break;
        case 'K': // K
            if (iBufIdx != 1) { error = true; break; }
            break;
        case 'G':
            if (iBufIdx < 4 || split(p) != 2) { error = true; break; }
            bzero(&__FsTamTam::simulationData, sizeof(FsTamTamData));
            __FsTamTam::simulationData.id = -atoi(tokens[0]);
            __FsTamTam::simulationData.type = DATA_TYPE_INTEGER;
            __FsTamTam::simulationData.index = (uint8_t) 0;
            __FsTamTam::simulationData.asInt32 = atoi(tokens[1]);
            if (simulation.accepted && state > SIMULATION && __FsTamTam::onSimulationData) __FsTamTam::onSimulationData();
            break;
        case 'L':
            bzero(&__FsTamTam::simulationData, sizeof(FsTamTamData));
            switch (*(p++)) {
                case 'I':
                    if (*(p++) != ':') { error = true; break; }
                    if (split(p) != 8) { error = true; break; }
                    ti = 0;
                    __FsTamTam::simulationData.id = AI_WAYPOINT;
                    __FsTamTam::simulationData.type = DATA_TYPE_AI_WAYPOINT;
                    __FsTamTam::simulationData.asAIWaypoint.index = atoi(tokens[ti++]);
                    __FsTamTam::simulationData.asAIWaypoint.outOf = atoi(tokens[ti++]);
                    __FsTamTam::simulationData.asAIWaypoint.latitude = strtod(tokens[ti++], NULL);
                    __FsTamTam::simulationData.asAIWaypoint.longitude = strtod(tokens[ti++], NULL);
                    __FsTamTam::simulationData.asAIWaypoint.altitude = strtod(tokens[ti++], NULL);
                    __FsTamTam::simulationData.asAIWaypoint.flags = atoi(tokens[ti++]);
                    __FsTamTam::simulationData.asAIWaypoint.ktsSpeed = strtod(tokens[ti++], NULL);
                    __FsTamTam::simulationData.asAIWaypoint.percentThrottle = strtod(tokens[ti], NULL);
                    break;
                case 'A':
                    if (*(p++) != ':') { error = true; break; }
                    if (split(p) != 6) { error = true; break; }
                    ti = 0;
                    __FsTamTam::simulationData.id = FACILITY_AIRPORT;
                    __FsTamTam::simulationData.type = DATA_TYPE_FACILITY_AIRPORT;
                    __FsTamTam::simulationData.asFacilityAirport.index = atoi(tokens[ti++]);
                    __FsTamTam::simulationData.asFacilityAirport.outOf = atoi(tokens[ti++]);
                    __FsTamTam::simulationData.asFacilityAirport.icao = tokens[ti++];
                    __FsTamTam::simulationData.asFacilityAirport.latitude = strtod(tokens[ti++], NULL);
                    __FsTamTam::simulationData.asFacilityAirport.longitude = strtod(tokens[ti++], NULL);
                    __FsTamTam::simulationData.asFacilityAirport.altitude = strtod(tokens[ti], NULL);
                    break;
                case 'W':
                    if (*(p++) != ':') { error = true; break; }
                    if (split(p) != 7) { error = true; break; }
                    ti = 0;
                    __FsTamTam::simulationData.id = FACILITY_WAYPOINT;
                    __FsTamTam::simulationData.type = DATA_TYPE_FACILITY_WAYPOINT;
                    __FsTamTam::simulationData.asFacilityWaypoint.index = atoi(tokens[ti++]);
                    __FsTamTam::simulationData.asFacilityWaypoint.outOf = atoi(tokens[ti++]);
                    __FsTamTam::simulationData.asFacilityWaypoint.icao = tokens[ti++];
                    __FsTamTam::simulationData.asFacilityWaypoint.latitude = strtod(tokens[ti++], NULL);
                    __FsTamTam::simulationData.asFacilityWaypoint.longitude = strtod(tokens[ti++], NULL);
                    __FsTamTam::simulationData.asFacilityWaypoint.altitude = strtod(tokens[ti++], NULL);
                    __FsTamTam::simulationData.asFacilityWaypoint.magVar = strtod(tokens[ti], NULL);
                    break;
                case 'N':
                    if (*(p++) != ':') { error = true; break; }
                    if (split(p) != 8) { error = true; break; }
                    ti = 0;
                    __FsTamTam::simulationData.id = FACILITY_NDB;
                    __FsTamTam::simulationData.type = DATA_TYPE_FACILITY_NDB;
                    __FsTamTam::simulationData.asFacilityNDB.index = atoi(tokens[ti++]);
                    __FsTamTam::simulationData.asFacilityNDB.outOf = atoi(tokens[ti++]);
                    __FsTamTam::simulationData.asFacilityNDB.icao = tokens[ti++];
                    __FsTamTam::simulationData.asFacilityNDB.latitude = strtod(tokens[ti++], NULL);
                    __FsTamTam::simulationData.asFacilityNDB.longitude = strtod(tokens[ti++], NULL);
                    __FsTamTam::simulationData.asFacilityNDB.altitude = strtod(tokens[ti++], NULL);
                    __FsTamTam::simulationData.asFacilityNDB.magVar = strtod(tokens[ti++], NULL);
                    __FsTamTam::simulationData.asFacilityNDB.frequency = atoi(tokens[ti]);
                    break;
                case 'V':
                    if (*(p++) != ':') { error = true; break; }
                    if (split(p) != 14) { error = true; break; }
                    ti = 0;
                    __FsTamTam::simulationData.id = FACILITY_VOR;
                    __FsTamTam::simulationData.type = DATA_TYPE_FACILITY_VOR;
                    __FsTamTam::simulationData.asFacilityVOR.index = atoi(tokens[ti++]);
                    __FsTamTam::simulationData.asFacilityVOR.outOf = atoi(tokens[ti++]);
                    __FsTamTam::simulationData.asFacilityVOR.icao = tokens[ti++];
                    __FsTamTam::simulationData.asFacilityVOR.latitude = strtod(tokens[ti++], NULL);
                    __FsTamTam::simulationData.asFacilityVOR.longitude = strtod(tokens[ti++], NULL);
                    __FsTamTam::simulationData.asFacilityVOR.altitude = strtod(tokens[ti++], NULL);
                    __FsTamTam::simulationData.asFacilityVOR.magVar = strtod(tokens[ti++], NULL);
                    __FsTamTam::simulationData.asFacilityVOR.frequency = atoi(tokens[ti++]);
                    __FsTamTam::simulationData.asFacilityVOR.flags = atoi(tokens[ti++]);
                    __FsTamTam::simulationData.asFacilityVOR.localizer = strtod(tokens[ti++], NULL);
                    __FsTamTam::simulationData.asFacilityVOR.glideLat = strtod(tokens[ti++], NULL);
                    __FsTamTam::simulationData.asFacilityVOR.glideLon = strtod(tokens[ti++], NULL);
                    __FsTamTam::simulationData.asFacilityVOR.glideAlt = strtod(tokens[ti++], NULL);
                    __FsTamTam::simulationData.asFacilityVOR.glideSlopeAngle = strtod(tokens[ti], NULL);
                    break;
                case 'T':
                    if (*(p++) != ':') { error = true; break; }
                    if (split(p) != 9) { error = true; break; }
                    ti = 0;
                    __FsTamTam::simulationData.id = FACILITY_TACAN;
                    __FsTamTam::simulationData.type = DATA_TYPE_FACILITY_TACAN;
                    __FsTamTam::simulationData.asFacilityTACAN.index = atoi(tokens[ti++]);
                    __FsTamTam::simulationData.asFacilityTACAN.outOf = atoi(tokens[ti++]);
                    __FsTamTam::simulationData.asFacilityTACAN.icao = tokens[ti++];
                    __FsTamTam::simulationData.asFacilityTACAN.latitude = strtod(tokens[ti++], NULL);
                    __FsTamTam::simulationData.asFacilityTACAN.longitude = strtod(tokens[ti++], NULL);
                    __FsTamTam::simulationData.asFacilityTACAN.altitude = strtod(tokens[ti++], NULL);
                    __FsTamTam::simulationData.asFacilityTACAN.magVar = strtod(tokens[ti++], NULL);
                    __FsTamTam::simulationData.asFacilityTACAN.channel = atoi(tokens[ti++]);
                    __FsTamTam::simulationData.asFacilityTACAN.xyBandIsY = atoi(tokens[ti]);
                    break;
                default:
                    error = true;
                    break;
            }
            if (!error && simulation.accepted && state > SIMULATION && __FsTamTam::onSimulationData) __FsTamTam::onSimulationData();
            break;
        case 'M': // MN:<model> of MP:<model>
            if (iBufIdx < 4) { error = true; break; }
            simulation.isPmdgNgxModel = false;
            switch (*(p++)) {
                case 'P':
                    simulation.isPmdgNgxModel = true;
                case 'S':
                    if (*(p++) != ':') { error = true; break; }
                    if (state < CONNECTED) break;
                    if (state > CONNECTED && simulation.accepted && __FsTamTam::onSimulationStop)
                        __FsTamTam::onSimulationStop();
                    safeStringCopy(simulation.modelName, p, NAME_MAX_SIZE - 1);
                    state = WAIT_FOR_NUMBER_OF_ENGINES;
                    Serial::print("RSC1001\n"); // request NUMBER_OF_ENGINES, ON_CHANGE
                    Serial::flush();
                    break;
                default:
                    error = true;
                    break;
            }
            break;
        case 'X': // X
            if (iBufIdx != 1) { error = true; break; }
            if (state > SIMULATION && simulation.accepted && __FsTamTam::onSimulationStop) __FsTamTam::onSimulationStop();
            state = (state >= CONNECTED) ? CONNECTED : state;
            simulation.reset();
            break;
        case 'W':
            if (iBufIdx != 1) { error = true; break; }
            if (state > CONNECTED) {
                state = CONNECTED;
                if (simulation.accepted && __FsTamTam::onSimulationStop) __FsTamTam::onSimulationStop();
            }
            if (state == CONNECTED && __FsTamTam::onDisconnect) __FsTamTam::onDisconnect();
            sprintf(oBuf, "W%s\n", device);
            Serial::print(oBuf);
            Serial::flush();
            state = CONNECTED;
            simulation.reset();
            if (__FsTamTam::onConnect) __FsTamTam::onConnect();
            break;
        default:
            error = true;
            break;
    }
    if (error) {
        Serial::print("EInvalid packet\n");
        Serial::flush();
    }
    Serial::print("N\n");
    Serial::flush();
}


bool __FsTamTam::begin(const char *deviceName, const char *addr, int port, uint64_t msSimulationLoopPeriod) {
    if (state > NOT_INITIALIZED || !deviceName || !strlen(deviceName) || !addr  || !strlen(addr) || !msSimulationLoopPeriod) return false;
    msLoop = msSimulationLoopPeriod;
    iBufIdx = 0;
    memset(device, 0x00, NAME_MAX_SIZE);
    char *s = (char *) deviceName;
    char *d = device;
    uint16_t len = strlen(s);
    len = std::min<uint16_t>(len, NAME_MAX_SIZE - 1);
    for (uint16_t i = 0; i < len; i++) {
        char ch = toupper(*(s++));
        *(d++) = ((ch >= '0' && ch <= '9') || (ch >= 'A' && ch <= 'Z') || (ch == ' ')) ? ch : '_';
    }
    strcpy(serverAddr, addr);
    serverPort = port;
    state = INITIALIZED;
    simulation.reset();
    return true;
}


void __FsTamTam::joinSimulation() {
    simulation.accepted = true;
}


char *__FsTamTam::modelName() {
    if (state < SIMULATION) return (char *) "";
    return simulation.modelName;
}


int __FsTamTam::numberOfEngines() {
    if (state < SIMULATION) return 0;
    return simulation.numberOfEngines;
}


bool __FsTamTam::isPmdgNgxModel() {
    if (state < SIMULATION) return false;
    return simulation.isPmdgNgxModel;
}


void __FsTamTam::loop() {
    static uint64_t tLoop = 0;
    switch (state) {
        case NOT_INITIALIZED:
            std::this_thread::sleep_for (std::chrono::milliseconds(1000));
            return;
        case INITIALIZED: // not connected
            if (Serial::isConnected()) break;
            if (!Serial::begin(serverAddr, serverPort)) return;
            sendMagicNumberMessage();
            timeout.now();
            break;
        default:
            break;
    }
    if (state == INITIALIZED && timeout.elapsed(TIMEOUT_PERIOD_SHORT)) {
        sendMagicNumberMessage();
        timeout.now();
    } else
    if (state >= CONNECTED && timeout.elapsed(TIMEOUT_PERIOD_LONG)) {
        if (state > SIMULATION && simulation.accepted && __FsTamTam::onSimulationStop) __FsTamTam::onSimulationStop();
        if (__FsTamTam::onDisconnect) __FsTamTam::onDisconnect();
        state = INITIALIZED;
        simulation.reset();
        Serial::close();
        timeout.now();
        return;
    }
    while (Serial::available()) {
        char ch = Serial::read();
        switch (ch) {
            case 10:
            case ';':
                if (!iBufIdx) break;
                iBuf[iBufIdx] = '\0';
                processReceivedPacket();
                iBufIdx = 0;
                break;
            case 13:
                break;
            default:
                iBuf[iBufIdx++] = ch;
                if (iBufIdx >= (IN_BUFFER_SIZE - 2)) iBufIdx = 0;
                break;
        }
        timeout.now();
    }
    if (state > SIMULATION && simulation.accepted && (Timer::millis() - tLoop) >= msLoop) {
        tLoop = Timer::millis();
        if (__FsTamTam::onSimulationLoop) __FsTamTam::onSimulationLoop();
    } else
        std::this_thread::sleep_for (std::chrono::milliseconds(5));
}


void __FsTamTam::trace(const char *text) {
    if (state < CONNECTED) return;
    sprintf(oBuf, "T%s\n", text);
    Serial::print(oBuf);
    Serial::flush();
}

                         
void __FsTamTam::error(const char *text) {
    if (state < CONNECTED) return;
    sprintf(oBuf, "E%s\n", text);
    Serial::print(oBuf);
    Serial::flush();
}

                         
void __FsTamTam::subscribeData(int32_t id, uint8_t index, FsTamTamDataDelivery delivery) {
    if (id < 2000 || id > 2999) return;
    manageSubscription(true, id, index, delivery);
}


void __FsTamTam::subscribeData(int32_t id, FsTamTamDataDelivery delivery) {
    if (id < 0 || (id >= 2000 && id <=2999)) return;
    manageSubscription(true, id, -1, delivery);
}


void __FsTamTam::subscribeData(int32_t id) {
    if (id >= 0 && id != CDU_ScreenData_0 && id != CDU_ScreenData_1) return;
    manageSubscription(true, id, -1, DELIVER_ON_CHANGE);
}


void __FsTamTam::unsubscribeData(int32_t id, uint8_t index) {
    manageSubscription(false, id, index);
}


void __FsTamTam::unsubscribeData(int32_t id) {
    manageSubscription(false, id, -1);
}


void __FsTamTam::sendData(int32_t id, int32_t param) {
    if (state < SIMULATION || !simulation.accepted) return;
    char mode;
    if (id >= PMDG_NGX_ID_OFFSET) {
        if (state != PMDG_NGX_SIMULATION) return;
        mode = 'P';
        id -= PMDG_NGX_ID_OFFSET;
    } else
    if (id < 0) {
        mode = 'G';
        id = -id;
    } else
        mode = 'S';
    sprintf(oBuf, "%c%d:%d\n", mode, id, param);
    Serial::print(oBuf);
    Serial::flush();
}


void __FsTamTam::requestAIWaypointList() {
    if (state < SIMULATION || !simulation.accepted) return;
    Serial::print("LI\n");
    Serial::flush();
}


void __FsTamTam::requestFacilityAirportList() {
    if (state < SIMULATION || !simulation.accepted) return;
    Serial::print("LA\n");
    Serial::flush();
}


void __FsTamTam::requestFacilityWaypointList() {
    if (state < SIMULATION || !simulation.accepted) return;
    Serial::print("LW\n");
    Serial::flush();
}


void __FsTamTam::requestFacilityNDBList() {
    if (state < SIMULATION || !simulation.accepted) return;
    Serial::print("LN\n");
    Serial::flush();
}


void __FsTamTam::requestFacilityVORList() {
    if (state < SIMULATION || !simulation.accepted) return;
    Serial::print("LV\n");
    Serial::flush();
}


void __FsTamTam::requestFacilityTACANList() {
    if (state < SIMULATION || !simulation.accepted) return;
    Serial::print("LT\n");
    Serial::flush();
}
