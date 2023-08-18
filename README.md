# Weather Checking Site

The site is a simple but detailed oriented weather service that provides **weather** information, like temperature *(minimum and maximum)*, weather decription and wind directions as well as it's speed.

---

## Details of the site

Languages used for the building is HTML, CSS and JavaScript.

In the Javascript that is where the most of the work was including fetching the API and using it.

### HTML

The HTML was simple only the input text to type the city you want to check the weather for.

```HTML
<div>
    <input type="text" id="searchbox">
    <h2 id="city"></h2>
    <h1 id="temp"></h1>
    <span id="min_max_temp"></span>
    <h4 id="weather"></h4>
    <p id="weather_desc"></p>
    <span id="wind_dir_speed"></span>
    </div>
```
### CSS

Actually not much were made in the css only aligning text to the center of the page and background color.

```css
body{
  background-color: rgb(197, 192, 192);
  font-family: 'Merriweather', serif;
  text-align: center;
}
```

### JavaScript

In JavaScript is where there was much work done including fetching using the api from [Open Weather](http://openweathermap.org).

``` JavaScript
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
```
---
### Author

This site was designed by [Maxime Bakunzi](http://github.com/Maxime-Bakunzi).
