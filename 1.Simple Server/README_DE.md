# Ein fast einfacher Server in Express.js

Mit diesem Projekt kannst Du üben, einen Server einzurichten, der einfache Anfragen in Express.js bearbeitet

## Was Du tun wirst

Du wirst einen Server mit vier **Endpunkten** einrichten und dabei das Express.js-Framework verwenden.

Die Endpunkte werden nur auf **GET**-Anfragen antworten und einen **String** als Antwort senden.

**Aufgaben

### Aufgabe 1 - Vorbereitung

1. Installiere das express.js npm-Paket `npm i express`.
2. Erstelle eine Datei für Deinen Server (`server.js`)

### Aufgabe 2 - Einrichten Deines Servers

Verwende das Snippet **Startercode** aus der Datei [SNIPPETS](/SNIPPETS.md), um Deine Datei `server.js` zu initialisieren

### Aufgabe 3 - Füge eine GET-Anfrage zu '/hello' hinzu

1. Erstelle mit dem Snippet **GET request** einen Endpunkt, der auf den Pfad `/hello` antwortet.
2. Diese Middleware sollte eine **Antwort** mit einer Grußbotschaft Deiner Wahl senden.

### Aufgabe 4 - Füge eine GET-Anfrage zu '/time' hinzu

1. Erstelle mit Hilfe des Snippets **GET request** einen Endpunkt, der auf den Pfad `/time` antwortet.
2. Diese Middleware sollte eine `Antwort` mit der aktuellen Uhrzeit und dem Datum im [ISO-Format](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString) zurückgeben (`2011-10-05T14:48:00.000Z`)

> Recherche:
>
> [Date Object [en]](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
>
> [Datumsobjekt [de]](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Date)

### Aufgabe 5 - Füge eine GET-Anfrage zu '/random' hinzu

1. Erstelle mit dem Snippet **GET request** einen Endpunkt, der auf den Pfad `/random` antwortet
2. Diese Middleware sollte eine **Antwort** mit der Zufallszahl senden

> Recherche:
>
> [Math.random() [de]](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)
>
> [Math.random() [de]](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Math/random)

### Aufgabe 6 - Füge eine GET-Anfrage zu '/isNumber' hinzu

1. Schreibe mithilfe des Snippets **GET request** eine Middleware, die auf den Pfad `/isNumber` antwortet.
2. Benutze entweder **Request-Parameter** oder **Query-Parameter**, um einen Parameter auszulesen, der als Teil der URL gesendet werden kann. Dieser Parameter wird einen Wert enthalten.

   > Tipp: Request-Parameter können mit dem Objekt `request.params` gelesen werden.
   >
   > Tipp: Query-Parameter können mit dem Objekt `request.query` gelesen werden.

3. Überprüfe, ob der Wert des Parameters in eine Zahl umgewandelt werden kann.
   
   > Tipp: Du kannst entweder die Math-Funktion `Number()` oder die Funktion `isNaN()` verwenden, um festzustellen, ob der Wert in eine Zahl umgewandelt werden kann oder nicht.

4. Wenn er in eine Zahl umgewandelt werden kann, dann sende eine **Antwort** mit der Nachricht:
   - **"Dies ist eine Zahl "**

5. Wenn sie nicht in eine Zahl umgewandelt werden kann, dann sende eine **Antwort** mit der Nachricht:
   - **"Dies ist keine Zahl "**
   
> Recherche:
>
> [Zahl() [englisch]](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
>
> [Zahl() [deutsch]](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Number)
>
> [isNaN() [englisch]](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN)
>
> [isNaN() [deutsch]](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/isNaN)
