---
title: Presentation Layer
---

# Presentation Layer (Darstellungsschicht)

## Übersicht

Diese Schicht sorgt dafür, dass Daten zwischen Sender und Empfänger in einem verständlichen Format übertragen werden. Sie „übersetzt“ Daten in Formate, die das empfangende System verstehen kann. Außerdem kümmert sie sich um Komprimierung, Verschlüsselung und Zeichencodierung.

Beispiel: Ein Computer sendet ein Bild im JPEG-Format – die Präsentationsschicht sorgt dafür, dass dieses Bild korrekt interpretiert wird.

## Begriffe und Protokolle

- **Datenkonvertierung**: Wandelt Formate um (z. B. von UTF-8 in ASCII).
- **Verschlüsselung / Entschlüsselung**: Z. B. SSL/TLS für sichere Datenübertragung.
- **Komprimierung**: Daten werden verkleinert übertragen, z. B. bei ZIP-Dateien oder MP3.
- **Formate**: JPEG, MP3, GIF, MPEG, PDF – alles Formate, die in dieser Schicht interpretiert werden.

## Geräte

Auch diese Schicht ist softwarebasiert. Die Verarbeitung findet z. B. in folgenden Anwendungen statt:

- **Browser**
- **Media Player**
- **SSL/TLS-Module**
- **PDF-Reader**

## Datenformat (PDU)

- **PDU (Protocol Data Unit)**: _Data_
- Die Daten bleiben auf dieser Schicht „Daten“ – nur das Format ändert sich.

## Zusammenfassung

| Schicht | Name                             | Funktion                                     | PDU  | Beispielprotokolle / Formate | Geräte (Beispiel)            |
| ------: | -------------------------------- | -------------------------------------------- | ---- | ---------------------------- | ---------------------------- |
|       6 | Presentation Layer (Darstellung) | Daten umwandeln, verschlüsseln, komprimieren | Data | SSL/TLS, JPEG, MPEG, ASCII   | Browser, Player, Anwendungen |
