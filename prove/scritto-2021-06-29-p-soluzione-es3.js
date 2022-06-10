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