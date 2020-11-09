#include <FsTamTam.h>


#define DEVICE_NAME                   "NO NAME"
#define ON_SIMULATION_LOOP_PERIOD_MS  50
#define USE_CDU_SCREEN_DATA           false


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


void setup() {
  // ...
  FsTamTam.onConnect          = onConnect;
  FsTamTam.onSimulationStart  = onSimulationStart;
  FsTamTam.onSimulationLoop   = onSimulationLoop;
  FsTamTam.onSimulationData   = onSimulationData;
  FsTamTam.onSimulationStop   = onSimulationStop;
  FsTamTam.onDisconnect       = onDisconnect;
  if (!FsTamTam.begin(DEVICE_NAME, ON_SIMULATION_LOOP_PERIOD_MS, USE_CDU_SCREEN_DATA))
    while (true) delay(1000);
}


void loop() {
  // ...
  FsTamTam.loop();
  // ...
}
