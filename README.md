# FsTamTam

**All-in-one data exchange framework for flight simulator cockpit makers.**

**FsTamTam server** provides optimal, uniform, and easy access to:

- SimConnect:
     * Variables (read only)
     * Events
     * Lists (AI Waypoints, and Facility Airports, Waypoints, NDBs, VORs, TACANs)
     * Facility VORs
     * Facility TACANs
- PMDG-NGX
     * Variables
     * Events
     * CDU data
     
Giving connectivity to cockipt elements (devices):

* Based on Arduino boards (via USB)
* C++ programs (raw TCP connections)
* HTML5 (WebSocket - over TCP - connections) 
     
