$(function(){
	$("<h3>").text("Saiba o que andam falando sobre a Mirror Fashion:").prependTo("#tweets");
	$.ajax({
		url: "http://search.twitter.com/search.json",
		dataType: "jsonp",
		data: {
			q: "@caelum",
			rpp: 10
		},
		success: sucesso
	});

	function sucesso(retorno, codigo, jqXHR){
		console.time("twitter");
		var ul = $("#tweets ul");
		var lis = "";
		$.each(retorno.results, function(){
			lis += "<li>" +
				   "<img src='" + this.profile_image_url + "' />" +
				   "<p>" + this.text + "</p>" +
				   "</li>"
		});
		ul.append(lis);
		console.timeEnd("twitter");
	}

	function sucessoAntigo(retorno, codigo, jqXHR){
		console.time("twitter");
		$.each(retorno.results, function(){
			var li = $("<li>");
			var img = $("<img>").attr("src", this.profile_image_url);
			var p = $("<li>").text(this.text);
			li.append(img).append(p).appendTo("#tweets ul");
		});
		console.timeEnd("twitter");
	}
	//history.pushState *****
});