var stationsnummer;
var daten;
var anzahlVersuche = 0;

// Generiere zufällige IDs der Stationen für die QR-Codes/*  */
function ids() {

    // Überprüfe, dass es sich um Starteinstellungen handelt
    if (ladeStationsnummer()) { return; }

    var ids = []
    for (let index = 0; index < stationen.length; index++) {
        var genID;
        while (genID % stationen.length != index || genID <= stationen.length) {
            genID = ((ids[index - 1] || 0) + Math.floor(Math.random() * 100))
        }
        ids.push(genID)
    }

    console.log('%c Kopiere die folgenden Zeilen: ', 'background: #222; color: yellow');
    var anzeige = "";
    ids.forEach(id => {
        anzeige += window.location + '?id=' + id + '\n'
    });
    console.log(anzeige)
}

function checkFailed() {
    // https://schnitzjagd.de?id=1232 => 1232 <= Anzahl der Stationen ?
    return window.location.search.substr(1).split("=") <= stationen.length
}

function ladeStationsnummer() {
    // https://schnitzjagd.de?id=1232 => 1232
    var urlsplit = window.location.search.substr(1).split("=")

    // Kleine Sicherung, dass die Staionsnummerierung nicht so auffällt 👶
    // Stationsnummer := IDvonOben mod Anzahl der Station => DER REST
    return (parseInt(urlsplit[urlsplit.length - 1], 10) % stationen.length)
}

function ladeStation(nr) {
    daten = {}
    daten = stationen[nr]

    // Texte anpassen 🎨 
    $("#app_titel").text(daten.titel)
    $("#app_beschreibung").text(daten.beschreibung)


    $("#app_aufgabe").text(daten.aufgabe.r)
    $("#app_modal_schlüssel").text(daten.aufgabe.k)

    // Link zur nächsten Station laden und einrichten 🗺
    // Sollte die letzte Station erreicht worden sein wird zur Station 0 geführt
    var nächsteGPSnummer = nr + 1 == stationen.length ? 0 : nr + 1
    $("#app_modal_weiter").attr("href", stationen[nächsteGPSnummer].gps)

}

function hinweisEinrichten(hinweis) {
    // Verstecke den Hinweis-Konpf 💢
    $("#app_button_hinweis").addClass("w3-hide")


    // Richte den Hinweis-Knopf ein 🚸
    $("#app_button_hinweis").off()
    $("#app_button_hinweis").on("click", function () {
        alert(hinweis)
    })

    // Zeige den Hinweis-Knopf nach einer Minute an ⏲
    setTimeout(function () {
        $("#app_button_hinweis").removeClass("w3-hide")
    }, 60000)
}

function lösungEingeben() {
    var eingabe = prompt("Wie lautet die Lösung?")

    // Addiere einen Versuch dazu 1️⃣
    anzahlVersuche++

    // Passe die Eingabe an um Fehler bei der Eingabe zu minimieren ✂
    eingabe.trim().toLowerCase()
    var l = daten.aufgabe.l.trim().toLowerCase()

    //Überprüfe die Eingabe 🔍
    if (eingabe == l) {
        // Eingabe der Lösung war richtig ✔
        $("#app_modal").show()
    } else {
        // Eingabe der Lösung war falsch ❌
        // alert("Leider falsch!") => Das war iwann zu nervig 😑
        blinkenLösungButton()

        // Zeige den Hinweis nach 3 Fehlversuchen an 👩‍🏫
        anzahlVersuche == 3 ? $("#app_button_hinweis").removeClass("w3-hide") : null
    }
}

function blinkenLösungButton() {
    const el = $("#app_button_lösung")

    // Abwechselnd Rot und Weiß blinken 🔆 
    el.removeClass("w3-blue")
    const intervalID = setInterval(function () { el.hasClass("w3-red") ? el.removeClass("w3-red") : el.addClass("w3-red") }, 200)

    // Nach ca 1,7 Sekunden den Lösungs-Knopf wieder zurücksetzen 🍭
    setTimeout(function () {
        clearInterval(intervalID)
        el.removeClass("w3-red")
        el.addClass("w3-blue")
    }, 1700)
}

function main() {
    // 1. Schritt - 'Entschlüssle' die Nummer der Station 🔐
    if (!ladeStationsnummer() || checkFailed()) { console.error("abbruch"); return; }
    stationsnummer = ladeStationsnummer()

    // 2. Schritt - Lade die Stationsinformationen 🧬
    ladeStation(stationsnummer)

    // 3. Schritt- Richte den Hinweis ein ❗
    hinweisEinrichten(daten.aufgabe.h)
}

//Los geht's 🎉
main()