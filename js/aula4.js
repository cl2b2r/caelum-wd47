$(function(){
	$("ul").on("click", "li", function(event){
		$(this).css({"font-size" : "+=1px"}).filter(".teste").find("a").text("(excluir)");
	});

	$("<li>Elemento criado por JQuery</li>").addClass("teste").prependTo("ul");
	$("ul").wrap("<div style='border: 5px solid #ccc;'></div>");
	$("li").append("<a href='#'>(x)</a>");
	$("li").css("color", "black").filter(".teste").css("background", "#ccc");
	$("a[href=#]").on("click", function(){
		$(this).closest("li").fadeOut("slow").slideDown("fast").slideUp(500).fadeIn(3000, function(){
			$(this).remove();
		});
	});

	var textos = $(".texto");

	textos.first().on("click", function(){
		textos.animate({"width" : "100px"});
	}).end().last().on("click", function(){
		textos.animate({"width" : "100%"});
	}).end().css({"background" : "#ccc"}).find(":contains(wd-47)").css({"background" : "#9c7", "font-weight" : "bold", "padding" : "1px"}).end().prev("header").andSelf().css({"border" : "1px solid #999", "margin-top" : "10px"});
});