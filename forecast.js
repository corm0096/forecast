function forecast()
{
	$.ajax(
		{
			url:"https://api.forecast.io/forecast/c37544ed79ac04ac45e78eb9cc1ae798/45.411,-75.706?units=ca",
			dataType:"jsonp",
			method:"GET"
		})
		.done(forecastloaded)
		.fail();
}

function forecastloaded(data,textStatus,jOBJ)
{
	$("#forecast").append("<table></table>");
	$("#forecast table").append("<thead></thead>");
	$("#forecast thead").append("<tr></tr>");
	$("#forecast tr").append(
		"<th>% humidity</th>",
		"<th>% cloud cover</th>",
		"<th>Temp (C)</th>",
		"<th>wind speed (km/hr)</th>",
		"<th></th>","<th>Summary</th>");
	$("#forecast table").append("<tbody></tbody>");
		
	$.each(data.hourly.data, writeline);
}

function writeline(index,weatherdata)
{	
	$("#forecast tbody").append("<tr></tr>", [
			"<td>"+Math.round(weatherdata.humidity*100)+"</td>",
			"<td>"+Math.round(weatherdata.cloudCover*100)+"</td>",
			"<td>"+weatherdata.temperature+"</td>",
			"<td>"+weatherdata.windSpeed+"</td>",
			"<td>"+weatherdata.icon+"</td>",
			"<td>"+weatherdata.summary+"</td>"
	]);	
}