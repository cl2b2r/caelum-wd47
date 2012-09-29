$(function(){
	$("ul li > a").on("click", function(event){
		event.preventDefault();

		var produto = $(this).find("h3").text();
		var div = $("<div>").prop("title", produto).addClass("dialogo");
		div.load(this.href + "#produto .descricao");
		$(div).dialog({
			autoOpen: true,
			modal: true,
			resizable: false,
			autoSize: true
		});
	});
});