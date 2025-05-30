---
title: Session Layer
---

# Session Layer (Sitzungsschicht)

## Übersicht

Die Sitzungsschicht ist dafür zuständig, Kommunikationssitzungen zwischen zwei Geräten aufzubauen, zu steuern und zu beenden. Eine Sitzung ist wie ein Gespräch zwischen zwei Geräten – die Session Layer sorgt dafür, dass beide Seiten „zuhören“ und „sprechen“ können und dass die Verbindung dabei stabil bleibt.

Beispiel: Wenn du dich mit einem Server verbindest (z. B. bei einer Videokonferenz), sorgt dieser Layer dafür, dass die Verbindung bestehen bleibt und bei einer Unterbrechung ggf. wiederhergestellt wird.

## Begriffe und Protokolle

- **Sitzungsmanagement**: Verwaltung von Beginn, Steuerung und Ende von Verbindungen.
- **NetBIOS (Network Basic Input/Output System)**: Verwendet z. B. in Windows-Netzwerken zur Kommunikation zwischen Geräten im lokalen Netz.
- **RPC (Remote Procedure Call)**: Ermöglicht es Programmen, Funktionen auf anderen Computern auszuführen, als wären sie lokal.
- **SQL-Netzwerksitzungen**: Datenbankzugriffe über das Netzwerk werden oft über diese Schicht verwaltet.

## Geräte

Die Session Layer ist eher softwarebezogen – das heißt, es gibt **keine eigenen Geräte**, die nur auf dieser Schicht arbeiten. Die Sitzungsverwaltung passiert meist in der Software von Servern, Computern oder Anwendungen.

## Datenformat (PDU)

- **PDU (Protocol Data Unit)**: _Data_
- Auf dieser Schicht bleibt der Begriff „Daten“ erhalten, da es noch keine eigene technische Verpackung gibt wie bei Paketen oder Frames.

## Zusammenfassung

| Schicht | Name                    | Funktion                              | PDU  | Beispielprotokolle        | Geräte (Beispiel)            |
| ------: | ----------------------- | ------------------------------------- | ---- | ------------------------- | ---------------------------- |
|       5 | Session Layer (Sitzung) | Sitzungen starten, verwalten, beenden | Data | NetBIOS, RPC, SQL-Session | Server-Software, Anwendungen |
