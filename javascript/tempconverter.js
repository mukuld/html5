/* Program to convert temperature from Fahrenheit to Celcius
   and vice versa */

var temperature;
var cel;		//Temperature in celcius
var fahren;		//Temperature in Fahrenheit
var unit = "";			//This will come from the radio button in the html page
var selected

function cel2Fahren(x) {
	cel = (x - 32) * 5 / 9;
	//console.log(cel);
	return cel;
	}

function fahren2Cel(y) {
	fahren = (y * 9 / 5) + 32;
	//console.log(fahren);
	return fahren;
	}

$("#unitSelect").click(function(){
	selected = $("input[type='radio'][name='unitSelect']:checked");
	unit = selected.val();
	console.log(unit);
	if (unit === "c") {
	$("<p>Temp in Celcius</p>").insertBefore("#temp")
	$("<p>Temp in Fahrenheit</p>").insertBefore("#result")
	} else {
	$("<p>Temp in Fahrenheit</p>").insertBefore("#temp")
	$("<p>Temp in Celcius</p>").insertBefore("#result")
	//console.log(unit);
	}
	});
	
$("#submit").click(function(){
	temperature = $("#temp").val();
	//console.log(temperature);
	if (unit === "c") {
	var result = fahren2Cel(temperature);
	//console.log("Result is: " + result);
	document.getElementById("result").value = result;
	}
	else {
	var result = cel2Fahren(temperature);
	document.getElementById("result").value = result;
	//console.log("Result is: " + result);
	}
	//$("#output").html("<p> The converted temperature is: " + result);
});
	
/*if (unit === "c") {
	console.log("THis is celcius");
	}
	else {
	console.log("this is Fahrenheit");
	}
*/