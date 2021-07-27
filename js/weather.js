const API_KEY = "82fcd4e63014b647fadd9c61d97243f7";

function onGeoSuccess(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
  fetch(url).then(res => res.json())
    .then(data => {
      const city = document.querySelector("#weather span:first-child")
      const weather = document.querySelector("#weather span:last-child")
      city.innerHTML = data.name;
      weather.innerHTML = `${data.weather[0].main} ${data.main.temp}℃`;
    });

}
function onGeoError() {
  alert("Can't find your location. Please allow to locate you.");
}



navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
//api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=82fcd4e63014b647fadd9c61d97243f7