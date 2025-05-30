# OSI

## Was ist das OSI-Modell

Die Abkürzung **OSI** steht für _Open Systems Interconnection_. Das OSI-Modell beschreibt die Kommunikation in einem Netzwerk in sieben hierarchisch aufgebauten Schichten.

Dabei sind die Schichten 1 bis 4 **netzwerktechnisch orientiert** (transportorientiert), während die Schichten 5 bis 7 **anwendungsorientiert** sind.

## Schichten (Layer 7–1)

| Schicht | Englisch                                           | Deutsch                | Funktion / Beispiele                           | Dateneinheit / PDU  |
| ------: | -------------------------------------------------- | ---------------------- | ---------------------------------------------- | ------------------- |
|       7 | [Application Layer](/netzwerktechnik/osi/layer-7)  | Anwendungsschicht      | HTTP, FTP, SMTP, DNS – Software-Anwendungen    | Daten (Data)        |
|       6 | [Presentation Layer](/netzwerktechnik/osi/layer-6) | Darstellungsschicht    | Verschlüsselung (SSL/TLS), Formatierung (MIME) | Daten (Data)        |
|       5 | [Session Layer](/netzwerktechnik/osi/layer-5)      | Sitzungsschicht        | Sitzungsaufbau/-steuerung, RPC, NetBIOS        | Daten (Data)        |
|       4 | [Transport Layer](/netzwerktechnik/osi/layer-4)    | Transportschicht       | TCP, UDP – Portnummern, Verbindungssteuerung   | Segment / Datagramm |
|       3 | [Network Layer](/netzwerktechnik/osi/layer-3)      | Vermittlungsschicht    | IP, ICMP, Router – Pfadfindung                 | Paket (Packet)      |
|       2 | [Data Link Layer](/netzwerktechnik/osi/layer-2)    | Sicherungsschicht      | MAC, Switches, Ethernet – Rahmenbildung        | Rahmen (Frame)      |
|       1 | [Physical Layer](/netzwerktechnik/osi/layer-1)     | Bitübertragungsschicht | Kabel, Hubs, elektrische Signale, WLAN         | Bit (Bit)           |
