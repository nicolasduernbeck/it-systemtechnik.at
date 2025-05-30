---
title: Application Layer
---

# Application Layer (Anwendungsschicht)

## Übersicht

Die Anwendungsschicht ist die oberste Schicht im OSI-Modell. Hier findet die eigentliche Kommunikation zwischen Programmen statt. Diese Schicht stellt die Schnittstelle zwischen den Netzwerkdiensten und den benutzerorientierten Anwendungen dar.

Beispiel: Wenn du eine Webseite im Browser aufrufst, kommuniziert der Browser über diese Schicht mit dem Webserver.

## Begriffe und Protokolle

- **HTTP/HTTPS**: Kommunikation mit Webseiten.
- **FTP**: Dateiübertragungen.
- **SMTP, IMAP, POP3**: E-Mail-Dienste.
- **DNS**: Auflösung von Domainnamen in IP-Adressen.
- **DHCP**: Automatische Vergabe von IP-Adressen.
- **Telnet / SSH**: Fernzugriff auf Geräte.

## Geräte

Auch hier handelt es sich um softwarebasierte Kommunikation:

- **Webbrowser**
- **E-Mail-Clients**
- **Dateiserver**
- **Webserver**
- **Terminalprogramme**

## Datenformat (PDU)

- **PDU (Protocol Data Unit)**: _Data_
- Auf dieser Schicht spricht man weiterhin von „Daten“, da keine zusätzliche Verpackung erfolgt.

## Zusammenfassung

| Schicht | Name                          | Funktion                                                     | PDU  | Beispielprotokolle        | Geräte (Beispiel)              |
| ------: | ----------------------------- | ------------------------------------------------------------ | ---- | ------------------------- | ------------------------------ |
|       7 | Application Layer (Anwendung) | Schnittstelle für Anwendungen, Benutzerzugriff aufs Netzwerk | Data | HTTP, FTP, DNS, SMTP, SSH | Browser, Mailprogramme, Server |
