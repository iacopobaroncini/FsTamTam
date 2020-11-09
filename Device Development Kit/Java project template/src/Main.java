package org.iacopobaroncini;

import org.iacopobaroncini.FsTamTam.*;

public class Main {

    private static final String DEVICE_NAME                     = "NO NAME";
    private static final int    ON_SIMULATION_LOOP_PERIOD_MS    = 50; 
    private static final String FSTAMTAM_SERVER_IP4_ADDRESS     = "127.0.0.1"; 
    private static final int    FSTAMTAM_SERVER_PORT            = 9090; 
    
    public static void main(String[] args) {

        FsTamTam.onConnect = () -> {
            // ...
        };

        FsTamTam.onSimulationStart = () -> {
            // ...
            FsTamTam.joinSimulation();
            // ...
        };

        FsTamTam.onSimulationLoop = () -> {
            // ...
        };

        FsTamTam.onSimulationData = () -> {
            switch (FsTamTam.simulationData.id) {
                // ...
                default:
                    break;
            }
        };

        FsTamTam.onSimulationStop = () -> {
            // ...
        };

        FsTamTam.onDisconnect = () -> {
            // ...
        };

        try {
            FsTamTam.begin(
                DEVICE_NAME, 
                FSTAMTAM_SERVER_IP4_ADDRESS,
                FSTAMTAM_SERVER_PORT,
                ON_SIMULATION_LOOP_PERIOD_MS
            );
            while (true) FsTamTam.loop();
        } catch (Exception e) {
            e.printStackTrace();
            System.exit(-1);
        }
    }
}
