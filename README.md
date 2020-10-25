# FsTamTam Data Exchange Framewowk

## All-in-one data exchange framework for flight simulator cockpit makers.

The all-in-one **FsTamTam server** if a light-weight Java application that provides plug-and-play connectivity to **FsTamTam clients** (cockipt elements or *devices*), via: 
* USB (an Arduino library is provided).
* TCP (a C++ library is provided).
* WebSocket (a JavaScript library is provided for HTML5 developments).

Giving them an uniform, optimal, and easy acces to:
- SimConnect:
  * Variables (read only).
  * Events.
  * Lists (AI Waypoints, and Facility Airports, Waypoints, NDBs, VORs, TACANs).
- PMDG-NGX
  * Variables.
  * Events.
  * CDU screen data.
- 8 global variables all FsTamTam clients could read and write.
     
**FsTamTam Data Exchange Framework** provides mechanisms to:
* Provide data connectivity to the *devices* without any sort of intervention at start-up, upon disconnection and/or reconnection.
* Minimize data traffic between SimConnect and *devices* to the bare minimal.
* Compress CDU screen data (typically 1:3, starting from PMDG-NGX packets of 1009 bytes in length).

The distribution also includes:
  * **FsTamTam Console**: a web-based console for monitoring the server activity, and an "exploration" tool for getting information on variables/events and, during simulation sessions, monitoring variables and sending events.
  * **FsTamTam CDU**: a fully featured web-based CDU *device* that could be run in the palm of your hand, on your mobile device.
  * FsTamTam clients programming templates.
  * Extensive and complete documentation.
  
## Devices I made (for PMDG-NGX's B737)

* MAIN panel
* STAND (with motorized throttles and speedbrake lever)
* MCP
* CDU

## Support FsTamTam

The development of FsTamTam Data Exchange Framework, as it is today, took a lot of time and effort.

Please consider to support the project by PayPal donating (FsTamTam server in-app link).
     
