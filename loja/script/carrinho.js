function realParaNumber(real){
	return parseFloat(real.replace("R$", "").replace(",", "."));
}

function numberParaReal(number){
	return "R$" + number.toFixed(2).replace(".", ",");
}

var carrinho = document.getElementById("carrinho");
var itens = carrinho.getElementsByTagName("li");

for(var i = 0; i < itens.length; i++){
	var inputs = itens[i].getElementsByTagName("input");
	var inputQuantidade = inputs[0];

	inputQuantidade.addEventListener("keyup", function(){
		var quantidade = this.value;
		var itemAtual = this.parentNode.parentNode.parentNode;
		var spansValor = itemAtual.getElementsByTagName("span");
		var valorUnitario = realParaNumber(spansValor[0].textContent);
		if(quantidade > 99){
			alert("Para compras acima de 99 unidades, entre em contato com revendas@mirrorfashion.com.br");
			this.value = 99;
		}else{
			spansValor[1].textContent = numberParaReal(quantidade * valorUnitario);
		}
	}, false);
}