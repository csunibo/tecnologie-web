# Soluzione scritto di Tecnologie web in presenza del 29 giugno 2021

## Esercizio 2

```html
<!DOCTYPE html>
<html lang="it">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://www.fabiovitali.it/TW/lib/bootstrap.min.css">
  <link rel="stylesheet" href="scritto-2021-06-29-p-soluzione-style.css">
  <title>Esercizio 2</title>
</head>

<body>
  <header>
    <div class="headerContent">
      <p>Home &rarr;</p>
      <h2>SUPPORTACI</h2>
      <div class="buttonContainer">
        <button type="button" value="Dona">DONA</button>
        <button type="button" value="Partecipa">PARTECIPA</button>
      </div>
    </div>
  </header>
  <div class="container">
    <div class="row">
      <div class="col border-top border-start border-bottom border-danger border-4">
        <img class="img-fluid" src="SaveTheChildren.jpg">
      </div>
      <div class="col centralize">
        <p class="fw-bold text-danger">Sono molto i modi in cui puoi supportare le nostre attività</p><br />
        <p>Il modo <span class="fw-bold">più semplice è una donazione,</span> ma se lo vorrai potrai anche <span
            class="fw-bold">scegliere di unirti a noi diventando un volontario</span>
          ,partecipando alle nostre <span class="fw-bold">campagne</span> e tanto altro.
        </p>
        <p class="fw-bold text-danger">Diventerai così un nostro supporter</p>
      </div>
    </div>
    <div class="sentence">
      <span>
        <p id="first">PUOI FARE</p>
        <p id="second">LA DIFFERENZA</p>
      </span>
    </div>
  </div>
  <script src="https://www.fabiovitali.it/TW/lib/jquery-3.6.0.js"></script>
  <script src="https://www.fabiovitali.it/TW/lib/bootstrap.js"></script>
</body>

</html>
```

```css
*{
    margin: 0;
    padding: 0;
}
header{
    display: flex;
    flex-direction: column;
    background-color: rgb(201, 0, 0);
    color: #fff;
    /* padding-top: 1em; */
    margin-bottom:1em;
}

.headerContent{
    margin-left: 3em;
    padding-bottom: 1em;
}

header button{
    background-color: transparent;
    text-decoration: none;
    color: #fff;
    border: 2px solid white;
}

.centralize{
    padding-top: 6em;
    background-color: rgb(197, 191, 191);
}

.sentence{
    position: absolute;
    top: 5%;
    left: 30vw;
    font-size: 1.2em;
}

.container{
    position: relative;
    margin: auto;
}

span>*{
    margin-top : 0;
    margin-bottom: 0;
    width: 100%;
}

#first,
#second{
    background-color: white;
    color: black;
    height: 2em;
    font-weight: bold;
    text-align: center;
}

#second{
    margin-left: 2em;
}
```

## Esercizio 3

### _Client_

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://www.fabiovitali.it/TW/lib/bootstrap.min.css">
  <title>Document</title>
</head>

<body>
  <div class="row">
    <div class="col-3">
      <img src="home.png" alt="Home" width=50 id="home" style="cursor: pointer; margin:1%" />
    </div>
  </div>
  <div class="container row">
    <div class="col-4" id="infoContainer"></div>
    <div class="col-8" id="fotoContainer"></div>
  </div>
  <div class="row">
    <div class="col-4 m-3 p-2" id="formContainer"></div>
  </div>
  <div class="row m-2 p-2">
    <div class="col-6" id="results">

    </div>
  </div>
  <script src="https://www.fabiovitali.it/TW/lib/jquery-3.6.0.js"></script>
  <script src="scritto-2021-06-29-p-soluzione-es3.js"></script>
</body>

</html>
```

```js
let dresses = [], cart = [];
let index = 0;
let url = "http://www.fabiovitali.it/TW/test/2021/";
$().ready(()=>{
    $("#home").click(()=>{
        location.href = "#";
    })
    Promise.all([
        $.get("http://localhost:3000/dress1"),
        $.get("http://localhost:3000/dress2")
    ])
    .then((res)=>{
        dresses = res.map(x=>JSON.parse(x));
        render();
    })
    .catch(err=>{
        console.error(err)
    })
});

function render(){
    let dress = dresses[index];
    let containerText = $("#infoContainer");
    let infoHtml = "";
    infoHtml = `
            <div class="row border-bottom border-3 fs-3">${dress.title}</div>
            <div class="row">${dress.description}</div>
            <div class="row fs-3"><div class="col text-warning">${dress.evaluation}</div><div class="col">€ ${dress.price}</div></div> 
            <div class="row"><div class="col"><button class="btn btn-primary" onclick="renderPrec()">PREC</button></div><div class="col"><button class="btn btn-primary" onclick="renderSucc()">SUCC</button></div></div> 
    `;
    let containerImage = $("#fotoContainer");
    let infoImage = `<img src="${url+dress.image}" width=150></img>`;
    containerText.html(infoHtml);
    containerImage.html(infoImage);
    let formContainer = $("#formContainer");
    let infoForm = "";
    $.get(`http://localhost:3000/showItems/${index}`)
    .then(response => {
        response = JSON.parse(response);
        for(let i in response){
            infoForm += `<label for="${i}">Scegli ${i} &nbsp;</label><select required name="${i}" id=${i}>`;
            for(let j of response[i]){
                infoForm += `<option value=${j}>${j}</option>`
            }
            infoForm += `</select> &nbsp;`;
        }
        infoForm += `<br/><label for="quantity"> Quantità &nbsp; </label><input id="quantity" name="quantity" class="m-1" value="1" type="number" min="1" max="10"/>`;
        infoForm +=`<button onclick="addToCart(formContainer)" class="m-2 btn btn-primary">Aggiungi al carrello</button>`;
        formContainer.html(infoForm);
    })
}

function addToCart(form){
    let dressId = index;
    let color = $(`[name="colore"]`).children(":selected").html();
    let taglia = $(`[name="taglie"]`).children(":selected").html();
    let quantity = parseInt($(`[name="quantity"]`).val());
    if(quantity>10){
        alert("Max quantity exceeded");
        render();
        return;
    }
    let toSend = {
        id: dressId,
        color: color,
        taglia: taglia,
        quantity: quantity,
    };
    $.post(`http://localhost:3000/buyItems?id=${toSend.id}&color=${toSend.color}&taglia=${toSend.taglia}&quantity=${toSend.quantity}`)
    .then(res=>{
        $("#results").html(`<p class="text-muted fs-3">Totale €${res}`);
        render();
    })
    .catch(err=>{
        $("#results").html(`<p class="text-danger fs-3">Errore nella richiesta</p>`);
        console.log(err);
    });
    $.post("http://www.fabiovitali.it/TW/test/2021/doResponse.php",toSend)
    .then(res=>{console.log(res);})
    .catch(err => {console.log(err)});
}

function renderPrec(){
    index = ((index - 1) + dresses.length) % dresses.length;
    render();
}

function renderSucc(){
    index = (index + 1) % dresses.length;
    render();
}
```

### _Server_

```js
const express = require('express')
const bodyParser = require('body-parser')
const app = express();
var cors = require('cors');
const port = 3000;

let jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })

let data0 = {
	id : 0,
	title: "Amazon Essentials Abito Midi A-Line A Mezza Manica Vita Donna",
	description: "Questo vestito versatile e accattivante si adatta facilmente dal giorno alla notte. Elegante abito a trapezio con maniche corte e motivo a quadretti, perfetto per una giornata informale. 100% Viscosa. Chiusura: Bottone. Lavabile in lavatrice. Manica corta. Abito femminile a mezza manica. ",
	image: "img/dress123.jpg",
	price: 24.99, 
	evaluation: "****"
};

let color0 = ["Black", "Yellow", "White"];
let color1 = ["Black", "Green", "Red"];
let taglie0 = ["XS", "S", "L", "XL"];
let taglie1 = ["XS", "S", "M", "L", "XL"];

let data1 = {
	id : 1,
	title: "Amazon Essentials Abito Midi A-Line A Mezza Manica Vita Donna",
	description: "Questo versatile abito a maniche corte presenta uno scollo a V e un drappo femminile per uno stile semplice e quotidiano. Realizzato in jersey che drappeggia magnificamente. 95% Rayon, 5% Elastan. Chiusura: Nessuna chiusura. Lavabile in lavatrice. Manica corta. Short-sleeve V-neck Swing Dress",
	image: "img/dress945.jpg",
	price: 15.57, 
	evaluation: "***"
};

let data = [data0, data1];

app.use(cors());

app.get('/dress1', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(JSON.stringify(data[0]));
})

app.get('/dress2', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.send(JSON.stringify(data[1]));
})

app.get('/showItems/:id', (req, res) => {
	let toSend;
	switch (req.params.id) {
		case "0":
			toSend = {
				colore: color0,
				taglie: taglie0
			};
		break;
		case "1":
			toSend = {
				colore: color1,
				taglie: taglie1
			};
		break;
	}
    res.header('Access-Control-Allow-Origin', '*');
    res.send(JSON.stringify(toSend));
})

app.post('/buyItems',(req, res)=>{
    res.header('Access-Control-Allow-Origin', '*');
	let id=  req.query.id,
	color= req.query.color,
	taglia= req.query.taglia,
	quantity= req.query.quantity,
	total = parseFloat(data[id].price*parseInt(quantity));
	res.send(total.toString());
})

app.listen(port, () => {
console.log(`App listening at http://localhost:${port}`)
})
```
