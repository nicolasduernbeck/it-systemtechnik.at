# OSI

## Was ist das OSI-Modell

Die Abkürzung **OSI** steht für _Open Systems Interconnection_. Das OSI-Modell beschreibt die Kommunikation in einem Netzwerk in sieben hierarchisch aufgebauten Schichten.

Dabei sind die Schichten 1 bis 4 **netzwerktechnisch orientiert** (transportorientiert), während die Schichten 5 bis 7 **anwendungsorientiert** sind.

## Schichten (Layer 7–1)

| Schicht | Englisch           | Deutsch                | Funktion / Beispiele                           | PDU-Typ             |
| ------: | ------------------ | ---------------------- | ---------------------------------------------- | ------------------- |
|       7 | Application Layer  | Anwendungsschicht      | HTTP, FTP, SMTP, DNS – Software-Anwendungen    | Daten (Data)        |
|       6 | Presentation Layer | Darstellungsschicht    | Verschlüsselung (SSL/TLS), Formatierung (MIME) | Daten (Data)        |
|       5 | Session Layer      | Sitzungsschicht        | Sitzungsaufbau/-steuerung, RPC, NetBIOS        | Daten (Data)        |
|       4 | Transport Layer    | Transportschicht       | TCP, UDP – Portnummern, Verbindungssteuerung   | Segment / Datagramm |
|       3 | Network Layer      | Vermittlungsschicht    | IP, ICMP, Router – Pfadfindung                 | Paket (Packet)      |
|       2 | Data Link Layer    | Sicherungsschicht      | MAC, Switches, Ethernet – Rahmenbildung        | Rahmen (Frame)      |
|       1 | Physical Layer     | Bitübertragungsschicht | Kabel, Hubs, elektrische Signale, WLAN         | Bit (Bit)           |
