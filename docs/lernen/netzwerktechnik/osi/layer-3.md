---
title: Network Layer
---

# Network Layer (Vermittlungsschicht)

## Übersicht

Der Network Layer ist dafür zuständig, dass Daten zwischen verschiedenen Netzwerken übertragen werden. Hier werden die Daten in **Pakete** verpackt und mit einer **Quell-IP-Adresse** und einer **Ziel-IP-Adresse** versehen. Außerdem wird hier entschieden, **welchen Weg (Route)** die Daten nehmen sollen – das nennt man **Routing**.

Ohne diesen Layer könnten Daten nur im lokalen Netzwerk (LAN) übertragen werden. Durch den Network Layer können Daten ins Internet oder in andere Netzwerke gesendet werden.

## Protokolle

- **IP (Internet Protocol)**: Sorgt dafür, dass jedes Gerät im Netzwerk eine eigene Adresse bekommt. Es gibt IPv4 (z. B. `192.168.0.1`) und IPv6 (z. B. `2001:0db8::1`).
- **ICMP (Internet Control Message Protocol)**: Wird z. B. vom `ping`-Befehl verwendet. Damit kann man prüfen, ob ein anderes Gerät erreichbar ist.
- **IGMP (Internet Group Management Protocol)**: Wird für Gruppenkommunikation verwendet, z. B. bei Live-Streams oder Online-TV.

## Geräte

- **Router**: Verbindet mehrere Netzwerke miteinander (z. B. dein Heimnetzwerk mit dem Internet). Router verwenden **Routing-Tabellen** und entscheiden, auf welchem Weg Daten weitergeleitet werden.

  - **Statisches Routing**: Der Weg wird manuell eingestellt.
  - **Dynamisches Routing**: Der Router lernt den besten Weg automatisch – z. B. mit:
    - **RIP (Routing Information Protocol)**: Einfaches, älteres Protokoll.
    - **OSPF (Open Shortest Path First)**: Findet automatisch den schnellsten Weg.

- **Layer-3-Switch (L3-Switch)**: Ein Switch, der auch Routing-Funktionen hat. Er kann mit IP-Adressen umgehen und VLANs verwalten.

## Datenformat (PDU – Protocol Data Unit)

- Auf Layer 3 heißt die PDU: **Packet** (Paket)

## Zusammenfassung

| Funktion          | Erklärung                                  |
| ----------------- | ------------------------------------------ |
| Paketvermittlung  | Daten in Pakete verpacken und weiterleiten |
| IP-Adressen       | Quell- und Zieladresse zuordnen            |
| Routing           | Weg durchs Netzwerk bestimmen              |
| Geräte            | Router, L3-Switch                          |
| Protokolle        | IP, ICMP, IGMP                             |
| Datenformat (PDU) | Packet                                     |
