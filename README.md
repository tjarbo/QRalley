# QRalley - Eine Ralley auf technisch verspielter Weise 🎡
**Die README.MD ist noch in Bearbeitung! ⚠🚧🏗**

QRalley ist eine Schnitzeljagd für kleinere private Outdoor-Runden für das Handy 📱, bei der QR-Codes zum Einsatz kommen (Also jetzt kein [Munzee](https://de.wikipedia.org/wiki/Munzee) 😬)

**Aufgabe**:
Gesucht werden QR-Codes, welche gescannt werden müssen. Dabei bekommen die Spieler jeweils nur eine ungefähre Ortsangabe übermittelt. Nach dem Scan gilt es ein hinterlegtes Rätsel zu lösen. Bei Erfolg können die Spieler die Ortsangaben der nächsten Station aufrufen. Optional kann ein Lösungsbuchstabe oder ähnliches gesammelt werden, wodurch ein separtes Rätsel abschließend gelöst werden kann 🏁✔


**Folgendes wird benötigt:** 
* Zum Betreiben
    - Webserver mit FTP-Zugang (Ein SSL-Zertifikat 🏆 ist nicht notwenig)
    - Einen TextEditor zum Beatbeiten der Stationen
    - einen Drucker für die QR-Codes

* Zum Spielen
    - Ein Smartphone mit QR-Scanner App/Funktion 📷
    - Eine mobile Datenverbindung ℹ


## Lizenz ⚖
Das Programm ist unter der MIT-Lizenz veröffentlicht. Mehr dazu unter [LICENSE](https://github.com/tjarbo/qralley/LICENSE) 🔗!


## Vorbereitung & Einrichtung 🍜
Zum Einrichten der Schnitzeljagd benötigst du nur:
* einen Webserver 🌎
* einen Texteditor 📝
* und einen Drucker 🖨 (für die QR-Codes später)

 Mehr Details findest du unten in den jeweiligen Abschnitten 🔍 


### 1. Schritt - Rätsel und Stationen ausdenken 🔏♟
Zuerst solltest du dir natürlich eine Route oder ähnliches ausdenken 💭 (**Tipp:** Mithilfe von einem Online Kartenprogramm wie [OpenStreetMap](https://www.openstreetmap.de/karte.html) oder [Google Maps](https://www.google.com/maps) kannst du dir erstmal gut einen Überblick verschaffen) Dabei solltest du dir neben der Route auch schon entsprechende Fragen, Hinweise und Lösungen überlegen.

**Jede Station besteht aus:**
- einem Titel (z.B. *Station 1*)
- einer Beschreibung (z.B. *Super! Ihr habt den QR-Code gefunden! Nun wartet nur noch das schwere Rät...*)
- einer Rätselfrage (z.B. *Was ist klein, grün und dreieckig ?*)
- einem Hinweis (z.B. *ROT13: rva xyrvarf teüarf Qervrpx*)
- einer Lösung (z.B. *ein kleines grünes Dreieck*)
- einem zusammelden Lösungsbuchstaben (z.B. *T* ) (**optional**)
- einem GoogleMaps-Link o.ä., welcher den Standort der jeweiligen Station angibt (z.B. *https://goo.gl/maps/...*)

Beim Bestimmen der Anzahl der Stationen solltest du die Verteilung des Lösungswortes auf die ganzen Stationen im Hinterkopf behalten. Als Bespiel ```BAUMHAUS => BA | UM | HA | US (4 Stationen)```. Aber das ist natürlich optional! 


### 2. Schritt: Repostitory herrunterladen und Stationen bearbeiten ☂
Die QRalley kannst du dir ganz einfach auf [GitHub herrunterladen](https://github.com/tjarbo/qralley/archive/master.zip). Entpacke das Archive auf deinem System und öffne es mit einem Editor deines Vertrauens ♥ (**Tipp:** Solltest du keinen haben, kann ich die [Visual Studio Code](https://code.visualstudio.com/) empfehlen)

#### Stationen bearbeiten
Alle Informationen werden unter ```/js/daten.js``` in 3 Arrays gespeichert und anschließend unter ```const stationen = ... ``` zusammen geführt.


#### Station 0️⃣
Um den Spielern möglichst einfach die Funktionsweise zu Erklären gibt es eine *Station 0*. Diese Station stellt mit einfachen Information und einem einfachen Rätsel den Beginn der Ralley da und spigelt auch den Endpunkt der Ralley wieder. Nach Abschluss der letzten Station wird die Route zu *Station 0* weitergegeben.


Ganz oben werden die Titel (```const titel = ...```) und Beschreibungen (```const beschreibungen = ... ```) der jeweiligen Stationen festgelegt. Bespiele sind schon eingerichtet und könne einfach angepasst oder erweitert werden.

Die Rätselaufgaben sind etwas anders auf gebaut. So besteht ein Rätsel aus folgendem Block:
```
{
    r:"Wie viele graue Laternen zählt Ihr?",
    l:"8",
    h:"(4*5 + 720/180) / 3",
    k:"O"
}
```

**Legende**
* *r* - Rätselaufgabe
* *l* - Lösung
* *h* - Einen Hinweis
* *k* - Teil des Lösungswortes (**optional** - dann einfach leer lassen: ```k: ""```) 

Auch hier kannst du dich einfach am Beispiel orientieren und neue Aufgaben hinzufügen.

Abschließend wird unter ```const stationen = ... ``` alles zusammen geführt. 

```
// Bespiel für die (Station 0, Station 1,...) ZWEITE Station
{
    titel: titel[2],
    beschreibung: beschreibungen[2],
    aufgabe: aufgaben[2],
    gps: "https://goo.gl/maps/"
}
```

Ersetze die URL unter ```gps:``` mit einem Link eines Online-Kartenabieters 🗺, welcher zu der geographischen Position der Station leitet. Mit einem klick öffnen die Spieler so die Route zur nächten Station 🌴 

### 3. Schritt: Hochladen auf einen Webserver 🛫
Nachdem nun die Staionen


---
## Fragen oder Ideen 💭
Du hast eine Frage oder eine Idee für eine Weiterentwicklung? Dann erstelle einfach ein neues Issue und wähle eine entsprechende Vorlage aus ☑! Ich werde versuchen bald zu Antworten 🗣

Oder du möchtest selber an dem Code weiterschreiben 👽? Dann erstelle auch hierführ erst ein entsprechendes Issue und dann kann es losgehen mit dem coden und der PR 💪!


## Verwendete Frameworks 🛠
* [W3.css](https://getbootstrap.com)
* [jQuery](https://firebase.google.com)


## Autoren / Authors 🤓
* **Tjark -  \<[tjarbo](http://www.github/tjarbo)\>**