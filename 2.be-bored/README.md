# Bored 
- erstelle eine  Express App, die mittels axios  Daten der bored Api lädt: https://www.boredapi.com/
	- API Beispeil: https://www.boredapi.com/api/activity?participants=5 
- Wenn die Hauptseite geladen wird (also "/"), soll folgendes als html ausgegeben werden (du brauchst body und ähnliches nicht)
```html
<h1>Was tun heute?</h1>
<p> Wie wäre es mit folgendem: [Aktivität von API] </p>
```
- die Anzahl der Teilnehmer (participants) kannst du frei in deinem Code setzen

# Tipp
Beispiel-Code-Ausschnitt als Hilfe

```javascript
...
app.get("/", async (req, res) => { 

	// hier axios benutzen
	try {
		const response = await ...
		
		// Antwort von API an Client zurückschicken
		res.send(response.data);	

	} catch(...) {
		....
	}

	...
});
...
```

## Bonus
- Sofern die bored-API einen error ausgibt , soll dieser in der console.log ausgegeben und auch dem Nutzer gezeigt werden 
	- => der Fehler muss also als Antwort  gesendet werden: `response.send()`
	- probiere dein Error Handling aus, indem du 51 Als Teilnehmeranzahl angibst (` https://www.boredapi.com/api/activity?participants=51 `
	- und indem du die URL der API veränderst, z.B. `https://www.boxxredapi.com/...`
