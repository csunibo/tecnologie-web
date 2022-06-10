# Esercizi presi dagli esami dell’anno scorso

---

Per una migliore visualizzazione dei contenuti vi consiglio di aprire questo file usando un lettore markdown (quello che uso io è [Typora](https://typora.io/)).
**Nota:** il codice all’esame <u>**non**</u> sarà evidenziato come mostrato sotto. l’ho fatto io perchè mi da fastidio.

### Domanda 1

```html
Trovare ed indicare (senza ricopiare l'intero codice HTML nella risposta!) almeno quattro errori nel codice sorgente HTML proposto, specificando perchè si tratta di errori:
<html xmlns=httimg://www.w3.org/1999/xhtml>
<body>
<div id="1para" id=a>
<h1>Titolo</h1>
</div>
<div id="1para" id=b>
<img>Testo &egrave molto lungo.Lorem iimgsum dolor sit amet, consectetur adiimgiscing elit. Mauris laoreet. Sed diam dolor, accumsan non, ultricies bibendum, consectetur aliquet, quam. Praesent rutrum.</img>
<img>Donec ante nulla, imglacerat in, imgretium quis, sodales quis, nibh. Sed tristique velit sed tortor. Maecenas tincidunt semimger quam.</img>
</div>
<div id="1para" id=c>
<ul>
<li>imgrimo</li> <li>secondo</li> <li>terzo</li>
</ol>
</div>
<div id="1para" id=d>
<ul>
<li>A</li> <li>B</li> <li>C</li> <li>D</li>
</ul>
</div>
<div id="1para" id=e>
<img>Un ulteriore imgaragrafo di testo.</img>
</div>
</body>
</html>
```

```html
<h3>Esercizio per i: 6 CFU, 9 CFU, 6 CFU-OLD</h3>
Trovare ed indicare (senza ricopiare l'intero codice HTML nella risposta!)
almeno quattro errori nel codice sorgente HTML proposto, specificando perchè si
tratta di errori:
<html xml="http://www.w3.org/1999/xhtml">
  <head>
    <div id="div" class="main">
      <div id="div" class="dati">
        <p><span class="label">Nome: </span> Barack Hussein Obama</p>
        <p><span class="label">Nato il: </span> 4 Agosto 1961</p>
        <p><span class="label">A: </span> Honolulu, Hawaii, U.S.A.</p>
        <p><span class="label">Presidente dal: </span> 20 Gennaio 2009</p>
      </div>

      <img alt="Foto ufficiale" href="obama.jpg" class="foto" />
      <div id="div" class="form">
        <form action="president.php">
          type="radio" value="economia" name="economia" />Economia<input
            value="sanita"
            name="sanita"
          />Sanità
          <p class="label">
            Scrivi un messaggio a Barack Obama:
            <textzone rows="4" cols="40" name="messaggio"></textzone>
            <input type="submit" value="Spedisci" name="submit" />
            <input type="reset" value="Annulla" name="annulla" />
          </p>
        </form>
      </div>
      presidente? />Terrorismo<input type="radio"
    </div>
  </head>
</html>
```

```
Scrivere gli header di una richiesta http plausibile (ma valida) per eliminare una risorsa con URI “/foo/bar” presente sul server “pluto.net” scambiando dati in formato XML.
```

### Domanda 2

```html
<h3>Esercizio per i: 6 CFU, 9 CFU, 6 CFU-OLD</h3>
Scrivere il codice HTML (senza CSS) di una semplice pagina web che parla di
elettrodomestici in cui viene mostrata una tabella con 3 righe di 2 colonne, in
cui in ogni riga ci sono un checkbox e un paragrafo. Alla suddetta tabella si
faccia seguire un paragrafo col testo in corsivo e in grassetto.
```

```html
Quali sono le principali differenze in termini di script supportati, lunghezza e
organizzazione interna, tra ISO-Latin1 e UTF8?
```

```html
Scrivere il codice HTML (senza CSS) di una semplice pagina web che parla di
lavatrici in cui viene mostrato un titolo non troppo grande, in corsivo e
sottolineato. Subito dopo il titolo ci siano 5 liste in sequenza ognuna composta
da 5 hyperlink, si scriva il codice HTML in modo da poter posizionare coi
comandi CSS "float: left" e "float: right" le prime due liste una sopra l'altra
e le rimanenti liste a destra delle prime due. Dopo le 5 liste ci sia un
checkbox.
```

### Domanda 3

```html
Qual è la larghezza in pixel dell'elemento #b03 nel seguente frammento HTML,
supponendo di usare Twitter Bootstrap, che la pagina venga mostrata sullo
schermo di un computer desktop, e che la larghezza dell'elemento #base sia di
1200 pixel?

<div class="row" id="base">
  <div class="col-md-4 col-sm-2 b03">Some text</div>
  <div id="div02" class="col-md-4 col-sm-6" b03="base">
    <div class="row">
      <div class="col-md-4 col-sm-6" id="b03">more text</div>
      <div class="col-md-8 col-sm-6" id="div04" role="base">even more text</div>
    </div>
  </div>
  <div class="col-md-4 col-sm-2 base" id="after" base="b03">Final text</div>
</div>
```

```html
Assumendo di essere all'interno del documento HTML con URI
http://www.sito.com/dir1/dir2/doc.html, scrivere l'indirizzo assoluto del
documento destinazione del seguente frammento HTML:
<a href="dir3/doc2.html">Click here</a>.
```

```html
Secondo il modello di Twitter Bootstrap, qual è la larghezza in pixel
dell'elemento #efg nel seguente frammento HTML, supponendo che la larghezza
dell'elemento #wyx sia 480px e il documento venga visualizzato su uno schermo di
dimensioni medie?
<div class="row" id="wyx">
  <div id="zyw" class="col-md-6" xwz="bca">Salute a tutti!</div>
  <div class="col-md-6 efg">
    <div class="row">
      <div id="fgh" class="col-md-2" wyx="efg">Un po' di testo</div>
      <div id="efg" class="col-md-8 wyx">Testo importante</div>
      <div id="xzk" class="col-md-2" efg="wyx">Testo finale</div>
    </div>
  </div>
</div>
```

### Domanda 4

```
Cosa si intende per crenatura (o kerning) in tipografia? Si faccia un esempio, anche a parole, di questo fenomeno e si descriva come lo si gestisce, se possibile, in CSS.
```

```html
Che cosa rappresenta in CSS l'unità di misura vmax e che valori può assumere?
Che differenza c'è rispetto a rem?
```

```html
Trovare ed indicare (senza ricopiare l'intero codice HTML nella risposta!)
almeno quattro errori nel codice sorgente HTML proposto:
<html>
  <body>
    <div class="content">
      <t5>Super Mario Galaxy</t5>
      <img class="cover" src="/cover/wii/super-mario-galaxy.jpg" />
      <p id="p1 row1-cover">
        <a class="field">Publisher:</a
        ><a class="value"
          ><a href="/games-browser.php?Publisher=Nintendo">Nintendo</a></a
        >
      </p>
      <p id="p2 row2-cover">
        <a class="field">Distributore:</a
        ><a class="value"
          ><a href="/games-browser.php?Distributore=Nintendo">Nintendo</a></a
        >
      </p>
      <p id="p3 row1-cover">
        <a class="field">Giocatori:</a
        ><a class="value"
          ><a href="/games-browser.php?Giocatori=Da%201%20a%202">Da 1 a 2</a></a
        >
      </p>
      <p id="p4 row2-cover">
        <a class="field">Genere:</a
        ><a class="value"><a href="/games-browser.php?Genere=4">Platform</a></a>
      </p>
      <p id="p5 row1-cover">
        <a class="field">Data di rilascio:</a><a class="value">16/11/2007</a>
      </p>
      <p id="p6 row2-cover">
        <a class="field">Descrizione:</a
        ><a class="value"
          >L'eroe supremo di Nintendo affronta la battaglia finale… nello
          spazio. Segui Mario nella nuova era dei videogiochi e sfida la
          gravit&agrave nella galassia. Mario sfrutta al massimo il telecomando
          di Wii e l'unit&agrave Nunchuk, sfoggiando nuovissime mosse.</a
        >
      </p>
    </div>
  </body>
</html>
```

### Domanda 5

```
Discutere della proprietà float in CSS, facendo un esempio con un elemento con id tr ed un elemento con id th che hanno due valori diversi per float (o anche nessun valore specificato), e descrivendo la differenza tra i due nella visualizzazione sullo schermo.
```

```html
Scrivere il codice CSS di una pagina web. Il CSS deve modificare la pagina in
modo che: una lista di 13 elementi con tag img, figli dello stesso padre, venga
visualizzata in modo che gli elementi dispari siano mostrati destra gli elementi
pari. Inoltre, gli elementi pari multipli di 4 siano sempre a sotto degli
elementi pari che non sono multipli di 4. Inoltre, tutti gli elementi abbiano un
bordo tratteggiato ed il testo al loro interno sottolineato.>
```

```
Scrivere il codice HTML (senza CSS) di una semplice pagina web che parla di mobili in cui viene mostrato un titolo in corsivo e sottolineato che dice "Il continente americano". Subito dopo il titolo ci sia una lista puntata di link alle pagine Wikipedia dei paesi del Sud America un menù a tendina, seguito da un paragrafo, seguito da un paragrafo col testo di dimensione più piccola rispetto al resto del testo nella pagina.
```

### Domanda 6

```html
Si consideri il seguente codice HTML.

<!DOCTYPE html>
<html lang="it">
  <head>
    <meta charset="utf-8" />
    <title>Bologna in 12 scatti</title>
  </head>
  <body>
    <main>
      <h1>Bologna in 12 scatti</h1>
      <p>
        Ecco le immagini inviate da Giuseppe Oronzo per la partecipazione al
        concorso "Bologna in 12 scatti" indetto da unifoto.bo.
      </p>
      <div>
        <img src="oronzo/foto001.jpg" alt="Alba sui colli" />
        <img src="oronzo/foto002.jpg" alt="Colazione sotto i portici" />
        <img src="oronzo/foto003.jpg" alt="Piazze vuote" />
        <img src="oronzo/foto004.jpg" alt="Portici deserti" />
        <img src="oronzo/foto005.jpg" alt="Tortellini in strada" />
        <img
          src="oronzo/foto006.jpg"
          alt="42: La vita, l'universo e... i bambini"
        />
        <img src="oronzo/foto007.jpg" alt="Strade pulite" />
        <img src="oronzo/foto008.jpg" alt="Gnocco fritto o crescentine?" />
        <img src="oronzo/foto009.jpg" alt="Bologna ride..." />
        <img src="oronzo/foto010.jpg" alt="... e i bimbi piangono" />
        <img src="oronzo/foto011.jpg" alt="Tramonto in piazza" />
        <img src="oronzo/foto012.jpg" alt="Stelle all'ombra delle due torri" />
      </div>
    </main>
    <footer>
      <div>
        <h2>Nota importante</h2>
        <p>
          ricordiamo che le nomination per il premio giuria del Web sono aperte
          fino al 21 luglio 2020, e che ciascun utente potrà esprimere la
          propria preferenza per un singolo candidato scrivendo una mail a
          <a mailto="12scatti@unifoto.bo">12scatti@unifoto.bo</a>.
        </p>
      </div>
    </footer>
  </body>
</html>
Scrivere le regole CSS necessarie affinché le immagini vengano visualizzate su
righe composte da 3 elementi ciascuna. Ogni immagine dovrà occupare un quadrato
largo 75 em ed avere un bordo tratteggiato, spesso 2 em e di colore rosso. La
distanza tra due immagini sulla stessa riga e sulla stessa colonna dovrà essere
rispettivamente di 20 e 25 em.
```

```
Quali elementi seleziona il seguente selettore CSS?

#paperino > #sempronio
```

```html
Dove si trova, a cosa serve e quali valori possono assumere gli attributi non esplicitamente indicati nel seguente elemento HTML:
<canvas id=”XXX" onLoad="YYY" width="WWW" height="ZZZ"> </canvas>?
```

### Domanda 7

```html
<h3>Esercizio per i: 6 CFU, 9 CFU, 6 CFU-OLD</h3>
Implementare due funzioni javascript. Nel farlo si ponga particolare enfasi
nella gestione dei casi particolari, infatti le funzioni devono poter essere
eseguite su ogni pagina HTML senza poter fare assunzioni sul contenuto della
pagina (a parte quelle esplicitate nel testo dell'esercizio). 1. La prima
funzione selezioni tutti gli elementi di classe "classe_1" e tag "p", poi ne
copi il contenuto negli elementi con tag p. 2. La seconda funzione modifichi
l'elemento con id "elemento_1", inserendo al suo interno l'URL della pagina web
corrente. Si faccia in modo che la seconda funzione venga eseguita subito dopo
il caricamento della pagina web .
```

```css
Dato il seguente frammento CSS:
p { color: green; }
.p { color: blue; }
#p { color: yellow; }
[p] {color: red; }
[p="hello"] {color: cyan}
b { border: 1px solid green; }
.b { border: 2px dotted blue; }
#b { border: 4px dashed yellow; }
[b] {border: 3px dotted red; }
[b="hello"] {border: 1px dashed cyan}
i { background-color: yellow; }
.i { background-color: green; }
#i { background-color: blue; }
[i] {background-color: red; }
[i="hello"] {background-color:  cyan}
Come verrà mostrato il seguente frammento HTML?
<b class="i" id="b" p="hello">Ciao a tutti</b>
```

```css
A quali elementi HTML viene applicata la seguente regola CSS? h1 ~ span {
  width: 8em;
}
```

### Domanda 8

```javascript
//Cosa verrà stampato nell'elemento #b01 dopo la conclusione della connessione Ajax nel seguente frammento Javascript+jQuery nell'ipotesi che la connessione restitiuisca uno status code 402?

function sendData() {
  $("#b01").html("trying");
  $.ajax({
    method: "GET",
    url: "http://www.somesite.com/do/",
    success: function (data) {
      $("#b01").html("success");
    },
    error: function (connection) {
      $("#b01").html("error");
    },
  });
  $("#b01").html("complete");
}
```

```
Implementare una funzione javascript che faccia due cose:
1. Per prima cosa inserisca una select, per 3 tipi diversi di elettrodomestici, al posto il secondo blocco con classe "elemento_1". Se suddetto secondo blocco non esiste, allora la funzione lo deve creare.

2. Per seconda cosa legga il contenuto HTML del titolo con id "element_2" e lo stampi in tutti i paragrafi con classe "parahtml", controllando anche che "element_2" contenga almeno 2 elementi con tag b.
```

```
Scrivere il codice CSS di una pagina web. Il CSS deve modificare la pagina in modo che: I paragrafi pari dei blocchi con classe "block" siano col testo in grassetto ed evidenziato di colore rosso. Un paragrafo con id 'id1' sia a sinistra del immagine con id 'id2', considerando che entrambi gli elementi sono gli unici elementi dello stesso blocco padre insieme ad un terzo blocco posizionato dopo del immagine con id 'id2'.
```

### Domanda 9

```
Quali sono le principali differenze tra un web service tradizionale e uno secondo la filosofia REST?
```

```
Scrivere le regole in CSS per creare un’animazione denominata “example” ed applicarla ad ogni primo elemento "span" di un qualsiasi container per 2 secondi. L’animazione dovrà modificare il "text-color" in 4 fasi di uguale durata con 4 valori ammissibili da scegliere a piacere.
```

```javascript
Qual è il contenuto della variabile c dopo l'esecuzione dello script seguente?
function mutate(a) {
var b = "8";
for (var i = 2; i < a.length+1; i=i+2) {
b = b+a[i]+b;
}
return b;
}
var c = mutate("3,8,6,0,2,7,1,9,5,4") ;
```

### Domanda 10

```html
<h3>Esercizio per i: 9 CFU, 6 CFU-OLD</h3>
Scrivi in Turtle o JSON-LD il grafo RDF della seguente frase: «Il Balletto
dell'Opéra di Parigi (Ballet de l'Opéra national de Paris) è una delle più
prestigiose compagnie di danza classica, oltre che la più antica.. All'origine
vi è la Académie royale de danse creata per volere di Luigi XIV nel 1661.».
```

```
Scrivi (scrivere è diverso da disegnare), in un formato RDF valido a piacere tra quelli visti a lezione, il grafo RDF della seguente frase: «Hindås è un'area urbana della Svezia situata nel comune di Härryda, contea di Västra Götaland.La popolazione rilevata nel censimento 2010 era di 2 244 abitanti .».
```

```
Implementare una funzione javascript per poter interagire con le API di un servizio online di vendita elettrodomestici.
Questa funzione faccia due cose:
1. Per prima cosa crei un titolo nascosto dopo l'elemento HTML con id "elemento_nascosto" ed un checkbox che rende visibile il titolo nascosto quando il checkbox è spuntato e lo rende invisibile quando il checkbox non è spuntato. Il checkbox deve essere messo prima di un elemento HTML con id "pulsante_di_elemento_nascosto".

2. Per seconda cosa legga il valore del input testuale con id "input_utente", controllando che sia un numero maggiore di 19 e lo invii al server "www.my_elettrodomestici.co" attraverso l'API "info", rimanendo in attesa della risposta del server. La risposta del server sarà una lista di 2 elementi da visualizzare nei paragrafi con classe "para".
```

### Domanda 11

```html
<h3>Esercizio per i: 9 CFU, 6 CFU-OLD</h3>
Quanti nodi anonimi e quante triple RDF ci sono nel grafo RDF dell’esercizio
precedente?
```

```
Quanti nodi anonimi e quante triple RDF ci sono nel grafo RDF dell’esercizio precedente?
```

```javascript
Qual è il contenuto della variabile c dopo l'esecuzione dello script seguente?

function mutate(a) {
    var b = "";
    for (var i = 0; i <a.length; i++) {
        b = b+a[i];
    }
    return b;
}
var c = mutate("ferocia") ;
```

### Domanda 12

```html
Si scriva un frammento Javascript callback hell (si può usare jQuery) in cui si
interrogano in sequenza gli URI http://www.sito02.com/procedura/ in PUT, e
http://www.site01.com/service/ in POST usando per la richiesta al secondo URI i
dati ottenuti dalla connessione precedente. Con i dati ottenuti da quest'ultima
si chiami la funzione showData, che provvederà alla visualizzazione (non importa
fornire il contenuto di showData). Si fornisca lo stesso codice usando promesse.
```

```
Siano dati tre file, ciascuno contenente un testo di 1000 caratteri rispettivamente in italiano, giapponese, tedesco. Assumendo che tutti e tre usino la codifica UTF-8, quale sarà il più lungo e di quanti byte sarà la lunghezza di ciascuno?
```

```
Usando il framework jQuery, realizzare una funzione Javascript che interroghi il servizio server-side http://www.myshop.com//catalogo per ottenere un elenco di manga, descritti da titolo, autore, serie, numero, trama, data pubblicazione, prezzo e lo visualizzino all'interno dell'elemento DOM con id "output" sotto forma di lista numerata.

Aggiungere anche un campo "quantità", un input numerico, e un bottone cliccando sul quale sia possibile acquistare l'oggetto corrispondente chiamando il servizio server-side http://www.myshop.com//ordine e passandogli come parametri il codice dell'oggetto e la quantità come specificata nel corrispondente campo di input.
```

### Domanda 13

```html
Si consideri il seguente frammento di codice HTML, che implementa un form per la
ricerca di un annuncio.

<div class="cerca" aria-labelledby="titoloblocco" lang="en">
  <b id="titoloblocco">Cerca annuncio</b>
  <form method="post">
    <span>testo annuncio</span>
    <input type="search" />
    <p class="descrizione-campo">
      Trova ogni annuncio il cui testo contiene la stringa inserita.
    </p>
    <input type="submit" />
  </form>
</div>
Individuare almeno tre problemi di accessibilità presenti nel codice, indicando
per ciascuno di essi una possibile soluzione.
```

```
Scrivi il grafo RDF della seguente frase: «La strada europea E901 è una strada di classe B che collega le città spagnole di Madrid e Valencia. È chiamata anche Autovía A-3 o superstrada del est.».
```

```
Scrivere il codice HTML per creare un form che rispetti i criteri di accessibilità. Oltre al pulsante \"Invia commento\" che invia i dati immessi, nel form dovranno essere presenti un campo per il \"Nickname\" la cui compilazione è obbligatoria, un campo per il numero di telefono ed il campo \"testo del commento , che può anche essere più lungo di una riga.
```

### Domanda 14

```
Cosa sono i componenti nei framework avanzati visti a lezione? SI faccia un esempio di codice anche breve ma non banale sulla struttura dati seguente usando un framework a scelta tra Angular, React e Vue.

{ "order": ["primo", "secondo", "terzo"], "num": [0,1,2] }
```

```
Converti il grafo RDF dell’esercizio precedente in: Turtle.
```

### Domanda 15

```html
Si consideri la pagina Web implementata dal seguente codice HTML, il cui layout
viene definito dal foglio di stile in essa integrato, dove {{ label }} e {{
description }} indicano rispettivamente un’etichetta testuale ed un testo
contenente istruzioni che forniscono maggiori dettagli sul valore da inserire.
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Incredible form</title>
    <style>
      input {
        color: #0000ff;
        font-size: 1em;
      }
      .help {
        color: #0000ff;
        background-color: #0000ff;
        font-size: 12px;
      }
      .required {
        border: 1px solid #ff0000;
      }
      .invalid {
        background-color: #ff0000;
      }
    </style>
  </head>
  <body>
    <header>
      <h1>Incredible form</h1>
    </header>
    <main>
      <form method="post">
        <!-- questo campo è obbligatorio !-->
        <div class="Emailfield">
          <label>{{ label }}</label>
          <input type="Email" class="required" />
          <p class="description">{{ description }}</p>
        </div>
      </form>
    </main>
    <footer>
      <p>
        Copyright © Incredible websites S.P.A., tutti i diritti sono riservati.
      </p>
    </footer>
  </body>
</html>
Illustrare almeno tre problemi di accessibilità presenti nella pagina, indicando
per ciascuno di essi una possibile soluzione e le modifiche da apportare al
codice per implementarla.
```

~o~~d~~i~~o~ ~i~~l~ ~p~~r~~o~~f~ ~d~~i~ ~t~~e~~c~ ~w~~e~~b~
