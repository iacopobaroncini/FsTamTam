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


// Received data type
const DATA_TYPE_BOOLEAN                     = '0';
const DATA_TYPE_INTEGER                     = '1';
const DATA_TYPE_DOUBLE                      = '2';
const DATA_TYPE_TEXT                        = '3';
const DATA_TYPE_LLA                         = '4';
const DATA_TYPE_PBH                         = '5';
const DATA_TYPE_XYZ                         = '6';
const DATA_TYPE_AI_WAYPOINT                 = '7';
const DATA_TYPE_FACILITY_AIRPORT            = 'A';
const DATA_TYPE_FACILITY_WAYPOINT           = 'W';
const DATA_TYPE_FACILITY_NDB                = 'N';
const DATA_TYPE_FACILITY_VOR                = 'V';
const DATA_TYPE_FACILITY_TACAN              = 'T';


// Data delivery mode
const DELIVER_ON_CHANGE                     = 0;
const DELIVER_SECOND                        = 1;


class FsTamTamSimulationClass {
    constructor() {
        this.modelName = "";
        this.numberOfEngines = -1;
        this.isPmdgNgxModel = this.accepted = false;
    }
    
    reset() {
        this.modelName = "";
        this.numberOfEngines = -1;
        this.isPmdgNgxModel = this.accepted = false;
    }
}


// FsTamTam internal states
const FSTAMTAM_NOT_INITIALIZED              = 0;
const FSTAMTAM_INITIALIZED                  = 1;
const FSTAMTAM_CONNECTED                    = 2;
const FSTAMTAM_WAIT_FOR_NUMBER_OF_ENGINES   = 3;
const FSTAMTAM_SIMULATION                   = 4;
const FSTAMTAM_STANDARD_SIMULATION          = 5;
const FSTAMTAM_PMDG_NGX_SIMULATION          = 6;


const PMDG_NGX_ID_OFFSET                    = 0x00011000;


class FsTamTam {        

    static begin(deviceName) {
        if (FsTamTamStarted) return;
        FsTamTamStarted = true;
        FsTamTamIn = "";
        if (deviceName == null || deviceName == "")
            FsTamTamDeviceName = "NO_NAME";
        else {
            deviceName = deviceName.trim().toUpperCase();
            var s = "";
            for (var i = 0; i < deviceName.length; i++) {
                var ch = deviceName.charAt(i);
                s +=    (
                            (ch >= 'A' && ch <= 'Z') ||
                            (ch >= '0' && ch <= '9') ||
                            ch == ' ' ||
                            ch == '_'
                        ) ? ch : '_';
            }
            FsTamTamDeviceName = s;
        }
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "/function/tcp-port");
        xhr.onload = function() {
            if (xhr.status == 200) {
                FsTamTamUrl = "ws://" + location.hostname + ":" + xhr.responseText;
                FsTamTamBegin2();
            }
        };
        xhr.send();
    }
    
    static joinSimulation() {
        FsTamTamSimulation.accepted = true;
    }


    static modelName() {
        if (FsTamTamState < FSTAMTAM_SIMULATION) return "";
        return FsTamTamSimulation.modelName;
    }


    static numberOfEngines() {
        if (FsTamTamState < FSTAMTAM_SIMULATION) return 0;
        return FsTamTamSimulation.numberOfEngines;
    }


    static isPmdgNgxModel() {
        if (FsTamTamState < FSTAMTAM_SIMULATION) return false;
        return FsTamTamSimulation.isPmdgNgxModel;
    }

    static subscribeData(id, p1, p2) {
        if (FsTamTamState < FSTAMTAM_SIMULATION || !FsTamTamSimulation.accepted) return;
        var b1 = typeof(p1) !== 'undefined';
        var b2 = typeof(p2) !== 'undefined';
        var s;
        if (id > PMDG_NGX_ID_OFFSET) {
            if (FsTamTamState != FSTAMTAM_PMDG_NGX_SIMULATION) return;
            // PMDG-NGX variable
            id -= PMDG_NGX_ID_OFFSET;
            if (b1 && !b2) 
                s = "RP" + (((p1 * 1) == DELIVER_ON_CHANGE) ? 'C' : 'T') + id
            else
                return;
        } else
        if (id < 0) {
            // FsTamTam global variable
            id = -id;
            if (b1 || b2) return;
            s = "RG" + id;
        } else {
            // Simconnect variable 
            if (b1 && !b2 && id > 0 && id < 2000) 
                s = "RS" + (((p1 * 1) == DELIVER_ON_CHANGE) ? 'C' : 'T') + id;
            else
            if (b1 && b2 && id >= 2000 && id < PMDG_NGX_ID_OFFSET)
                s = "RS" + (((p2 * 1) == DELIVER_ON_CHANGE) ? 'C' : 'T') + id + ":" + p1;
            else 
                return;
        }
        FsTamTamWebSocket.send(s + "\n");
    }
       
    static unsubscribeData(id, p1) {
        if (FsTamTamState < FSTAMTAM_SIMULATION || !FsTamTamSimulation.accepted) return;
        var b1 = typeof(p1) !== 'undefined';
        var s;
        if (id > PMDG_NGX_ID_OFFSET && FsTamTamState == FSTAMTAM_PMDG_NGX_SIMULATION) {
            // PMDG-NGX variable
            id -= PMDG_NGX_ID_OFFSET;
            if (!b1) 
                s = "DP" + id;
            else
                return;
        } else
        if (id < 0) {
            // FsTamTam global variable
            id = -id;
            if (!b1)
                s = "DG" + id;
            else
                return;
        } else {
            // Simconnect variable
            if (b1 && id >= 2000) 
                s = "DS" + id + ":" + p1;
            else
                s = "DS" + id;
        }
        FsTamTamWebSocket.send(s + "\n");
    }    
    
    static sendData(id, value) {
        if (FsTamTamState < FSTAMTAM_SIMULATION || !FsTamTamSimulation.accepted || isNaN(value)) return;
        var s = '';
        if (id < 0)
            s = "G" + (-id);
        else
        if (id > PMDG_NGX_ID_OFFSET && FsTamTamState == FSTAMTAM_PMDG_NGX_SIMULATION)
            s = "P" + (id - PMDG_NGX_ID_OFFSET);
        else
            s = "S" + id;
        s += ":" + Math.round(value) + "\n";
        FsTamTamWebSocket.send(s);
    }

    static trace(msg) {
        if (FsTamTamState < FSTAMTAM_CONNECTED) return;
        var len = msg.length;
        if (len == 0) return;
        if (len > 123) 
            msg = msg.substr(0, 123); // truncate the text message
        FsTamTamWebSocket.send("T" + msg + "\n");
    }
    
    static error(msg) {
        if (FsTamTamState < FSTAMTAM_CONNECTED) return;
        var len = msg.length;
        if (len == 0) return;
        if (len > 123) 
            msg = msg.substr(0, 123); // truncate the text message
        FsTamTamWebSocket.send("E" + msg + "\n");
    }
    
    static requestAIWaypointList() {
        if (FsTamTamState < FSTAMTAM_SIMULATION || !FsTamTamSimulation.accepted) return;
        FsTamTamWebSocket.send("LI\n");
    }
    
    static requestFacilityAirportList() {
        if (FsTamTamState < FSTAMTAM_SIMULATION || !FsTamTamSimulation.accepted) return;
        FsTamTamWebSocket.send("LA\n");
    }
    
    static requestFacilityWaypointList() {
        if (FsTamTamState < FSTAMTAM_SIMULATION || !FsTamTamSimulation.accepted) return;
        FsTamTamWebSocket.send("LW\n");
    }
    
    static requestFacilityNDBList() {
        if (FsTamTamState < FSTAMTAM_SIMULATION || !FsTamTamSimulation.accepted) return;
        FsTamTamWebSocket.send("LN\n");
    }
    
    static requestFacilityVORList() {
        if (FsTamTamState < FSTAMTAM_SIMULATION || !FsTamTamSimulation.accepted) return;
        FsTamTamWebSocket.send("LV\n");
    }
    
    static requestFacilityTACANList() {
        if (FsTamTamState < FSTAMTAM_SIMULATION || !FsTamTamSimulation.accepted) return;
        FsTamTamWebSocket.send("LT\n");
    }
    
    // DO NOT USE!
    static sendRawCommand(msg) {
        msg = ("" + msg).trim();
        if (msg == "" || msg == "undefined") return;    
        FsTamTamWebSocket.send("" + msg + "\n");
    }
    
}


FsTamTam.simulationData         = new Object;
FsTamTam.onConnect              = function () {};
FsTamTam.onSimulationStart      = function () {};
FsTamTam.onSimulationData       = function () {};
FsTamTam.onSimulationStop       = function () {};
FsTamTam.onDisconnect           = function () {};


//
// FsTamTam Internals
//


let FsTamTamSimulation          = new FsTamTamSimulationClass();
let FsTamTamStarted             = false;
let FsTamTamDeviceName          = "";
let FsTamTamUrl                 = "";
let FsTamTamWebSocket           = null;
let FsTamTamState               = FSTAMTAM_NOT_INITIALIZED;
let FsTamTamIn                  = "";


function FsTamTamParseMessage() {
    var error = false;
    var protocolError = false;
    var len = FsTamTamIn.length;
    var tokens;
    var ti;
    var msg0 = FsTamTamIn.charAt(0);    
    switch (msg0) {
        case 'K':
            if (len != 1) { error = true; break; };
            break;
        case 'P':
            if (len < 4) { error = true; break; }
            if (FsTamTamState != FSTAMTAM_PMDG_NGX_SIMULATION) { protocolError = true; break; }
            FsTamTam.simulationData = new Object;
            FsTamTam.simulationData.type = FsTamTamIn.charAt(1);
            tokens = FsTamTamIn.substr(2).split(':');
            if (tokens.length != 2) { error = true; break; }
            ti = 0;
            FsTamTam.simulationData.id = (tokens[ti++] * 1) + PMDG_NGX_ID_OFFSET;
            FsTamTam.simulationData.index = 0;
            switch (FsTamTam.simulationData.type) {
                case DATA_TYPE_BOOLEAN:
                    FsTamTam.simulationData.asBool = ((tokens[ti++] * 1) != 0) ? true : false;
                    break;
                case DATA_TYPE_INTEGER:
                    FsTamTam.simulationData.asInt32 = tokens[ti++] * 1;
                    break;
                case DATA_TYPE_DOUBLE:
                    FsTamTam.simulationData.asDouble = tokens[ti++] * 1.0;
                    break;
                case DATA_TYPE_TEXT:
                    FsTamTam.simulationData.asText = tokens[ti++];
                    break;
                default:
                    error = true;
                    break;
            }
            if (error) break;
            FsTamTam.onSimulationData();
            break;
        case 'S':
            if (len < 4) { error = true; break; }
            if (FsTamTamState <= FSTAMTAM_CONNECTED) { protocolError = true; break; }
            FsTamTam.simulationData = new Object;
            FsTamTam.simulationData.type = FsTamTamIn.charAt(1);
            tokens = FsTamTamIn.substr(2).split(':');
            if (tokens.length < 2) { error = true; break; }
            ti = 0;
            FsTamTam.simulationData.id = tokens[ti++] * 1;
            if (FsTamTam.simulationData.id >= 2000)
                FsTamTam.simulationData.index = tokens[ti++] * 1;
            else
                FsTamTam.simulationData.index = 0;
            var left = tokens.length - ti;
            switch (FsTamTam.simulationData.type) {
                case DATA_TYPE_BOOLEAN:
                    if (left != 1) { error = true; break; }
                    FsTamTam.simulationData.asBool = ((tokens[ti++] * 1) != 0) ? true : false;
                    break;
                case DATA_TYPE_INTEGER:
                    if (left != 1) { error = true; break; }
                    FsTamTam.simulationData.asInt32 = tokens[ti++] * 1;
                    break;
                case DATA_TYPE_DOUBLE:
                    if (left != 1) { error = true; break; }
                    FsTamTam.simulationData.asDouble = tokens[ti++] * 1.0;
                    break;
                case DATA_TYPE_TEXT:
                    if (left != 1) { error = true; break; }
                    FsTamTam.simulationData.asText = tokens[ti++];
                    break;
                case DATA_TYPE_LLA:
                    if (left != 3) { error = true; break; }
                    FsTamTam.simulationData.asLLA = new Object;
                    FsTamTam.simulationData.asLLA.latitude = tokens[ti++] * 1.0;
                    FsTamTam.simulationData.asLLA.longitude = tokens[ti++] * 1.0;
                    FsTamTam.simulationData.asLLA.altitude = tokens[ti++] * 1.0;
                    break;
                case DATA_TYPE_PBH:
                    if (left != 3) { error = true; break; }
                    FsTamTam.simulationData.asPBH = new Object;
                    FsTamTam.simulationData.asPBH.pitch = tokens[ti++] * 1.0;
                    FsTamTam.simulationData.asPBH.bank = tokens[ti++] * 1.0;
                    FsTamTam.simulationData.asPBH.heading = tokens[ti++] * 1.0;
                    break;
                case DATA_TYPE_XYZ:
                    if (left != 3) { error = true; break; }
                    FsTamTam.simulationData.asXYZ = new Object;
                    FsTamTam.simulationData.asXYZ.x = tokens[ti++] * 1.0;
                    FsTamTam.simulationData.asXYZ.y = tokens[ti++] * 1.0;
                    FsTamTam.simulationData.asXYZ.z = tokens[ti++] * 1.0;
                    break;
                default:
                    error = true;
                    break;
            }
            if (error) break;
            if (FsTamTamState == FSTAMTAM_WAIT_FOR_NUMBER_OF_ENGINES) {
                if (FsTamTam.simulationData.id == NUMBER_OF_ENGINES) {
                    FsTamTamState = (FsTamTamSimulation.isPmdgNgxModel) ? FSTAMTAM_PMDG_NGX_SIMULATION : FSTAMTAM_STANDARD_SIMULATION;
                    FsTamTamWebSocket.send("DS1001\n");       
                    FsTamTamSimulation.numberOfEngines = FsTamTam.simulationData.asInt32;
                    FsTamTam.onSimulationStart();
                } else {
                    errorProtocol = true;
                }
                break;
            } else
                if (FsTamTamSimulation.accepted && FsTamTamState > FSTAMTAM_SIMULATION) FsTamTam.onSimulationData();
            break;
        case 'G':
            if (len < 4) { error = true; break; }
            if (FsTamTamState <= FSTAMTAM_SIMULATION) { protocolError = true; break; }
            tokens = FsTamTamIn.substr(1).split(':');
            if (tokens.length != 2) { error = true; break; }
            FsTamTam.simulationData = new Object;
            FsTamTam.simulationData.id = tokens[0] * -1;
            FsTamTam.simulationData.index = 0;
            FsTamTam.simulationData.type = DATA_TYPE_INTEGER;
            FsTamTam.simulationData.asInt32 = tokens[1] * 1;
            FsTamTam.onSimulationData();
            break;
        case 'L':
            ti = 0;
            switch (FsTamTamIn.charAt(1)) {
                case 'I':
                    if (FsTamTamIn.charAt(2) != ':') { error = true; break; }
                    tokens = FsTamTamIn.substr(3).split(':');
                    if (tokens.length != 8) { error = true; break; }
                    FsTamTam.simulationData = new Object;
                    FsTamTam.simulationData.id = 1635;
                    FsTamTam.simulationData.type = DATA_TYPE_AI_WAYPOINT;
                    FsTamTam.simulationData.asAIWaypoint = new Object;
                    FsTamTam.simulationData.asAIWaypoint.index = tokens[ti++] * 1;
                    FsTamTam.simulationData.asAIWaypoint.outOf = tokens[ti++] * 1;
                    FsTamTam.simulationData.asAIWaypoint.latitude = tokens[ti++] * 1.0;
                    FsTamTam.simulationData.asAIWaypoint.longitude = tokens[ti++] * 1.0;
                    FsTamTam.simulationData.asAIWaypoint.altitude = tokens[ti++] * 1.0;
                    FsTamTam.simulationData.asAIWaypoint.flags = tokens[ti++] * 1;
                    FsTamTam.simulationData.asAIWaypoint.ktsSpeed = tokens[ti++] * 1.0;
                    FsTamTam.simulationData.asAIWaypoint.percentThrottle = tokens[ti++] * 1.0;
                    break;
                case 'A':
                    if (FsTamTamIn.charAt(2) != ':') { error = true; break; }
                    tokens = FsTamTamIn.substr(3).split(':');
                    if (tokens.length != 6) { error = true; break; }
                    FsTamTam.simulationData = new Object;
                    FsTamTam.simulationData.id = 1990;
                    FsTamTam.simulationData.type = DATA_TYPE_FACILITY_AIRPORT;
                    FsTamTam.simulationData.asFacilityAirport = new Object;
                    FsTamTam.simulationData.asFacilityAirport.index = tokens[ti++] * 1;
                    FsTamTam.simulationData.asFacilityAirport.outOf = tokens[ti++] * 1;
                    FsTamTam.simulationData.asFacilityAirport.icao = tokens[ti++];
                    FsTamTam.simulationData.asFacilityAirport.latitude = tokens[ti++] * 1.0;
                    FsTamTam.simulationData.asFacilityAirport.longitude = tokens[ti++] * 1.0;
                    FsTamTam.simulationData.asFacilityAirport.altitude = tokens[ti++] * 1.0;
                    break;
                case 'W':
                    if (FsTamTamIn.charAt(2) != ':') { error = true; break; }
                    tokens = FsTamTamIn.substr(3).split(':');
                    if (tokens.length != 7) { error = true; break; }
                    FsTamTam.simulationData = new Object;
                    FsTamTam.simulationData.id = 1991;
                    FsTamTam.simulationData.type = DATA_TYPE_FACILITY_WAYPOINT;
                    FsTamTam.simulationData.asFacilityWaypoint = new Object;
                    FsTamTam.simulationData.asFacilityWaypoint.index = tokens[ti++] * 1;
                    FsTamTam.simulationData.asFacilityWaypoint.outOf = tokens[ti++] * 1;
                    FsTamTam.simulationData.asFacilityWaypoint.icao = tokens[ti++];
                    FsTamTam.simulationData.asFacilityWaypoint.latitude = tokens[ti++] * 1.0;
                    FsTamTam.simulationData.asFacilityWaypoint.longitude = tokens[ti++] * 1.0;
                    FsTamTam.simulationData.asFacilityWaypoint.altitude = tokens[ti++] * 1.0;
                    FsTamTam.simulationData.asFacilityWaypoint.magVar = tokens[ti++] * 1.0;
                    break;
                case 'N':
                    if (FsTamTamIn.charAt(2) != ':') { error = true; break; }
                    tokens = FsTamTamIn.substr(3).split(':');
                    if (tokens.length != 8) { error = true; break; }
                    FsTamTam.simulationData = new Object;
                    FsTamTam.simulationData.id = 1992;
                    FsTamTam.simulationData.type = DATA_TYPE_FACILITY_NDB;
                    FsTamTam.simulationData.asFacilityNDB = new Object;
                    FsTamTam.simulationData.asFacilityNDB.index = tokens[ti++] * 1;
                    FsTamTam.simulationData.asFacilityNDB.outOf = tokens[ti++] * 1;
                    FsTamTam.simulationData.asFacilityNDB.icao = tokens[ti++];
                    FsTamTam.simulationData.asFacilityNDB.latitude = tokens[ti++] * 1.0;
                    FsTamTam.simulationData.asFacilityNDB.longitude = tokens[ti++] * 1.0;
                    FsTamTam.simulationData.asFacilityNDB.altitude = tokens[ti++] * 1.0;
                    FsTamTam.simulationData.asFacilityNDB.magVar = tokens[ti++] * 1.0;
                    FsTamTam.simulationData.asFacilityNDB.frequency = tokens[ti++] * 1;
                    break;
                case 'V':
                    if (FsTamTamIn.charAt(2) != ':') { error = true; break; }
                    tokens = FsTamTamIn.substr(3).split(':');
                    if (tokens.length != 14) { error = true; break; }
                    FsTamTam.simulationData = new Object;
                    FsTamTam.simulationData.id = 1993;
                    FsTamTam.simulationData.type = DATA_TYPE_FACILITY_VOR;
                    FsTamTam.simulationData.asFacilityVOR = new Object;
                    FsTamTam.simulationData.asFacilityVOR.index = tokens[ti++] * 1;
                    FsTamTam.simulationData.asFacilityVOR.outOf = tokens[ti++] * 1;
                    FsTamTam.simulationData.asFacilityVOR.icao = tokens[ti++];
                    FsTamTam.simulationData.asFacilityVOR.latitude = tokens[ti++] * 1.0;
                    FsTamTam.simulationData.asFacilityVOR.longitude = tokens[ti++] * 1.0;
                    FsTamTam.simulationData.asFacilityVOR.altitude = tokens[ti++] * 1.0;
                    FsTamTam.simulationData.asFacilityVOR.magVar = tokens[ti++] * 1.0;
                    FsTamTam.simulationData.asFacilityVOR.frequency = tokens[ti++] * 1;
                    FsTamTam.simulationData.asFacilityVOR.flags = tokens[ti++] * 1;
                    FsTamTam.simulationData.asFacilityVOR.localizer = tokens[ti++] * 1.0;
                    FsTamTam.simulationData.asFacilityVOR.glideLat = tokens[ti++] * 1.0;
                    FsTamTam.simulationData.asFacilityVOR.glideLon = tokens[ti++] * 1.0;
                    FsTamTam.simulationData.asFacilityVOR.glideAlt = tokens[ti++] * 1.0;
                    FsTamTam.simulationData.asFacilityVOR.glideSlopeAngle = tokens[ti++] * 1.0;
                    break;
                case 'T':
                    if (FsTamTamIn.charAt(2) != ':') { error = true; break; }
                    tokens = FsTamTamIn.substr(3).split(':');
                    if (tokens.length != 9) { error = true; break; }
                    FsTamTam.simulationData = new Object;
                    FsTamTam.simulationData.id = 1994;
                    FsTamTam.simulationData.type = DATA_TYPE_FACILITY_TACAN;
                    FsTamTam.simulationData.asFacilityTACAN = new Object;
                    FsTamTam.simulationData.asFacilityTACAN.index = tokens[ti++] * 1;
                    FsTamTam.simulationData.asFacilityTACAN.outOf = tokens[ti++] * 1;
                    FsTamTam.simulationData.asFacilityTACAN.icao = tokens[ti++];
                    FsTamTam.simulationData.asFacilityTACAN.latitude = tokens[ti++] * 1.0;
                    FsTamTam.simulationData.asFacilityTACAN.longitude = tokens[ti++] * 1.0;
                    FsTamTam.simulationData.asFacilityTACAN.altitude = tokens[ti++] * 1.0;
                    FsTamTam.simulationData.asFacilityTACAN.magVar = tokens[ti++] * 1.0;
                    FsTamTam.simulationData.asFacilityTACAN.channel = tokens[ti++] * 1;
                    FsTamTam.simulationData.asFacilityTACAN.xyBandIsY = tokens[ti++] * 1;
                    break;   
                default:
                    error = true;
                    break;
            }
            if (error) break;
            if (FsTamTamSimulation.accepted && FsTamTamState > FSTAMTAM_SIMULATION) FsTamTam.onSimulationData();
            break;
        case 'M':
            if (FsTamTamState < FSTAMTAM_CONNECTED || len < 4) { error = true; break; }
            if (FsTamTamIn.charAt(2) != ':') { error = true; break; }
            FsTamTamSimulation.isPmdgNgxModel = false;
            switch (FsTamTamIn.charAt(1)) {
                case 'P':
                    FsTamTamSimulation.isPmdgNgxModel = true;
                case 'S':
                    FsTamTamSimulation.modelName = FsTamTamIn.substr(3); 
                    break;
                default:
                    error = true;
                    break;
            }
            if (error) break;
            if (FsTamTamState > FSTAMTAM_SIMULATION && FsTamTamSimulation.accepted)
                FsTamTam.onSimulationStop();
            FsTamTamState = FSTAMTAM_WAIT_FOR_NUMBER_OF_ENGINES;
            FsTamTamWebSocket.send("RSC1001\n");           
            break;
        case 'X':
            if (len != 1) { error = true; break; };
            if (FsTamTamState > FSTAMTAM_SIMULATION && FsTamTamSimulation.accepted) 
                FsTamTam.onSimulationStop();
            FsTamTamState = FSTAMTAM_CONNECTED;
            break;
        case 'W':
            if (len != 1) { error = true; break; };
            if (FsTamTamState > FSTAMTAM_CONNECTED) {
                protocolError = true;
                FsTamTamState = FSTAMTAM_CONNECTED;
                FsTamTam.onSimulationStop();
            }
            if (FsTamTamState == FSTAMTAM_CONNECTED) {
                protocolError = true;
                FsTamTam.onDisconnect();
            }
            FsTamTamWebSocket.send("W" + FsTamTamDeviceName + "\n");
            FsTamTamState = FSTAMTAM_CONNECTED;
            FsTamTamSimulation.reset();
            FsTamTam.onConnect();
            break;
        default:
            error = true;
            break;
    }
    if (error)
        showError('Dropping invalid packet&nbsp;&nbsp;&nbsp;<code style="color:yellow;">' + FsTamTamIn + '</code>', true);
    else
    if (protocolError)
        showError('Protocol violation with packet&nbsp;&nbsp;&nbsp;<code style="color:yellow    ">' + FsTamTamIn + '</code>', false);
    FsTamTamWebSocket.send("N\n");     
}


function FsTamTamBegin2() {
    var ref = document.getElementById('fstamtamerrormessage');
    if (ref == null) {
        var ref = document.createElement("div");
        ref.setAttribute('id', 'fstamtamerrormessage');
        ref.appendChild(document.createTextNode(""));
        document.getElementsByTagName('body')[0].appendChild(ref);
        ref = document.getElementById('fstamtamerrormessage');
        ref.style.position = 'fixed';
        ref.style.left = '0';
        ref.style.bottom = '-30vh';
        ref.style.width = '100vw';
        ref.style.padding = '20px 20px';
        ref.style.backgroundColor = '#990000';
        ref.style.color = 'white';
        ref.style.transition = '0.3s';
    }
    try {
        FsTamTamWebSocket = new WebSocket(FsTamTamUrl);
        if (FsTamTamWebSocket == null) {
            setTimeout(FsTamTamBegin2, 1000);
            return;
        }
        FsTamTamWebSocket.onopen = function (event) {
            FsTamTamWebSocket.send("\n!AB3F8F86718BD092\n");
        }
        FsTamTamWebSocket.onclose = function (event) {
            FsTamTamIn = '';
            if (FsTamTamState >= FSTAMTAM_SIMULATION && FsTamTamSimulation.accepted)
                FsTamTam.onSimulationStop();
            if (FsTamTamState >= FSTAMTAM_CONNECTED && FsTamTam.onDisconnect)
                FsTamTam.onDisconnect();
            FsTamTamState = FSTAMTAM_NOT_INITIALIZED;
            setTimeout(FsTamTamBegin2, 1000);
        }
        FsTamTamWebSocket.onmessage = function (event) {  
            var len = event.data.length;
            var ch;
            for (var i = 0; i < len; i++) {
                ch = event.data.charAt(i);
                switch (ch) {
                    case '\r':
                    case '\n':
                        if (FsTamTamIn.length > 0)
                            FsTamTamParseMessage();
                        FsTamTamIn = '';
                        break;
                    default:
                        FsTamTamIn += ch;
                        break;
                }
            }
        }
        FsTamTamWebSocket.onerror = function (event) {}
    } catch (err) {}
}


let FsTamTamErrorTimeout = -1;

function showError(errorMsg, isError) {
    var ref = document.getElementById('fstamtamerrormessage');
    ref.innerHTML = errorMsg;  
    ref.style.bottom = '10vh';
    ref.style.backgroundColor = isError ? "#800" : "#850";
    if (FsTamTamErrorTimeout != -1)
        clearTimeout(FsTamTamErrorTimeout);
    FsTamTamErrorTimeout = setTimeout(function () {
        var ref = document.getElementById('fstamtamerrormessage');
        ref.innerHTML = "";
        ref.style.bottom = '-30vh';
    }, 6000);    
}



