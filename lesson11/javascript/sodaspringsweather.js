// Current Weather for Weather Summary
const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5607916&units=imperial&APPID=6e7bd40e8ca3eb7510e79f20646a0157";

fetch(apiURL)
  .then((response) => response.json())
  .then((town) => {
    console.log(town);
    let description = town.weather[0].description;
    document.getElementById('currently').innerHTML = description.charAt(0).toUpperCase() + description.slice(1);
    document.getElementById('temp').innerHTML = Math.round(town.main.temp);
    document.getElementById('humidity').innerHTML = town.main.humidity;
    document.getElementById('windspeed').innerHTML = Math.round(town.wind.speed);
    const tempNum = parseFloat(town.main.temp)
    const windSpeedNum = parseFloat(town.wind.speed)

    let windChill = Math.round(35.74 + (0.6215 * tempNum) -
        (35.75 * Math.pow(windSpeedNum, 0.16)) +
            (0.4275 * tempNum * Math.pow(windSpeedNum, 0.16)));

    if (tempNum <= 50 && windSpeedNum > 3) {
            document.getElementById("windchill").textContent = windChill
    } else {
            document.getElementById("windchill").textContent = "N/A"
      }
});


// 5 day forecast

const apiURL_forecast = "https://api.openweathermap.org/data/2.5/forecast?id=5607916&units=imperial&APPID=6e7bd40e8ca3eb7510e79f20646a0157"

fetch(apiURL_forecast)
    .then(response => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        const forecastData = jsObject.list.filter((element)=>element.dt_txt.includes('18:00:00'));

	console.log(forecastData);

	const weekdays = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];

    let day = 0;
	forecastData.forEach(forecast => {
	  let x = new Date(forecast.dt_txt);
    document.getElementById('temp'+(day+1)).textContent = Math.round(forecast.main.temp) + ' °F';
    document.getElementById('img'+(day+1)).src = "https://openweathermap.org/img/w/" + forecast.weather[0].icon + ".png";
    document.getElementById('img'+(day+1)).alt = forecast.weather[0].description
	document.getElementById('day'+(day+1)).textContent = weekdays[x.getDay()];
	day++;	  
	});
});