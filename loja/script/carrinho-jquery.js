$(function(){
	$("#carrinho").on("click", "li form p a", function(event){
		var confirma = confirm("Tem certeza que deseja excluir este item?");
		if(confirma){
			$(this).closest("li").fadeOut("slow", function(){
				$(this).remove();
			});
		}
		event.preventDefault();
	});
	$("<a href='#'>").text("Excluir").appendTo("li form p");

	$("#carrinho").on("keyup", "li input[type=text]", function(event){
		var item = $(this).closest("li");
		item.data("quantidade", this.value);
		item.data("valorUnitario", realParaNumber(item.find("span[id$=valor_unit]").text()));
		item.find("span[id$=valor_total]").text(numberParaReal(item.data("valorUnitario") * item.data("quantidade")));
		console.log(item);
	});
});

function realParaNumber(real){
	return parseFloat(real.replace("R$", "").replace(",", "."));
}

function numberParaReal(number){
	return "R$" + number.toFixed(2).replace(".", ",");
}