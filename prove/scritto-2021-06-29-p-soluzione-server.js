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