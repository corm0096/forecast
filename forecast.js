//Original graphics from Design Instruct (designinstruct.com), modified by myself.

var today=new Date(); //To be used to filter data in f'n writeline(), but needs only one Date call.

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
		"<th>Time</th>",
		"<th>Humidity</th>",
		"<th>Cloud Cover</th>",
		"<th>Temp</th>",
		"<th>Wind Speed</th>",
		"<th id='icon' colspan=2>Summary</th>");
	$("#forecast table").append("<tbody></tbody>");
		console.log(data);
	$.each(data.hourly.data, writeline);
	$("#forecast body").append("<img src='img/rain.png' />");
}

function writeline(index,weatherdata)
{
	var hourtime=new Date(weatherdata.time*1000);
	console.log(hourtime.getDay());
	if (hourtime.getDay()===today.getDay())
	{
		var newtr=document.createElement("tr");	
		$("#forecast tbody").append(newtr);
		$(newtr).append(
				"<td>"+hourtime.getHours()+":00"+"</td>",
				"<td>"+Math.round(weatherdata.humidity*100)+"%</td>",
				"<td>"+Math.round(weatherdata.cloudCover*100)+"%</td>",
				"<td>"+weatherdata.temperature+" (C)</td>",
				"<td>"+weatherdata.windSpeed+" (km/hr)</td>",
				"<td><img src='img/"+weatherdata.icon+".png' /></td>",
				"<td>"+weatherdata.summary+"</td>"
		);
	}
}