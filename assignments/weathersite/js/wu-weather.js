var weatherFranklin = new XMLHttpRequest();
weatherFranklin.open('GET', 'https://api.wunderground.com/api/512fa2acfaad275a/forecast/q/MN/Franklin.json', true);
weatherFranklin.send();

weatherFranklin.onload = function() {
    var franklinForecast = JSON.parse(weatherFranklin.responseText);
    console.log(franklinForecast);
    document.getElementById('currentweather').innerHTML = franklinForecast.forecast.txt_forecast.forecastday["0"].fcttext;
    document.getElementById('lowT').innerHTML = franklinForecast.forecast.simpleforecast.forecastday["0"].low.fahrenheit;
    document.getElementById('highT').innerHTML = franklinForecast.forecast.simpleforecast.forecastday["0"].high.fahrenheit;
}

var requestURL = 'https://api.wunderground.com/api/512fa2acfaad275a/forecast/conditions/q/MN/Franklin.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL, true);
request.send();
request.onload = function () {
    var franklinWeather = JSON.parse(request.responseText);
    document.getElementById('currentT').innerHTML = franklinWeather.current_observation.temp_f;
    document.getElementById('weatherimg').src = franklinWeather.current_observation.icon_url.replace('http:', 'https:');;
    document.getElementById('weatherstring').innerHTML = franklinWeather.current_observation.weather;
    document.getElementById('precipitation').innerHTML = franklinWeather.current_observation.precip_today_in;
    document.getElementById('windspeed').innerHTML = franklinWeather.current_observation.wind_mph;
    document.getElementById('output').innerHTML = franklinWeather.current_observation.windchill_f;
}



