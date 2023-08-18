var searchValue = document.querySelector('#searchbox');
searchValue.addEventListener('keypress', setfunc);

function setfunc(e) {
  if (e.keyCode === 13) {
    getData(searchValue.value);
  }
}

function getData(value) {
  fetch(
    'https://api.openweathermap.org/data/2.5/weather?q='+value+'&appid=8a3321f62a5d212a06046dc465852dd2')
  .then(function(response) {
    return response.json();
  })
  .then(function(weather) {
    document.querySelector('#city').innerHTML = weather.name;
    document.querySelector('#temp').innerHTML = weather.main.temp;
    document.querySelector('#weather').innerHTML = weather.weather[0].main;
    document.querySelector('#min_max_temp').innerHTML = "Min. "+weather.main.temp_min+" / Max. "+weather.main.temp_max;
    document.querySelector('#weather_desc').innerHTML = weather.weather[0].description;
    document.querySelector('#wind_dir_speed').innerHTML = "Wind directuion: " + weather.wind.deg+"/ Wind speed "+weather.wind.speed;
  })
  .catch(function (err) {
    console.log(err);
  });

}


