$(function(){
	function busca(termo, p){
		$.ajax({
			url: "http://search.twitter.com/search.json",
			dataType: "jsonp",
			data: {
				q: termo,
				rpp: 100,
				page: p
			},
			success: function(data, textStatus, jqXHR){
				$.each(data.results, function(){
					var t = $("<p>").text(this.text);
					t.append($("<img>").attr("src", this.profile_image_url));
					$('body').append(t);
				});
			}
		});
	}

	busca("caelum", 1);
	setTimeout(function(){ busca("caelum", 2) }, 5000)
});