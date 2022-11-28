function formatDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let currentDay = days[date.getDay()];
  let hours = date.getHours();
  hours = ("0" + date.getHours()).slice(-2);
  let minutes = date.getMinutes();
  minutes = ("0" + date.getMinutes()).slice(-2);

  let formattedDate = `${currentDay} ${hours}:${minutes}`;
  return formattedDate;
}
let now = new Date();

let p = document.querySelector("p");
p.innerHTML = formatDate(now);

function search(event) {
  event.preventDefault();

  let searchCity = document.querySelector("#city-input");
  let city = document.querySelector(".city").value;
  getCityTemp(city);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

function getCityTemp(city) {
  let unit = "metric";
  let apiKey = "515c9ddbeb3cda9061acfab71031839e";
  let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather?q=";
  let apiUrl = `${apiEndpoint}${city}&appid=${apiKey}&units=${unit}`;
  axios.get(apiUrl).then(showCityTemp);
}

function showCityTemp(response) {
  let searchCityTemp = Math.round(response.data.main.temp);
  let currentTemp = document.querySelector("#current-temp");
  currentTemp.innerHTML = `${searchCityTemp}°C`;
  let currentCity = document.querySelector("#city");
  currentCity.innerHTML = response.data.name;
}
