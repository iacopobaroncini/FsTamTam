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


#include "FsTamTam.h"


#define NAME_MAX_SIZE               64
#define IN_BUFFER_SIZE              512
#define IN_LARGE_BUFFER_SIZE        1024
#define TIMEOUT_PERIOD_SHORT        2500
#define TIMEOUT_PERIOD_LONG         4000


//
// Timer
//


class Timer {
    
    private:
    
        uint32_t t;
    
    public:
    
        Timer()                         { t = 0L; }
        inline void now()               { t = millis(); }
        inline bool elapsed(int64_t ms) { return ((millis() - t) > ms); }

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
static uint16_t             currentSimulationId = 0;
static bool                 testMode = false;
static char                 device[NAME_MAX_SIZE];
static char                 *iBuf = NULL;
static int                  bufferSize;
static uint16_t             iBufIdx;
static FsTamTamSimulation   simulation;
static Timer                timeout;
static uint32_t             msLoop;
static char                 *tokens[20];

FsTamTamData                __FsTamTam::simulationData;
FsTamTamCallback            __FsTamTam::onConnect = NULL;
FsTamTamCallback            __FsTamTam::onSimulationStart = NULL;
FsTamTamCallback            __FsTamTam::onSimulationLoop = NULL;
FsTamTamCallback            __FsTamTam::onSimulationData = NULL;
FsTamTamCallback            __FsTamTam::onSimulationStop = NULL;
FsTamTamCallback            __FsTamTam::onDisconnect = NULL;

__FsTamTam FsTamTam;


static void colon() {
    Serial.print(':');
}


static void sendMagicNumberMessage() {
    Serial.println(F("\n!AB3F8F86718BD092"));
    Serial.flush();
}


static void safeStringCopy(char *dst, char *src, int dstSize) {
    int len = (int) strlen(src);
    dstSize--;
    len = min(len, dstSize);
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
    char op = subscribe ? 'R' : 'D';
    char del = (delivery == DELIVER_ON_CHANGE) ? 'C' : 'T';
    if (index >= 0) {
        if (id < 2000 || id >= PMDG_NGX_ID_OFFSET) return;
        Serial.print(op);
        Serial.print('S');
        if (op == 'R') Serial.print(del);
        Serial.print(id);
        colon();
        Serial.println(index);
        Serial.flush();
        return;
    }
    if (id >= PMDG_NGX_ID_OFFSET) {
        if (state != PMDG_NGX_SIMULATION) return;
        // PMDG variable
        Serial.print(op);
        Serial.print('P');
        if (op == 'R') Serial.print(del);
        Serial.print(id - PMDG_NGX_ID_OFFSET);
    } else
    if (id < 0) {
        // Global variable variable
        Serial.print(op);
        Serial.print('G');
        Serial.print(-id);
    } else {
        // SimConnect variable
        if (id >= 2000) return;
        Serial.print(op);
        Serial.print('S');
        if (op == 'R') Serial.print(del);
        Serial.print(id);
    }
    Serial.println();
    Serial.flush();
}


static inline void processReceivedPacket() {
    bool                error = false;
    int                 n;
    char                *p = iBuf;
    int                 ti;
    FsTamTamData        data;
    switch (*(p++)) {
        case 'P':
            if (iBufIdx < 4) { error = true; break; }
            if (state != PMDG_NGX_SIMULATION) break;
            memset(&__FsTamTam::simulationData, 0x00, sizeof(FsTamTamData));
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
            memset(&__FsTamTam::simulationData, 0x00, sizeof(FsTamTamData));
            __FsTamTam::simulationData.type = (FsTamTamDataType) (*(p++) - '0');
            n = split(p);
            if (n < 2) { error = true; break; }
            ti = 0;
            __FsTamTam::simulationData.id = atoi(tokens[ti++]);
            __FsTamTam::simulationData.index = (__FsTamTam::simulationData.id < 2000) ? 0 : atoi(tokens[ti++]);
            switch (__FsTamTam::simulationData.type) {
                case DATA_TYPE_BOOLEAN:
                    if (n - ti != 1) { error = true; break; }
                    __FsTamTam::simulationData.asBool = atoi(tokens[ti]) != 0;
                    break;
                case DATA_TYPE_INTEGER:
                    if (n - ti != 1) { error = true; break; }
                    __FsTamTam::simulationData.asInt32 = atol(tokens[ti]);
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
                    Serial.println(F("DS1001"));
                    Serial.flush();
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
            memset(&__FsTamTam::simulationData, 0x00, sizeof(FsTamTamData));
            __FsTamTam::simulationData.id = -atoi(tokens[0]);
            __FsTamTam::simulationData.type = DATA_TYPE_INTEGER;
            __FsTamTam::simulationData.index = (uint8_t) 0;
            __FsTamTam::simulationData.asInt32 = atoi(tokens[1]);
            if (simulation.accepted && state > SIMULATION && __FsTamTam::onSimulationData) __FsTamTam::onSimulationData();
            break;
        case 'L':
            memset(&__FsTamTam::simulationData, 0x00, sizeof(FsTamTamData));
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
                    __FsTamTam::simulationData.asAIWaypoint.flags = atol(tokens[ti++]);
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
                    __FsTamTam::simulationData.asFacilityNDB.frequency = atol(tokens[ti]);
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
                    __FsTamTam::simulationData.asFacilityVOR.frequency = atol(tokens[ti++]);
                    __FsTamTam::simulationData.asFacilityVOR.flags = atol(tokens[ti++]);
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
                    __FsTamTam::simulationData.asFacilityTACAN.channel = atol(tokens[ti++]);
                    __FsTamTam::simulationData.asFacilityTACAN.xyBandIsY = atoi(tokens[ti]) != 0;
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
                    currentSimulationId++;
                    if (state < CONNECTED) break;
                    if (state > CONNECTED && simulation.accepted && __FsTamTam::onSimulationStop)
                        __FsTamTam::onSimulationStop();
                    safeStringCopy(simulation.modelName, p, NAME_MAX_SIZE);
                    state = WAIT_FOR_NUMBER_OF_ENGINES;
                    Serial.println(F("RSC1001")); // request NUMBER_OF_ENGINES, ON_CHANGE
                    Serial.flush();
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
        case 'W': // I
            if (iBufIdx != 1) { error = true; break; }
            if (state > CONNECTED) {
                state = CONNECTED;
                if (simulation.accepted && __FsTamTam::onSimulationStop) __FsTamTam::onSimulationStop();
            }
            if (state == CONNECTED && __FsTamTam::onDisconnect) __FsTamTam::onDisconnect();
            Serial.print('W');
            Serial.println(device);
            Serial.flush();
            state = CONNECTED;
            simulation.reset();
            if (__FsTamTam::onConnect) __FsTamTam::onConnect();
            break;
        case 'T':
            if (iBufIdx != 1) { error = true; break; }
            Serial.print(F("TTest mode "));
            Serial.println((testMode = !testMode) ? "ON" : "OFF");
            Serial.flush();
            break;
        default:
            error = true;
            break;
    }
    if (error) {
        Serial.println(F("TERROR: invalid packet"));
        Serial.flush();
    }
    Serial.println('N');
    Serial.flush();
}


bool __FsTamTam::begin(const char *deviceName, uint32_t msSimulationLoopPeriod, bool cduScreenData) {
    if (state > NOT_INITIALIZED || !deviceName || !strlen(deviceName) || !msSimulationLoopPeriod) return false;
    msLoop = msSimulationLoopPeriod;
    Serial.begin(115200);
    while (!Serial) delay(1);
    bufferSize = cduScreenData ? IN_LARGE_BUFFER_SIZE : IN_BUFFER_SIZE;
    iBuf = (char *) malloc(bufferSize);
    iBufIdx = 0;
    memset(device, 0x00, NAME_MAX_SIZE);
    char *s = (char *) deviceName;
    char *d = device;
    uint16_t len = strlen(s);
    len = min(len, NAME_MAX_SIZE - 1);
    for (uint16_t i = 0; i < len; i++) {
        char ch = toupper(*(s++));
        *(d++) = ((ch >= '0' && ch <= '9') || (ch >= 'A' && ch <= 'Z') || (ch == ' ')) ? ch : '_';
    }
    state = INITIALIZED;
    sendMagicNumberMessage();
    timeout.now();
    simulation.reset();
    return true;
}


void __FsTamTam::loop() {
    static uint32_t tLoop = 0;
    if (state == NOT_INITIALIZED) return;
    if (!testMode) {
        if (state == INITIALIZED && timeout.elapsed(TIMEOUT_PERIOD_SHORT)) {
            sendMagicNumberMessage();
            timeout.now();
        } else
        if (state >= CONNECTED && timeout.elapsed(TIMEOUT_PERIOD_LONG)) {
            if (state > SIMULATION && simulation.accepted && __FsTamTam::onSimulationStop) __FsTamTam::onSimulationStop();
            if (__FsTamTam::onDisconnect) __FsTamTam::onDisconnect();
            state = INITIALIZED;
            simulation.reset();
            timeout.now();
            return;
        }
    }
    while (Serial.available()) {
        char ch = Serial.read();
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
                if (iBufIdx >= (bufferSize - 2)) iBufIdx = 0;
                break;
        }
        timeout.now();
    }
    if (state > SIMULATION && simulation.accepted && (millis() - tLoop) >= msLoop) {
        tLoop = millis();
        if (__FsTamTam::onSimulationLoop) __FsTamTam::onSimulationLoop();
    }
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


void __FsTamTam::trace(const char *text) {
    if (state < CONNECTED) return;
    Serial.print('T');
    Serial.println(text);
    Serial.flush();
}

                         
void __FsTamTam::trace(const char *text, double d) {
    if (state < CONNECTED) return;
    Serial.print('T');
    Serial.print(text);
    Serial.print(F(" = "));
    Serial.println(d);
    Serial.flush();
}

                         
void __FsTamTam::trace(const char *text, int32_t i) {
    if (state < CONNECTED) return;
    Serial.print('T');
    Serial.print(text);
    Serial.print(F(" = "));
    Serial.println(i);
    Serial.flush();
}

                         
void __FsTamTam::error(const char *text) {
    if (state < CONNECTED) return;
    Serial.print('E');
    Serial.println(text);
    Serial.flush();
}

                         
void __FsTamTam::error(const char *text, double d) {
    if (state < CONNECTED) return;
    Serial.print('E');
    Serial.print(text);
    Serial.print(F(" = "));
    Serial.println(d);
    Serial.flush();
}

                         
void __FsTamTam::error(const char *text, int32_t i) {
    if (state < CONNECTED) return;
    Serial.print('E');
    Serial.print(text);
    Serial.print(F(" = "));
    Serial.println(i);
    Serial.flush();
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
        Serial.print('P');
        id -= PMDG_NGX_ID_OFFSET;
    } else
    if (id < 0) {
        Serial.print('G');
        id = -id;
    } else
        Serial.print('S');
    Serial.print(id);
    colon();
    Serial.println(param);
    Serial.flush();
}
    

void __FsTamTam::requestAIWaypointList() {
    if (state < SIMULATION || !simulation.accepted) return;
    Serial.println(F("LI"));
    Serial.flush();
}


void __FsTamTam::requestFacilityAirportList() {
    if (state < SIMULATION || !simulation.accepted) return;
    Serial.println(F("LA"));
    Serial.flush();
}


void __FsTamTam::requestFacilityWaypointList() {
    if (state < SIMULATION || !simulation.accepted) return;
    Serial.println(F("LW"));
    Serial.flush();
}


void __FsTamTam::requestFacilityNDBList() {
    if (state < SIMULATION || !simulation.accepted) return;
    Serial.println(F("LN"));
    Serial.flush();
}


void __FsTamTam::requestFacilityVORList() {
    if (state < SIMULATION || !simulation.accepted) return;
    Serial.println(F("LV"));
    Serial.flush();
}


void __FsTamTam::requestFacilityTACANList() {
    if (state < SIMULATION || !simulation.accepted) return false;
    Serial.println(F("LT"));
    Serial.flush();
}


//
// FsTamTam Smart Input (abstract class)
//


FsTamTamSmartInput::FsTamTamSmartInput() {
    simulationId = -1;
    assigned = change = false;
}


void FsTamTamSmartInput::setValue(int16_t newValue) {
    change = change || !assigned || (assigned && value != newValue);
    assigned = true;        
    value = newValue;
}


void FsTamTamSmartInput::loop() {
    if (simulationId != currentSimulationId) {
        // new simulation... reset variable
        simulationId = currentSimulationId;
        assigned = change = false;
    }
    update();
}


bool FsTamTamSmartInput::changed() {
    bool b = change;
    change = false;
    return b;        
}


int16_t FsTamTamSmartInput::getValue() {
    change = false;
    return value;
}

