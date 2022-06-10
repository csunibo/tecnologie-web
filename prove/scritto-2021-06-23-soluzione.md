\center

# Insegnamento di Tecnologie Web

# CdS In Informatica

# (A.A. 2020-21)

## Esame scritto di prova del 23/6/2021

_Questo scritto non genera voti, serve solo come esercitazione_

\flushleft

### Nome:

```

```

### Cognome:

```

```

### Matricola:

```

```

### Corso di Studi

_Ad esempio: Informatica, Informatica per il Management, etc._

```

```

### Anno di frequenza:

_Come specificato nel piano di studi: se quest'anno avete frequentato il II anno di corso ad Informatica o il III di Informatica per il Management, mettete "2020-21"", altrimenti "precedente"._

```

```

### Attenzione:

- _Rispondete solo negli spazi delimitati dai blocchi ` ``` qui la risposta ``` `, senza modificarli o eliminarli._
- _Rispondete in maniera chiara ed essenziale. Soprattutto nelle domande di teoria o discorsive, non girate intorno ai concetti e rispondete esattamente e in maniera specifica ad ogni parte della domanda._
- _You can use either English or Italian for your answers._
- _Per favore, per favore, per favore: nesun erore di ortografia. Cuesta è un universita e non la squola elementale._

\pagebreak

## Domanda #1 - Domande di base

### a) Che differenza c'è tra l'attributo id e l'attributo name in HTML?

```








```

### b) Quanti byte occupa la stringa di caratteri "città" quando viene codificata in, rispettivamente, ISO Latin-1, UCS-2 e UTF-8?

```








```

### c) Che differenza c'è tra tesauro e tassonomia?

```








```

\pagebreak

## Domanda #2 - HTML + CSS

Scrivere il codice HTML e CSS (bootstrap è ammesso solo se importato correttamente nella pagina) della seguente pagina web. Le immagini sono fornite in uno zip scaricabile da EOL. Il codice deve funzionare su Firefox. Può essere usato come base il documento base.html. Non è importante essere totalmente precisi con colori e misure, ma essere ragionevolmente attenti alle differenze tra elemento ed elemento. Se il file non si apre correttamente nel browser, il punteggio è 0.
![domanda HTML e CSS](images/base.png)

```








```

\pagebreak

## Domanda #3 - Javascript

Basandosi, dove si ritiene, su uno o più framework Javascript a piacere tra quelli illustrati a lezione, si descrivano:

#### Parte I

Un’API REST scritta in formato openAPI che descriva i seguenti servizi:

- _LoadEvents_: restituisca l’elenco degli eventi in programma in un locale.
- _SelectEvent_: che restituisca i dati del singolo evento registrati nel database: la data dell’evento, l'orario di inizio, il nome dei performer, l’immagine dei performer.

Per ogni servizio si specifichi l’URL di accesso, il metodo HTTP utilizzato, gli eventuali parametri e la sintassi usata, il formato delle strutture dati trasmesse e/o ricevute (fornendo un esempio), le tipologie di errore e il messaggio di errore ritornato in ciascun caso. Il formato dei dati è necessariamente JSON. In nessun caso si potranno passare frammenti, anche parziali, in HTML.

```




```

#### Parte II

Uno o più script Javascript che, subito prima di visualizzare la pagina all’utente, invochino il servizio LoadEvents e popolino correttamente e nel giusto ordine la lista degli eventi. Per ogni evento la lista contiene un’immagine, informazioni sul nome, luogo, data ed ora inizio evento. Si esplichi tutto il meccanismo di invocazione, di modifica della pagina quando vengono ricevuti i dati, e di gestione degli eventuali errori.

```




```

#### Parte III

Un metodo Javascript che viene invocato dopo il caricamento della lista degli eventi e aggiunge un menù a tendina (prima della lista) che permetta di visualizzare solo gli eventi terminati, in corso, futuri o di una singola città. Il menù mostra quattro opzioni: “terminati” “live” “futuri” “città”. Si descriva anche il codice necessario al funzionamento del menù. Modificare se necessario il frammento HTML corrispondente ad ogni evento.

```




```

\pagebreak

## Domanda #4 - Semantic Web

Scrivere in formato Turtle il grafo RDF della seguente frase, poi indicare quante triple contiene: «Gerhard van Wou, citato anche come Geert van Wou (Hintham, 1440 – Kampen, dicembre 1527), è stato un fonditore di campane olandese.»

```








```

\pagebreak

## Domanda #5 - Domanda di teoria

Quali sono i principali tipi di parametri previsti dalla specifica OpenAPI?

```








```

\pagebreak

## Domanda #6 - Domanda di accessibilità

Inserire il seguente frammento di codice in una pagina HTML che carichi sia il foglio di stile che le librerie
JavaScript necessarie per l'utilizzo del framework bootstrap.

```html
<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <button
      class="nav-link active"
      id="home-tab"
      data-bs-toggle="tab"
      data-bs-target="#home"
      type="button"
      role="tab"
      aria-controls="home"
      aria-selected="true"
    >
      Home
    </button>
  </li>
  <li class="nav-item" role="presentation">
    <button
      class="nav-link"
      id="profile-tab"
      data-bs-toggle="tab"
      data-bs-target="#profile"
      type="button"
      role="tab"
      aria-controls="profile"
      aria-selected="false"
    >
      Profile
    </button>
  </li>
  <li class="nav-item" role="presentation">
    <button
      class="nav-link"
      id="contact-tab"
      data-bs-toggle="tab"
      data-bs-target="#contact"
      type="button"
      role="tab"
      aria-controls="contact"
      aria-selected="false"
    >
      Contact
    </button>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
  <div
    class="tab-pane fade show active"
    id="home"
    role="tabpanel"
    aria-labelledby="home-tab"
  >
    <p>Some content here...</p>
  </div>

  <div
    class="tab-pane fade"
    id="profile"
    role="tabpanel"
    aria-labelledby="profile-tab"
  >
    <p>Some content here...</p>
  </div>

  <div
    class="tab-pane fade"
    id="contact"
    role="tabpanel"
    aria-labelledby="contact-tab"
  >
    <p>Some content here...</p>
  </div>
</div>
```

Individuare gli eventuali problemi di navigazione da tastiera, e scrivere il codice per risolverli.

```




```
