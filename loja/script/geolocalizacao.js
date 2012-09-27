document.querySelector("form a").addEventListener("click", function(event){
	event.preventDefault();
	window.navigator.geolocation.getCurrentPosition(function(posicao){
		var latitude = posicao.coords.latitude;
		var longitude = posicao.coords.longitude;

		var geocoder = new google.maps.Geocoder();
		var posicao = new google.maps.LatLng(latitude, longitude);

		geocoder.geocode({location: posicao}, function(results){
			var cidade, estado = "";
			var partes = results[0].address_components;

			for(i = 0; i < partes.length; i++){
				console.log(partes[i]);
				var tipo = partes[i].types[0];
				var parte = partes[i].long_name;
				var parteAbreviada = partes[i].short_name;

				cidade = tipo == "locality" ? parte : cidade;
				estado = tipo == "administrative_area_level_1" ? parteAbreviada : estado;
			}

			document.endereco.cidade.value = cidade;
			document.endereco.estado.value = estado;
		});
	});
}, false);