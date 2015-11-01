
//Ajax query for weather.
//Code to call up the widget-proper and the CSS.
	//https://api.forecast.io/forecast/c37544ed79ac04ac45e78eb9cc1ae798/45.411, -75.706
//The above contains a key and incorrect lat/long.



function forecast()
{
	$.ajax(
		{
			url:"https://api.forecast.io/forecast/c37544ed79ac04ac45e78eb9cc1ae798/45.411,-75.706",
			dataType:"json",
			method:"GET",
			units:"ca"
		})
		.done(forecastloaded)
		.fail();
}

function forecastloaded(data,textStatus,jOBJ)
{
	console.log(data);
}