var weatherObject = new XMLHttpRequest();
weatherObject.open('GET', 'https://api.wunderground.com/api/512fa2acfaad275a/conditions/q/MN/Franklin.json', true);
weatherObject.send();

weatherObject.onload = function() {
    var weatherFranklin = JSON.parse(weatherObject.responseText);
    console.log(weatherFranklin);

    document.getElementById('windSpeed').innerHTML = weatherFranklin.current_observation.wind_mph;
    document.getElementById('windChill').innerHTML = weatherFranklin.current_observation.windchill_f;
    document.getElementById('currentTemp').innerHTML = weatherFranklin.current_observation.temp_f;
    document.getElementById('precipitation').innerHTML = weatherFranklin.current_observation.precip_today_in;
    document.getElementById('currentWeather').innerHTML = weatherFranklin.current_observation.weather;
    document.getElementById('w_icon').src = weatherFranklin.current_observation.icon_url.replace('http:', 'https:');;
}

var weatherObject2 = new XMLHttpRequest();

weatherObject2.open('GET', 'https://api.wunderground.com/api/512fa2acfaad275a/conditions/q/MN/Franklin.json', true);
weatherObject2.send();

weatherObject2.onload = function() {
    var weatherFranklinForecast = JSON.parse(weatherObject2.responseText);
    console.log(weatherFranklinForecast);

    document.getElementById('textForecast').innerHTML = weatherFranklinForecast.forecast.txt_forecast.forecastday["0"].fcttext;
    document.getElementById('lowT').innerHTML = weatherFranklinForecast.forecast.simpleforecast.forecastday["0"].low.fahrenheit;
    document.getElementById('highT').innerHTML = weatherFranklinForecast.forecast.simpleforecast.forecastday["0"].high.fahrenheit;
}