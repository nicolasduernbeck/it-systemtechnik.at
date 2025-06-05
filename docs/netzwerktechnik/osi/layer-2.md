---
title: Data Link Layer
---

# Data Link Layer (Sicherungsschicht)

## Übersicht

Diese Schicht sorgt dafür, dass Daten **innerhalb eines lokalen Netzwerks** zuverlässig von einem Gerät zum nächsten übertragen werden. Die Daten werden in sogenannte **Frames** verpackt. Zusätzlich werden **MAC-Adressen** verwendet, damit das richtige Zielgerät gefunden wird. Auch Fehlererkennung und einfache Steuerungsmechanismen passieren auf dieser Ebene.

## Geräte

- **Switch**: Erkennt anhand der MAC-Adresse, wohin ein Datenpaket geschickt werden soll. Spart Bandbreite, weil es nicht an alle sendet, wie ein Hub.
- **Access Point**: Ermöglicht den Zugang von WLAN-Geräten zu einem kabelgebundenen Netzwerk.
- **Bridge**: Verbindet zwei Netzwerke auf Layer 2 und filtert Datenverkehr basierend auf MAC-Adressen.
- **Netzwerkkarte (NIC)**: Jedes Gerät hat eine Netzwerkkarte mit einer eindeutigen MAC-Adresse. Diese arbeitet auf Layer 2, wenn Daten gesendet oder empfangen werden.

## Begriffe & Protokolle

- **MAC-Adresse (Media Access Control)**: Eine weltweit eindeutige Kennung für jedes netzwerkfähige Gerät. Sie besteht aus 48 Bit (6 Byte) – die ersten 3 Byte gehören dem Hersteller, die restlichen 3 sind die individuelle Gerätekennung.
- **LLC (Logical Link Control)**: Ein Teil der Schicht, der dafür sorgt, dass die Daten korrekt an die darüberliegende Schicht weitergeleitet werden.

- **CSMA/CD (Carrier Sense Multiple Access with Collision Detection)**: Kommt bei Kabelnetzwerken zum Einsatz. Geräte „hören“ zuerst ins Netzwerk, bevor sie senden, um Zusammenstöße (Kollisionen) zu vermeiden.

- **CSMA/CA (Carrier Sense Multiple Access with Collision Avoidance)**: Verwendet bei WLAN. Geräte versuchen, Kollisionen schon im Voraus zu vermeiden, z. B. durch eine kurze Ankündigung vor dem Senden.

## Datenformat (PDU – Protocol Data Unit)

- Auf Layer 2 heißt die PDU: **Frame**

---
