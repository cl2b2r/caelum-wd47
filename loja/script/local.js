var campoCep = document.getElementById("input_cep");

campoCep.addEventListener("blur", function(evento){
	localStorage.cepDigitado = this.value;
}, false);

window.addEventListener("load", function(){
	if(localStorage.cepDigitado){
		campoCep.value = localStorage.cepDigitado;
	}
}, false);