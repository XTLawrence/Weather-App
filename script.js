const API_KEY = "7957607fd230db06daf8ce971379d37e";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?"

const temperature = document.querySelector(".temp")
const cityName = document.querySelector(".city")
const wind = document.querySelector(".wind")
const humidity = document.querySelector(".humidity")
const inputSearch = document.querySelector(".search-input")
const searchBtn = document.querySelector(".search-btn")
const weatherIcon = document.querySelector(".weather-icon")
const weather = document.querySelector(".weather")
const error = document.querySelector(".error")


async function fetchData(city) {

  const response = await fetch(`${apiURL}q=${city}&appid=${API_KEY}`)
  const data = await response.json()
  console.log(data)

  if (response.status == 404) {

    error.style.display = "block"
    weather.style.display = "none"
  } else {
    temperature.innerHTML = Math.round((data.main.temp - 273.15).toFixed(1)) + "°c"
    cityName.innerHTML = data.name
    humidity.innerHTML = (data.main.humidity + "%")
    wind.innerHTML = (data.wind.speed + "km/h")

    if (data.weather[0].main == "Clear") {
      weatherIcon.src = "./images/clear.png"
    } else if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "./images/clouds.png"
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "./images/rain.png"
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "./images/drizzle.png"
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "./images/mist.png"
    }

    error.style.display = "none"
    weather.style.display = "block"
  }

}

searchBtn.addEventListener("click", () => {
  const city = inputSearch.value
  fetchData(city)
})