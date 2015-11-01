document.addEventListener("DOMContentLoaded",main);
var head, jqScript, fcScript, fcCSS, loadtally=0;

function main()
{
	
	//Widget loading code and loadtallier helpfully provided by Steve Griffith in-lecture.
	var head = document.querySelector("head");
	var jqScript=document.createElement("script");
	var fcScript=document.createElement("script");
	var fcCSS=document.createElement("link");
	
	head.appendChild(fcCSS);
	fcCSS.setAttribute("rel","stylesheet");
	fcCSS.setAttribute("href","forecast.css");

	head.appendChild(jqScript);
	jqScript.addEventListener("load",loadtallier);
	jqScript.setAttribute("src","http://ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js");
	
	head.appendChild(fcScript);
	fcScript.addEventListener("load",loadtallier);
	fcScript.setAttribute("src","forecast.js");
}

function loadtallier()
{
	//Since both jquery and the forecast code must load, the order in which it loads, or tracking them separately, are moot points.
	loadtally++;
	console.log(loadtally+" of two have loaded.");
	if(loadtally===2)
	{
		forecast();
	}
}