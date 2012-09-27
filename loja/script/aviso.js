var textoInicial = "Esconder aviso";
var aNova = document.createElement("a");
aNova.textContent = textoInicial;
aNova.setAttribute("href", "#");

aNova.addEventListener("click", function(evento){
	if(this.textContent == textoInicial){
		this.textContent = "Mostrar aviso";
		this.nextElementSibling.style.display = "block";
	}else{
		this.textContent = textoInicial;
		this.nextElementSibling.style.display = "block";
	}
	evento.preventDefault();
}, false);

var divPrincipal = document.getElementById("principal");
divPrincipal.insertBefore(aNova, divPrincipal.firstChild);