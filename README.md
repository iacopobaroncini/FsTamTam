# FsTamTam Data Exchange Framewowk

## All-in-one data exchange framework for flight simulator cockpit makers.

The all-in-one **FsTamTam server** is a light-weight Java application that provides plug-and-play connectivity to **FsTamTam clients** (cockipt elements or *devices*), via: 
* USB connections (an Arduino library and template are provided).
* TCP connections (a C++ library and a template are provided).
* Websocket (over TCP) connections (a JavaScript library and a HTML5 template are provided).

Giving them an uniform, optimal, and easy acces to:
- SimConnect:
  * Variables (read only).
  * Events.
  * Lists (AI Waypoints, and Facility Airports, Waypoints, NDBs, VORs, TACANs).
- PMDG-NGX
  * Variables.
  * Events.
  * CDU screen data.
- 8 global variables all FsTamTam clients could read and write, for possibly share some "general" info.
     
**FsTamTam Data Exchange Framework** provides mechanisms to:
* Provide data connectivity to the *devices* without any sort of intervention at start-up, upon disconnection and/or reconnection.
* Minimize data traffic between SimConnect and *devices* to the bare minimal.
* Compress CDU screen data (typically 1:3, starting from PMDG-NGX packets of 1009 bytes in length).

The distribution also includes:
  * **FsTamTam Console**: a web-based console for monitoring the server activity, and an "exploration" tool for getting information on variables/events and, during simulation sessions, monitoring variables and sending events.
  * **FsTamTam CDU**: a fully featured web-based CDU *device* that could be run in the palm of your hand, on your mobile device.
  * FsTamTam clients programming templates.
  * Extensive and complete documentation.
  
## Devices we made for PMDG-NGX's B737
My son (the pilot) and I, we started to build his B737 cockpit a couple of years ago. When the time of interfacing our devices with FSX-SE came, we tried many software we've found on the intenet, all with different and limted scope. We didn't go for the commercial and expensive ones, so I took the opportunity to start the FsTamTam project.

The FsTamTam *devices* we developed and integrated so far: 
* MAIN panel (Sparkfun Pro Micro, NeoPixels, wood, metal, 3D printing)
* MCP (Arduino Mega 2560, plexiglas, 3D printing, laser cutting)
* STAND (Arduino Mega 2560, moified servos, wood, metal, 3D printing)
* CDU (Sparkfun Pro Micro, 3D printing)

## Support FsTamTam

The development of FsTamTam Data Exchange Framework, as it is today, took a lot of time and effort.

Please consider to support the project by PayPal donating (FsTamTam server in-app link).
     
