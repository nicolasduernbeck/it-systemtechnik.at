---
title: Transport Layer
---

# Transport Layer (Transportschicht)

## Übersicht

Der Transport Layer sorgt dafür, dass die Daten zuverlässig von einem Gerät zum anderen übertragen werden – auch wenn sie über verschiedene Wege laufen. Er kümmert sich um:

- Die **Zerlegung großer Datenmengen in kleinere Teile** (Segmente)
- Die **Zusammenfügung der Daten** auf der Empfängerseite
- Die **Fehlererkennung** und ggf. **erneute Übertragung** bei verlorenen Daten
- Die **Reihenfolge** der Pakete

Diese Schicht ist besonders wichtig, damit Programme (z. B. Webbrowser, E-Mail) stabil miteinander kommunizieren können.

## Protokolle

- **TCP (Transmission Control Protocol)**  
  Verbindungsorientiert:

  - Stellt eine Verbindung her (Handshake)
  - Garantiert, dass alle Daten ankommen (und in der richtigen Reihenfolge)
  - Wird z. B. bei Webseiten (HTTP), E-Mails (SMTP) oder FTP verwendet

- **UDP (User Datagram Protocol)**  
  Verbindungslos:
  - Schneller, aber ohne Garantie für Ankunft oder Reihenfolge
  - Wird z. B. für Live-Streams, Online-Gaming oder VoIP verwendet

## Geräte

Der Transport Layer wird **nicht direkt von Hardware-Geräten**, sondern **von Programmen auf den Endgeräten** verwendet (z. B. Webbrowser, Mail-Client, Spiele).  
Daher gibt es hier **keine klassischen Netzwerkgeräte** wie bei Layer 2 oder 3.

## Datenformat (PDU)

- Die **Protocol Data Unit (PDU)** in diesem Layer heißt: **Segment** (bei TCP) bzw. **Datagramm** (bei UDP)

## Zusammenfassung

| Funktion                 | Erklärung                                                            |
| ------------------------ | -------------------------------------------------------------------- |
| Zuverlässige Übertragung | Daten werden überprüft und ggf. erneut gesendet                      |
| Zerlegung & Reihenfolge  | Große Daten werden in Segmente aufgeteilt und wieder zusammengesetzt |
| Verbindungsmanagement    | Verbindung aufbauen (TCP) oder ohne Verbindung senden (UDP)          |
| Protokolle               | TCP, UDP                                                             |
| Geräte                   | Programme auf Endgeräten (z. B. Browser, Mail-Client)                |
| Datenformat (PDU)        | Segment (TCP), Datagramm (UDP)                                       |
