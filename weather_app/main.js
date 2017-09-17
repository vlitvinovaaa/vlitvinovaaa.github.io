$(document).ready ( function () {
	
  //get user's current position
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition ( function (pos) {
			
			var latitude = pos.coords.latitude;
			var longitude = pos.coords.longitude;
			
  //send request to a server
			$.ajax ({
				url: "https://api.wunderground.com/api/8d4e36713fc099eb/geolookup/conditions/forecast/q/" + latitude + "," + longitude + ".json",
				dataType: "jsonp",
 // in case of success start a function for time and date formatting
				success: function (data) {					
					var d = new Date();
					var time = d.getHours() + ":" + d.getMinutes();
					
					if (d.getHours() >= 12) {
						var ap = "PM"
					} else {
						var ap = "AM"
					}
//get data from object and appoint it to a variables		
					var loc = data.location.city + ", " + data.location.country;
					var month = data.forecast.simpleforecast.forecastday[0].date.monthname_short;
					var dateTime = data.forecast.simpleforecast.forecastday[0].date.weekday_short + " " + data.forecast.simpleforecast.forecastday[0].date.day + " " + month;
					var todayTempC = data.current_observation.temp_c;
					var todayTempF = data.current_observation.temp_f;
					var weather = data.forecast.simpleforecast.forecastday;	
					
					var weathers = [{conditions: weather[0].conditions}];

 //get the highest and the lowest temperature in Celcius and Fahrenheit
					weathers.forEach(function (weather, i) {
						
					  	var wC = weather.conditions;
					  	var lowC = data.forecast.simpleforecast.forecastday[i].low.celsius;
					  	var highC = data.forecast.simpleforecast.forecastday[i].high.celsius;
					  	var lowF = data.forecast.simpleforecast.forecastday[i].low.fahrenheit;
					  	var highF = data.forecast.simpleforecast.forecastday[i].high.fahrenheit;

//choose the right icon, according to conditions
							switch (wC) {
								case "Clear": case "Sunny":
									$("#icon" + (i + 1)).addClass ("wi wi-day-sunny");
									break;
								case "Mostly Sunny": case "Mostly Clear": case "Partly Sunny": case "Partly Cloudy":
									$("#icon" + (i + 1)).addClass ("wi wi-day-cloudy");
									break;
								case "Mostly Cloudy": case "Overcast": case "Scattered Clouds":
									$("#icon" + (i + 1)).addClass ("wi wi-cloudy");
									break;
								case "Fog":
									$("#icon" + (i + 1)).addClass ("wi wi-day-fog");
									break;
								case "Rain": case "Light Rain Showers":
									$("#icon" + (i + 1)).addClass ("wi wi-day-rain");
									break;
								case "Snow":
									$("#icon" + (i + 1)).addClass ("wi wi-day-snow");
									break;
							}
//write a temperature value into a div 
					  		$("#todayTemp").html (todayTempC + "&deg;");
					  		$("#minMax" + (i + 1)).html (lowC + "&deg; / " + highC + "&deg;");
	
 //function for switching between Celsius and Fahrenheit
						    $("input:radio[name=\"degree\"]").change (function () {
								if ($(this).val() == "cel"){
									$("#todayTemp").html (todayTempC + "&deg;");
						  			$("#minMax" + (i + 1)).html (lowC + "&deg; / " + highC + "&deg;");
								}
								else if ($(this).val() == "far") {
						  			$("#todayTemp").html (todayTempF + "&deg;");
						  			$("#minMax" + (i + 1)).html (lowF + "&deg; / " + highF + "&deg;");
								}
					 		});
					});
	//write a location, date and time data into a div				
					$("#location").html (loc);
					$("#dateTime").html (dateTime + ", " + time + " " + ap);
				},
			});
		});
	}
});