# Discussione orale del progetto _Animal House_ (26 gennaio 2023)

Il documento che segue riepiloga le domande effettuate alla discussione di
**[questo progetto](https://github.com/lucat1/unibo_88566_progetto)**.

Lo studente contatta prof e tutor in precedenza per posta elettronica e può
scegliere se svolgerlo in presenza o a distanza. Nel nostro caso, abbiamo
discusso contemporaneamente con Rubano e Vitali, ma può anche capitare di
discutere con Rubano e vedere Vitali solo la setimana dopo. L'orale si divide in
più parti e dura complessivamente meno di un'ora.

## Introduzione

Viene chiesto il nome che si è dato il gruppo, il contributo individuale (in
modo che a ciascuno venga chiesta solo la propria parte), le conoscenze di
sviluppo _web_ pregresse all'esame e l'eventuale voto dello scritto.

## Strumenti utilizzati

Si chiede con quale linguaggio sia stata realizzata ogni parte del progetto e se
alcuni _framework_ siano piaciuti più di altri.

## Esplorazione delle funzioni

Il prof (ed eventualmente il tutor per il controllo sull'accessibilità) navigano
il progetto dalla loro macchina alternandosi fra le varie applicazioni e
tentando di aggiungere nuovi dati.

## Analisi del codice

Per ogni membro del gruppo, apre una linea o un blocco di codice fra le funzioni
sul quale quel membro ha lavorato e chiede di spiegarle.

Per esempio:

```typescript
// Vitali: "Mi dica tutto ciò che sa su questa riga."
const product = await Product.findOne({ _id: id }).populate(POPULATE).exec();
```

```javascript
// Vitali: "Mi dica tutto ciò che sa su questa riga."
let user = await me();
```

```javascript
// Vitali: "Mi dica tutto ciò che sa su questo blocco."
try {
  await fetch(`store/orders/${id}`, withOptions("DELETE"));
  navigate("/orders");
} catch (err) {
  setError("Error while deleting: " + (err.message || "Unknown error"));
}
```

## Conclusione

Vitali annuncia il voto per la parte di progetto. Per gli studenti che avevano
già sostenuto lo scritto, fa la media ponderata al volo secondo le regole delle
diapositive e propone la verbalizzazione.
