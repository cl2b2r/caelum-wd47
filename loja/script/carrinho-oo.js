function Carrinho(elemento){
	this.itens = [];

	var elementoItens = elemento.getElementsByTagName("li");
	for(var i = 0; i < elementoItens.length; i++){
		this.itens.push(new Item(elementoItens[i]));
	}
}

function Item(elemento){
	this.codigoProduto = elemento.getElementsByTagName("strong").item(0).firstChild.textContent;
	this.valorUnitario = realParaNumber(elemento.getElementsByClassName("item_info").item(0).lastElementChild.lastElementChild.textContent);
	this.quantidade = elemento.getElementsByTagName("input").item(0).value;
	this.valorTotal = this.valorUnitario * this.quantidade;
}