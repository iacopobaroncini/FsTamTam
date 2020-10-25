# FsTamTam Data Exchenge Framewowk

**All-in-one data exchange framework for flight simulator cockpit makers.**

**FsTamTam server** provides connectivity to **FsTamTam clients** (cockipt elements or *devices*), via: 

* USB (an Arduino library is provided)
* TCP (a C++ library is provided)
* WebSocket (a JavaScript library is provided for HTML5 developments) 

Giving them an uniform, optimal, and easy acces to:

- SimConnect:
  * Variables (read only)
  * Events
  * Lists (AI Waypoints, and Facility Airports, Waypoints, NDBs, VORs, TACANs)
- PMDG-NGX
  * Variables
  * Events
  * CDU screen data
- 8 global variables 
     
**FsTamTam server**:
- Minimize data traffic between SimConnect and *devices*.
- CDU screen data is compressed (typical 1:3, starting from PMDG-NGX packet of 1009 bytes).
- Comes with:
  * **FsTamTam Console**: a web-based console that allows to monitor the server activity, to get informations on variables/events, to monitor variables and send events during simulation sessions.
  * **FsTamTam CDU**: a web-based CDU that could be run in the palm of your hand, on your mobile device.
  
##Please donate##

Ciao

     
