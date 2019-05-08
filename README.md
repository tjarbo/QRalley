# QRalley - Eine Ralley auf technisch verspielter Weise 🎡

**Die README.MD ist noch in Bearbeitung! ⚠🚧🏗**

QRalley ist eine Schnitzeljagd für das Handy 📱, welche für kleine private Outdoor-Runden ausgelegt ist (Also jetzt kein [Munzee](https://de.wikipedia.org/wiki/Munzee) 😬). Dabei kommen QR-Codes zum Einsatz, welche von den Spielern gefunden werden müssen und anschließend das hinterlegte Rätsel gelöst werden muss. Dabei können optional Lösungsbuchstaben oder ähnliches gesammelt werden, wodurch ein separtes Rätsel abschließend gelöst werden kann 🏁✔

**Folgendes wird benötigt:** 
* Zum Betreiben
    - Webserver mit FTP-Zugang (Ein SSL-Zertifikat 🏆 wird nicht benötigt)
    - Einen TextEditor zum Beatbeiten der Stationen

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


### 1.Schritt - Rätsel und Stationen ausdenken 🔏♟

Zuerst solltest du dir natürlich eine Route oder ähnliches ausdenken 💭 (**Tipp:** Mithilfe von einem Online Kartenprogramm wie [OpenStreetMap](https://de.wikipedia.org/wiki/Munzee) oder [Google Maps](https://www.google.com/maps) kannst du dir erstmal gut einen Überblick verschaffen) Dabei solltest du dir neben der Route auch schon entsprechende Fragen, Hinweise und Lösungen überlegen.

**Jede Station besteht aus:**
- einem Titel (z.B. *Station 1*)
- einer Beschreibung (z.B. *Super! Ihr habt den QR-Code gefunden! Nun wartet nur noch das schwere Rät...*)
- einer Rätselfrage (z.B. *Was ist klein, grün und dreieckig ?*)
- einem Hinweis (z.B. *ROT13: rva xyrvarf teüarf Qervrpx*)
- einer Lösung (z.B. *ein kleines grünes Dreieck*)
- einem zusammelden Lösungsbuchstaben (z.B. *T* ) (**optional**)

Beim Bestimmen der Anzahl der Stationen solltest du die Verteilung des Lösungswortes auf die ganzen Stationen in Betracht ziehen. Als Bespiel ```BAUMHAUS => BA | UM | HA | US (4 Stationen)```. Aber das ist natürlich optional! 


### 2. Schritt: Repostitory herrunterladen und Stationen bearbeiten ☂

Die QRalley kannst du dir ganz einfach auf [GitHub herrunterladen](https://github.com/tjarbo/qralley/archive/master.zip). Entpacke das Archive auf deinem System und öffne es mit einem Editor deines Vertrauens ♥ (**Tipp:** Solltest du keinen haben, kann ich die [VSCode](https://code.visualstudio.com/) empfehlen)

#### Stationen bearbeiten
Alle Informationen werden in 3 Arrays gespeichert und anschließend unter ```const stationen = ... ``` zusammen geführt.

#### Station 0
Um den Spielern möglichst einfach die Funktionsweise zu Erklären gibt es eine *Station 0*. Diese Station stellt mit einfachen Information  



Ganz oben werden die Titel (```const titel = ...```) und Beschreibungne (```const beschreibungen = ... ```) der jeweiligen Stationen festgelegt. Bespiele sind schon eingerichtet und könne einfach angepasst oder erweitert werden.

Die Rätselaufgaben sind etwas anders auf gebaut. So besteht ein Rätzel aus einem der folgenden Blöcke:
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
* *h* - Den Hinweis
* *k* - Teil des Lösungswortes (**optional** - dann einfach leer lassen: ```k: ""```) 

Auch hier können Sie sich einfach ab Beispiel orientieren und neuen Aufgabe hinzufügen.

Abschließend werden unter ```const stationen = ... ``` alles zusammen geführt. 

### 


## Fragen oder Ideen 💭

Du hast eine Frage oder eine Idee für eine Weiterentwicklung? Dann erstelle einfach ein neues Issue und wähle eine entsprechende Vorlage aus ☑! Ich werde versuchen bald zu Antworten 🗣

Oder du möchtest selber an dem Code weiterschreiben 👽? Dann erstelle auch hierführ erst ein entsprechendes Issue und dann kann es losgehen mit dem coden und der PR 💪!


## Verwendete Frameworks 🛠

* [W3.css](https://getbootstrap.com)
* [jQuery](https://firebase.google.com)


## Autoren / Authors 🤓

* **Tjark -  \<[tjarbo](http://www.github/tjarbo)\>**

Werfe ebenfalls einen Blick auf die Liste der Mitwirkenden ([contributors](https://github.com/tjarbo/qrreally/CONTRIBUTORS.md)), welche ebenfalls mitgeholfen haben!
