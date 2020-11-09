//
//  main.cpp
//  FsTamTam client
//
//  Created by Iacopo Baroncini on 19/09/2020.
//  Copyright © 2020 Iacopo Baroncini. All rights reserved.
//


#include <iostream>
#include <iomanip>
#include <sys/socket.h>
#include <arpa/inet.h>
#include <netdb.h>
#include "FsTamTam/FsTamTam.h"


#define DEVICE_NAME                     "NO NAME"
#deifne ON_SIMULATION_LOOP_PERIOD_MS    50
#define FSTAMTAM_SERVER_IP4_ADDRESS     "127.0.0.1"
#define FSTAMTAM_SERVER_IP4_PORT        9090


void onConnect() {
    // ...
}


void onSimulationStart() {
    // ...
    FsTamTam.joinSimulation();
    // ...
}


void onSimulationLoop() {
    // ...
}


void onSimulationData() {
    switch (FsTamTam.simulationData.id) {
        default:
            break;
    }
}


void onSimulationStop() {
    // ...
}


void onDisconnect() {
    // ...
}


int main(int argc, const char * argv[]) {
    FsTamTam.onConnect = onConnect;
    FsTamTam.onSimulationStart = onSimulationStart;
    FsTamTam.onSimulationLoop = onSimulationLoop;
    FsTamTam.onSimulationData = onSimulationData;
    FsTamTam.onSimulationStop = onSimulationStop;
    FsTamTam.onDisconnect = onDisconnect;
    if (!FsTamTam.begin(
            DEVICE_NAME,
            FSTAMTAM_SERVER_IP4_ADDRESS,
            FSTAMTAM_SERVER_PORT,
            ON_SIMULATION_LOOP_PERIOD_MS
    )) {
        // something went wrong
        exit(-1);
    }
    while (true) FsTamTam.loop();
}

