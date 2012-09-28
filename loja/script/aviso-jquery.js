$(function(){
	var textoEsconde = "Esconder aviso";
	var aNova = $("<a>").prop("href", "#").text(textoEsconde);

	aNova.click(function(evento){
		div = $(this).next("div");
		div.toggle();
		if(div.is(":visible")){
			$(this).text(textoEsconde);
		}else{
			$(this).text("Mostrar aviso");
		}
	}).prependTo("#principal");
});