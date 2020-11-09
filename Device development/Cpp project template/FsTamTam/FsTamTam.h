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



#ifndef _H_FSTAMTAM
#define _H_FSTAMTAM


#include <stddef.h>
#include <stdint.h>


//
//
// Constants & types
//
//

// IDs for SimConnect variables and events 
#include "SimConnect/SimConnectVariables.h"
#include "SimConnect/SimConnectEvents.h"


// IDs for PMDG-NGX variables, events, and mouse-flags 
#include "PmdgNgx/PmdgNgxVariables.h"
#include "PmdgNgx/PmdgNgxEvents.h"
#include "PmdgNgx/PmdgNgxMouseFlags.h"

#include "FsTamTamCduScreenData.h"


// IDs for FsTamTam global variables
#define GLOBAL_VARIABLE_1   -1
#define GLOBAL_VARIABLE_2   -2
#define GLOBAL_VARIABLE_3   -3
#define GLOBAL_VARIABLE_4   -4
#define GLOBAL_VARIABLE_5   -5
#define GLOBAL_VARIABLE_6   -6
#define GLOBAL_VARIABLE_7   -7
#define GLOBAL_VARIABLE_8   -8


// Received data type
typedef enum {
    DATA_TYPE_BOOLEAN,
    DATA_TYPE_INTEGER,
    DATA_TYPE_DOUBLE,
    DATA_TYPE_TEXT,
    DATA_TYPE_LLA,
    DATA_TYPE_PBH,
    DATA_TYPE_XYZ,
    DATA_TYPE_AI_WAYPOINT,
    DATA_TYPE_FACILITY_AIRPORT,
    DATA_TYPE_FACILITY_WAYPOINT,
    DATA_TYPE_FACILITY_NDB,
    DATA_TYPE_FACILITY_VOR,
    DATA_TYPE_FACILITY_TACAN
} FsTamTamDataType;


// data delivery mode
typedef enum {
    DELIVER_ON_CHANGE,
    DELIVER_SECOND
} FsTamTamDataDelivery;


// Callback type
typedef void (*FsTamTamCallback)();


// Data structure for SimConnect, PMDG-NGX and FsTamTam global variables
typedef struct {
    int32_t             id;         // see SimConnectVariables.h, PmdgNgxVariables.h and FsTamTam Global Variable IDs
    uint8_t             index;      // index for SimConnect array variables / otherwise 0
    FsTamTamDataType    type;
    union {
        uint8_t     asBool;
        int32_t     asInt32;
        double      asDouble;
        char        *asText;
        struct {
            double      latitude;
            double      longitude;
            double      altitude;
        } asLLA;
        struct {
            double      pitch;
            double      bank;
            double      heading;
        } asPBH;
        struct {
            double      x;
            double      y;
            double      z;
        } asXYZ;
        struct {
            uint32_t    index;
            uint32_t    outOf;
            double      latitude;
            double      longitude;
            double      altitude;
            uint32_t    flags;
            double      ktsSpeed;
            double      percentThrottle;
        } asAIWaypoint;
        struct {
            uint32_t    index;
            uint32_t    outOf;
            char        *icao;
            double      latitude;
            double      longitude;
            double      altitude;
        } asFacilityAirport;
        struct {
            uint32_t    index;
            uint32_t    outOf;
            char        *icao;
            double      latitude;
            double      longitude;
            double      altitude;
            double      magVar;
        } asFacilityWaypoint;
        struct {
            uint32_t    index;
            uint32_t    outOf;
            char        *icao;
            double      latitude;
            double      longitude;
            double      altitude;
            double      magVar;
            uint32_t    frequency;
        } asFacilityNDB;
        struct {
            uint32_t    index;
            uint32_t    outOf;
            char        *icao;
            double      latitude;
            double      longitude;
            double      altitude;
            double      magVar;
            uint32_t    frequency;
            uint32_t    flags;
            double      localizer;
            double      glideLat;
            double      glideLon;
            double      glideAlt;
            double      glideSlopeAngle;
        } asFacilityVOR;
        struct {
            uint32_t    index;
            uint32_t    outOf;
            char        *icao;
            double      latitude;
            double      longitude;
            double      altitude;
            double      magVar;
            uint32_t    channel;
            uint8_t     xyBandIsY;
        } asFacilityTACAN;
    };
} FsTamTamData;


//                 
//                 
// FsTamTam CLIENT
//                
//

class __FsTamTam {
    
    public:
    
        static FsTamTamData         simulationData;
    
        //
        // Initialization & loop
        //
    
        // FsTamTam setup to be called in Arduino setup
        static bool begin(const char *deviceName, const char *addr, int port, uint64_t msSimulationLoopPeriod);
        
        // To be called frequently
        static void loop();
    
        // The device take part to the running rimulation (to be caller in onSimulationStart() callback
        static void joinSimulation();
    
        // Returns the model name if the simulation is running, otherwise ""
        static char *modelName();

    
        // Returns the number of engines of the model name if the simulation is running, otherwise -1
        static int numberOfEngines();
    
        // Returns true if the model is PMDG-NGX, otherwise false
        static bool isPmdgNgxModel();
    
        //
        // Variables subscription
        //

        // Variable subscription (for SimConnect (not-array), PMDG-NGX
        static void subscribeData(int32_t id, FsTamTamDataDelivery delivery);
    
        // Variable subscription (for SimConnect array variables ONLY)
        static void subscribeData(int32_t id, uint8_t index, FsTamTamDataDelivery delivery);

        // Variable subscription (for Global variables ONLY)
        static void subscribeData(int32_t id);

        //
        // Variables unsubscription
        //

        // Variable unsubscription (for SimConnect (not-array), PMDG-NGX, and Global Variables)
        static void unsubscribeData(int32_t id);
    
        // Variable subscription (for SimConnect array variables ONLY)
        static void unsubscribeData(int32_t id, uint8_t index);
            
        //
        // Events and global variables data transmission
        //

        // Send events to FsTamTam server (SimConnect and PMDG-NGX events), or global variables values
        static void sendData(int32_t id, int32_t param);

        //
        // Trace
        //

        // Text message that will displayed by the FsTamTam server
        static void trace(const char *text);

        // Error message that will displayed by the FsTamTam server
        static void error(const char *text);

        //
        // LIST REQUESTS
        //
    
        static void requestAIWaypointList();
        static void requestFacilityAirportList();
        static void requestFacilityWaypointList();
        static void requestFacilityNDBList();
        static void requestFacilityVORList();
        static void requestFacilityTACANList();

        //
        // CALLBACKS (to be defined in your program)
        //
        
        // Called upon connection to FsTamTam server
        static FsTamTamCallback onConnect;
        
        // Called upon simulation start.
        // You can decide if your device can work with the current simulated model...
        // You must check the params and return JOIN_SIMULATION or DO_NOT_JOIN_SIMULATION
        static FsTamTamCallback onSimulationStart;
    
        // Called every X ms when simulation is running (if you returned JOIN_SIMULATION in onSimulationStart)
        static FsTamTamCallback onSimulationLoop;
    
        static FsTamTamCallback onSimulationData;
    
        // Called upon simulation termination or sudden disconnection with FsTamTam server (befor onDisconnect)
        // (if you returned JOIN_SIMULATION in onSimulationStart)
        static FsTamTamCallback onSimulationStop;
    
        // Called upon disconnection from FsTamTam server
        static FsTamTamCallback onDisconnect;
    
};


extern __FsTamTam FsTamTam;


#endif
