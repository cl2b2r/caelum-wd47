var novoLi = document.createElement("li");
var txt = document.createTextNode("Otimização");

novoLi.appendChild(txt);

document.querySelector("ul").appendChild(novoLi);

var novoLi2 = novoLi.cloneNode(true);
document.querySelector("ul").insertBefore(novoLi2, document.querySelector("li"));
document.querySelector("ul").removeChild(document.querySelectorAll("li")[2]);

window.onload = function(event){
	window.navigator.geolocation.getCurrentPosition(function(position){
		console.log("Latitude: " + position.coords.latitude +" Longitude: "+ position.coords.longitude);
	});
}

function Conta(){
	var saldo = 0;
	this.deposita = function(valor){
		saldo += valor;
	}
	this.getSaldo = function(){
		return saldo;
	}
}

var conta = new Conta();
conta.deposita(1000);
console.log(conta.getSaldo());
console.log(typeof conta);
conta.deposita(1000);
console.log(conta.getSaldo());
console.log(conta.constructor);
conta.saldo = 0;
console.log(conta.getSaldo());