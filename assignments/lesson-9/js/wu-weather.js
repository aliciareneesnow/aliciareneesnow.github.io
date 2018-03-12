var franklinWeather = new XMLHttpRequest();
franklinWeather.open('GET', 'https://api.wunderground.com/api/512fa2acfaad275a/conditions/q/MN/Franklin.json', true);
franklinWeather.send();

franklinWeather.onload = function() {
    var weatherFranklin = JSON.parse(franklinWeather.responseText);
    document.getElementById('highT').innerHTML = franklinWeather.forecast.simpleforecast.forecastday["0"].high.fahrenheit;
    document.getElementById('lowT').innerHTML = franklinWeather.forecast.simpleforecast.forecastday["0"].low.fahrenheit;
    document.getElementById('precipitation').innerHTML = parseInt(franklinWeather.current_observation.precip_today_in);
    document.getElementById('wind-speed').innerHTML = franklinWeather.current_observation.wind_mph;
    document.getElementById('conditions').innerHTML = franklinWeather.current_observation.weather;
    document.getElementById('currentweather').innerHTML = franklinWeather.current_observation.temp_f;
    document.getElementById('condition-text').innerHTML = franklinWeather.forecast.txt_forecast.forecastday["0"].fcttext;

}
