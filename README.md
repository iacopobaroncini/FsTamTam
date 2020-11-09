# FsTamTam Data Exchange Framewowk

## Cross-platform Data Exchange Framework, for FSX and Prepar3D cockpit makers 

**FsTamTam Data Exchange Framework** is a freeware for FSX and Prepar3D cockpit makers. 

A computational light-weight Java AWT/Swing **FsTamTam Server** provides your cockpit elements (FsTamTam Clients or **devices**) a sort of “plug-and-play” data connectivity to your Flight Simulator via SimConnect.

You don’t need any other additional software in between your devices and your Flight Simulator.

**FsTamTam Data Exchange Framework** is the result of a 2-year long work, started in 2018, along the development of 4 devices (Figure 2 and Figure 3) for my son’s simulator, made for Boeing 737 PMDG-NGX models running on FSX-SE.

Thanks the programming guidelines in this document, the software components, and the templates provided in this distribution, you can develop **devices** in several forms, all sharing the same programming principles and using the same low-level protocol while communicating with **FsTamTam Server**.

Device forms:
* Physical elements driven by an Arduino board (i.e. panels with switches, selectors, rotary encoders, leds, etc) - Programming language C++ (Arduino) - Connection type: USB	- USB server-side: it automatically and consistently detects FsTamTam.
* PC command-line program - Programming language: C++ (standard) - Connection type: TCP - TCP server-side: it accepts TCP connections only from FsTamTam devices.
* PC command-line program - Programming language: Java - Connection type: TCP - TCP server-side: it accepts TCP connections only from FsTamTam devices.
* Web application - Programming languages: HTML5, CSS, JavaScript - Connection type: Websocket	- HTTP server-side: it acts as a regular web server, delivering HTML documents, style sheets, images and scripts to the requesting web browser on which the web application is running.

TCP server-side: it detects, accepts and manage Websocket connections only from FsTamTam devices. This is the channel where the FsTamTam low-level protocol is “spoken”.



The all-in-one **FsTamTam server** is a light-weight Java application that provides *plug-and-play* connectivity to **FsTamTam clients** (cockipt elements or *devices*), via: 
* USB connections (an Arduino library and template are provided).
* TCP connections (a C++ library and a template are provided).
* Websocket (over TCP) connections (a JavaScript library and a HTML5 template are provided).

... giving them uniform abstraction, optimal, and easy access to:
- **SimConnect**: variables (read only), events, lists (AI Waypoints, and Facility Airports, Waypoints, NDBs, VORs, TACANs).
- **PMDG-NGX**: variables, events, CDU screen data.
- **8 global variables** all FsTamTam clients could read and write, for possibly sharing info of "common" interest.
     
**FsTamTam Data Exchange Framework** implements mechanisms to:
* Provide data connectivity to the *devices* without any sort of intervention at start-up, upon disconnection and/or reconnection.
* Filters data traffic between SimConnect and the *devices* to the bare minimal.
* Compress CDU screen data (typically between 1:8 and 1:3, starting from PMDG-NGX CDU screen raw data packets of 1009 bytes in length).

The distribution also includes:
  * **FsTamTam Console**: a web-based console for monitoring the server activity, and an "exploration" tool for getting information on variables/events and, during simulation sessions, monitoring variables and sending events.
  * **FsTamTam CDU**: a fully featured web-based CDU *device* that could be run in the palm of your hand, on your mobile device.
  * FsTamTam clients programming templates.
  * Extensive and complete documentation.
  
## Devices we made for PMDG-NGX's B737
A couple of years ago, my son (the pilot) and I started to build his B737 cockpit. When the time of interfacing our devices with FSX-SE came, we tried many software we've found on the intenet, all with different and limted scope. We didn't go for the commercial and expensive ones, so I took the opportunity to start the FsTamTam project.

The FsTamTam *devices* we developed and integrated so far: 
* MAIN panel (Sparkfun Pro Micro, NeoPixels, wood, metal, 3D printing)
* MCP (Arduino Mega 2560, plexiglas, 3D printing, laser cutting)
* STAND (Arduino Mega 2560, moified servos, wood, metal, 3D printing)
* CDU (Sparkfun Pro Micro, 3D printing)

## Support FsTamTam

The development of FsTamTam Data Exchange Framework, as it is today, took a lot of time and effort in learning, coding, testing, optimizing and fine tuning.

Please consider to support the project with a PayPal donation (FsTamTam server in-app link).

## Other projects of mine
* SoyuzSim
* ISS Tracker
* LightThreads
