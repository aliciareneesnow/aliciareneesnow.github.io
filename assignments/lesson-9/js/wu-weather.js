var weatherFranklin = new XMLHttpRequest();
weatherFranklin.open('GET', 'https://api.wunderground.com/api/512fa2acfaad275a/conditions/q/MN/Franklin.json', true);
weatherFranklin.send();

weatherFranklin.onload = function() {
  var wuWeather = JSON.parse(weatherFranklin.responseText);
  console.log(wuWeather);
    
  document.getElementById('w-icon').src = weatherInfo.current_observation.icon_url;
  document.getElementById('weatherString').innerHTML = weatherInfo.current_observation.weather;
  document.getElementById('highT').innerHTML = weatherInfo.current_observation.temp_f;
  document.getElementById('windS').innerHTML = weatherInfo.current_observation.wind_mph;
  document.getElementById('precipitation').innerHTML = weatherInfo.current_observation.precip_1hr_in;
  document.getElementById('windchill').innerHTML = weatherInfo.current_observation.windchill_f;

var iconOrig = franklinWeather.current_observation.icon_url;
    var iconReplace = iconOrig.replace("http", "https");
    document.getElementById('current-weather-icon').src = iconReplace;
}
