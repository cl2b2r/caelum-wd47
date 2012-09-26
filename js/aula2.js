function clicouNoTitulo(event){
	var titulo = event.target;
	titulo.textContent = "Texto dinâmico alterado";
	titulo.style.color = "#c03";
	alert("Espera!!!");
}

var titulo = document.getElementsByTagName("h1")[0];

titulo.textContent = "Texto dinâmico";
titulo.style.color = "#369";
//titulo.onclick = clicouNoTitulo;

document.getElementById("link").onkeypress = function(event){
	console.log(event);
	document.getElementsByTagName("li")[0].textContent = String.fromCharCode(event.charCode);
};

titulo.addEventListener("click", clicouNoTitulo, false);

titulo.addEventListener("click", function(){
	console.log("Outro evento!!!");
}, false);

titulo.removeEventListener("click", clicouNoTitulo, false);

var lista = document.querySelector("ul");
var itens = document.querySelectorAll("li");

document.body.addEventListener("mousemove", function(){
	//console.log("Evento do body!!!");
	console.log(event.clientX+", "+event.clientY);
	if(event.clientX <= 255 && event.clientY <= 255){
		document.body.style.backgroundColor = "rgb("+ event.clientX + ",0," + event.clientY +")";
	}
}, false);

lista.addEventListener("click", function(){
	console.log("Evento da lista!!!");
}, false);


for(var i = 0; i < itens.length; i++){
	itens[i].addEventListener("click", function(){
		console.log("Evento do item da lista!!!");
	}, false);
}

var item = document.querySelector("li");
console.log(item.parentNode.children);

var cachorro = {
	nome: "Melissa",
	peso: 19,
	come: function(porcao){
		this.peso += porcao * 0.7;
	}
}

cachorro.come(1);
console.log(cachorro.peso);

var item = document.querySelector("li");

function mudaCor(event){
	//event.target.style.color = "#c03";
	this.style.color = "#c03";
}

item.addEventListener("mouseover", mudaCor, false);