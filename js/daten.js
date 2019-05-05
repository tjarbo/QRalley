const titel = [
    "Willkommen",
    "Station 1",
    "Station 2",
    "Station 3",
    "Station 4",
    "Station 5",
    "Station 6",
    "Station 7",
    "Station 8",
    "Station 9"
]

const beschreibungen = [
    `Sehr gut! Wie ich sehe habt ihr den QR-Code gefunden 🎉. Als nächtes müsst ihr
    das Rätsel lösen 🔍 - denkt ihr ihr schafft das ? Wenn nicht, dann kommt nach einer
    gewissen Zeit euch der Hinweisbutton zu Hilfe 😉`,
    `Perfekt, hier wartet das nächste Rätsel auf euch 🗺 - doch seid gefasst .. Kann die
    Lösung wirklich so einfach sein? 🤔`,
    `Jetzt ist etwas Kopfrechnen angesagt 🧮! Aber ihr werdet es schaffen ✔`,
    `Das war aber jetzt ein langer Weg bis zur nächsten Station 🏃‍♀️🏃‍♂️! Aber wie ich sehe
    habt ihr euch nicht verlaufen 🦁! Jetzt seid ihr alle gefragt 🎡!`,
    `Uh, das ist der tiefste Jungel hier 🌳🐒🌳 Aber seht ihr das Haus dort hinten zwischen
    den Bäumen? Geht man näher heran und versucht das Rätzel zu lösen 🧮🤔`,
    `Bald habt ihr die Schnitzeljagd gelöst 🎉! Doch nun wartet noch das letzte Rätzel auf euch 🐠!
    Kriegt ihr das genauso gut gelöst wie die anderen 🤔? Seid nur bloß nicht zu leichtfertig 😉.
    Die Navigation zur nächsten Station leitet euch zurück zum Anfang 🗺🏃‍♂️🏃‍♀️`

]
const aufgaben = [
    {
        t:"Welcher Tag ist heute?",
        l:"Samstag",
        h:"Nicht Mo, Di, Mi, Do, Fr & So",
        k: "T"
    },
    {
        t:"Welche Farbe hat der Turm in der Nähe?",
        l:"Grün",
        h:"Such nach einem Holzpfahl",
        k: "J"
    },
    {
        t:"Wenn morgen gestern heute war, welcher Tag ist dann in 27 Tagen?",
        l:"Freitag",
        h:"Schaut im Kalender ;)",
        k: "A"
    },
    {
        t:"Wie viele Gullideckel findet ihr auf der Straße?",
        l:"14",
        h:"Schaut auch unter die Autos",
        k: "R"
    },
    {
        t:"Wie viele Fenster zählt ihr vor euch ?",
        l:"25",
        h:"Es zählt jedes Glas einzeln",
        k:"B"
    },
    {
        t:"Wie viele graue Laternen zählt Ihr?",
        l:"8",
        h:"(4*5 + 720/180) / 3",
        k:"O"
    }
]

const stationen = [
    {
        titel: titel[0],
        beschreibung: beschreibungen[0],
        aufgabe: aufgaben[0],
        gps: "https://goo.gl/maps/"
    },
    {
        titel: titel[1],
        beschreibung: beschreibungen[1],
        aufgabe: aufgaben[1],
        gps: "https://goo.gl/maps/"
    },
    {
        titel: titel[2],
        beschreibung: beschreibungen[2],
        aufgabe: aufgaben[2],
        gps: "https://goo.gl/maps/"
    },
    {
        titel: titel[3],
        beschreibung: beschreibungen[3],
        aufgabe: aufgaben[3],
        gps: "https://goo.gl/maps/"
    },
    {
        titel: titel[4],
        beschreibung: beschreibungen[4],
        aufgabe: aufgaben[4],
        gps: "https://goo.gl/maps/"
    },
    {
        titel: titel[5],
        beschreibung: beschreibungen[5],
        aufgabe: aufgaben[5],
        gps: "https://goo.gl/maps/"
    }
]