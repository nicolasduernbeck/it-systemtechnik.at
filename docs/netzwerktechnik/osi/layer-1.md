---
title: Physical Layer
---

# Physical Layer (Bitübertragungsschicht)

## Übersicht

Der Physical Layer ist die unterste Schicht im OSI-Modell. Hier werden die Daten als elektrische Signale, Lichtimpulse oder Funkwellen physikalisch über ein Medium übertragen – also **Bit für Bit**. Diese Schicht ist zuständig für die Verbindung der Geräte und legt fest, wie ein Bit tatsächlich „aussieht“ (z. B. als Spannung oder Lichtsignal).

## Geräte

- **Netzwerkkabel (z. B. Twisted Pair, Glasfaser)**: Leiten elektrische oder optische Signale zwischen den Geräten.
- **Repeater**: Verstärken schwache Signale, um größere Entfernungen zu überbrücken.
- **Hub**: Einfacher Verteiler, der ein eingehendes Signal an alle anderen Ports weitergibt.
- **Bridge**: Kann – je nach Implementierung – teilweise auch auf physikalischer Ebene arbeiten, z. B. zur Trennung von Kollisionsdomänen.

## Begriffe

- **Bitübertragung**: Daten werden seriell als einzelne 0 und 1 übertragen.
- **Signaltypen**: Elektrische Spannung (Kupferkabel), Lichtimpulse (Glasfaser), Funkwellen (WLAN).
- **Stecker und Buchsen**: Physikalische Schnittstellen wie RJ45 oder LC-Stecker.
- **Topologien**: Physikalische Netzstrukturen wie Bus, Ring, Stern oder Mesh.
- **Codierung**: Verfahren zur Umwandlung von digitalen Daten in Signale, z. B. Manchester-Codierung.

## Datenformat (PDU – Protocol Data Unit)

- Auf Layer 1 heißt die PDU: **Bit**
