var weatherFranklin = new XMLHttpRequest();
weatherFranklin.open('GET', 'https://api.wunderground.com/api/512fa2acfaad275a/forecast/q/MN/Franklin.json', true);
weatherFranklin.send();

weatherFranklin.onload = function() {
    var weatherFranklinForecast = JSON.parse(weatherFranklin.responseText);
    console.log(weatherFranklinForecast);
    document.getElementById('currentweather').innerHTML = weatherFranklinForecast.forecast.txt_forecast.forecastday["0"].fcttext;
    document.getElementById('lowT').innerHTML = weatherFranklinForecast.forecast.simpleforecast.forecastday["0"].low.fahrenheit;
    document.getElementById('highT').innerHTML = weatherFranklinForecast.forecast.simpleforecast.forecastday["0"].high.fahrenheit;
    document.getElementById('weatherimg').src = weatherFranklin.current_observation.icon_url.replace('http:', 'https:');;
    document.getElementById('weatherstring').innerHTML = weatherFranklin.current_observation.weather;
    document.getElementById('precipitation').innerHTML = weatherFranklin.current_observation.precip_today_in;
    document.getElementById('windspeed').innerHTML = weatherFranklin.current_observation.wind_mph;
    document.getElementById('windchill').innerHTML = weatherFranklin.current_observation.windchill_f;
}
