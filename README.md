# FsTamTam Data Exchange Framewowk

## Cross-platform Data Exchange Framework, for FSX and Prepar3D cockpit makers 

**FsTamTam Data Exchange Framework** is a freeware for FSX and Prepar3D cockpit makers. 

A computational light-weight Java AWT/Swing **FsTamTam Server** provides your cockpit elements (FsTamTam Clients or **devices**) a sort of “plug-and-play” data connectivity to your Flight Simulator via SimConnect.

You don’t need any other additional software in between your devices and your Flight Simulator.

**FsTamTam Data Exchange Framework** is the result of a 2-year long work, started in 2018, along the development of 4 devices for my son’s simulator, made for Boeing 737 PMDG-NGX models running on FSX-SE:
* **STAND** – Arduino Mega 2560, switches, push button, motorized throttles and speed break levers, NeoPixel, 3D printing, wood.
* **MCP** – Arduino Mega 2560, switches, push buttons, encoders, leds, 3D printing, laser cutting, plexiglass.
* **CDU** – Arduino Uno, push buttons, leds, 3D printing.
* **MAIN Panel** – Sparkfun Pro Micro, switches, selectors, NeoPixels, 3D printing, wood and metal. 

Thanks the programming guidelines in this document, the software components, and the templates provided in this distribution, you can develop **devices** in several forms, all sharing the same programming principles and using the same low-level protocol while communicating with **FsTamTam Server**.

Possible **device** forms are:
* **Physical elements driven by an Arduino board** (i.e. panels with switches, selectors, rotary encoders, leds, etc) - Programming language C++ (Arduino) - Connection type: USB	- USB server-side: it automatically and consistently detects FsTamTam.
* **PC command-line C++ program** - Programming language: C++ (standard) - Connection type: TCP - TCP server-side: it accepts TCP connections only from FsTamTam devices.
* **PC command-line Java program** - Programming language: Java - Connection type: TCP - TCP server-side: it accepts TCP connections only from FsTamTam devices.
* **Web application** - Programming languages: HTML5, CSS, JavaScript - Connection type: Websocket	- HTTP server-side: it acts as a regular web server, delivering HTML documents, style sheets, images and scripts to the requesting web browser on which the web application is running.

By using a static interface class, your **device**:
* Is notified when connects-to/disconnects-from the **FsTamTam Server**.
* Is notified when a simulation starts/stops running on your Flight Simulator.
* Is notified when data (you’ve subscribed to) is available, such as.
* Can easly access **SimConnect Variables** (read only), and **list elements** such as AI Waypoint, and Facility Airport/Waypoint/NDB/VOR/TACAN).
* Can easly access **PMDG-NGX Variables**, and **PMDG-NGX CDUs Screen Data**.
* Can easly aceess 8 **FsTamTam Global Variables** (32-bit integers) all **devices** could share for exchanging info of “common” interest, if needed.
* Can easly trigger **SimConnect events** and **PMDG-NGX events**.
* Can easly set the value of the **FsTamTam Global Variables** (32-bit integers).

The distribution includes:

* **FsTamTam Server** – A Java AWT/Swing application.
* **FsTamTam Console** – A web-based application for getting basic information and programming hints on variables/events and, during simulation sessions, monitoring variables and sending events. Basically, it is a very useful tool for understanding what kind of variable and event data your device shall deal with.
* **FsTamTam CDU device** – A fully featured web **device** that implements the left or right CDU. It could be also used in the palm of your hand, on your mobile phone or tablet.
* Device programming guides and templates for the various platforms and languages.

For any further explanation, or if have any suggestions, do not hesitate to contact me.



## Other projects of mine
* **SoyuzSim** - Paid app for iOS and Android - A very realistic space simulator for whom wants to learn how to manually manoeuvre the legendary Soyuz spacecraft during on-orbit operations around the International Space Station (ISS). Video trailer: [https://www.youtube.com/watch?v=V33kDNQ6fDU](https://www.youtube.com/watch?v=V33kDNQ6fDU)
* **ISS Tracker** - Development for the European Space Agency. The most viewed ISS Tracker on Earth, with **350 million-views between 2015 and 2020**. It has been selected by **NASA** and embedded in the **NASA HDEV experiment** web page that streams live footage from outside the ISS: [https://eol.jsc.nasa.gov/ESRS/HDEV/](https://eol.jsc.nasa.gov/ESRS/HDEV/)


