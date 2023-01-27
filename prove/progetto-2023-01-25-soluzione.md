# Discussione orale del progetto _Animal House_ (25 gennaio 2023, Simone e Davide)

Il documento che segue riepiloga le domande effettuate alla discussione di **[questo progetto](http://site212231.tw.cs.unibo.it/)**.

## Introduzione

Viene chiesto il nome che si è dato il gruppo, il contributo individuale (in modo che a ciascuno venga chiesta solo la propria parte), le conoscenze di sviluppo _web_ pregresse all'esame e l'eventuale voto dello scritto.

## Strumenti utilizzati

Si chiede con quale linguaggio sia stata realizzata ogni parte del progetto, quali framework e librerie

## Esplorazione delle funzioni

Il prof naviga il progetto dalla loro macchina alternandosi fra le varie applicazioni e tentando di aggiungere nuovi dati.

Nel nostro caso ha trovato un bug e una richiesta non andava a buon fine, ci ha dato 10 minuti per risolvere il problema, dopo 10-15 minuti siamo rientrati con il problema risolto e i file nuovi caricati sulle macchine di laboratorio e siamo andati avanti.

## Analisi del codice

Per ogni membro del gruppo, apre una linea o un blocco di codice fra le funzioni
sul quale quel membro ha lavorato e chiede di spiegarle.

Per esempio:

```javascript
// Vitali: "Cos'è const, (), async, e =>"
const f = () => {...}
```

```javascript
// Vitali: "Cos'è questa sintassi? (svelte)"
$: psV = ps.filter((p) => {...})
```

```javascript
// Vitali: "Mi dica cosa sono i due await."
let a = await (await fetch("...")).json()
```

```javascript
// Vitali: "Mi dica cosa restituisce React.useState()."
const [loading, setLoading] = React.useState(true)
```

## Conclusione

Vitali annuncia il voto per la parte di progetto. Per gli studenti che avevano già sostenuto lo scritto, fa la media ponderata al volo secondo le regole delle diapositive e propone la verbalizzazione.

## API usate per il progetto

### Quiz
- https://opentdb.com/api.php?amount=${n}&category=27&type=multiple

### Trivia
- https://some-random-api.ml/
- https://meowfacts.herokuapp.com
- https://dogapi.dog/

### Immagini
- https://cataas.com/
- https://random-d.uk/
- https://shibe.online/
- https://randomfox.ca/
- https://placebear.com/
- https://api.bunnies.io/
- https://some-random-api.ml/

### Video
- API di youtube, abbiamo usato `npm-fetch` per il fetch dei video dal backend
