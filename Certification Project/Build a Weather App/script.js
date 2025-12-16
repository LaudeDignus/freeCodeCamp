const btnWeather = document.getElementById("get-weather-btn");
const selectWeather = document.getElementById("select-weather");
const mainTemperature = document.getElementById("main-temperature");
const feelsLike = document.getElementById("feels-like");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const windGust = document.getElementById("wind-gust");
const weatherMain = document.getElementById("weather-main");
const city = document.getElementById("location");
const getWeatherBtn = document.getElementById("get-weather-btn");
const citySelect = document.querySelector("#city-select");
const weatherIcon = document.getElementById("weather-icon");

btnWeather.addEventListener("click", () => {
  const city = selectWeather.value;
  if (city !== "") {
    showWeather(city);
  }
});

async function getWeather(city) {
  try {
    const response = await fetch(
      `https://weather-proxy.freecodecamp.rocks/api/city/${city}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return undefined;
  }
}

async function showWeather(cityName) {
  const data = await getWeather(cityName);

  if (!data) {
    alert("Something went wrong, please try again later");
    return;
  }

  weatherIcon.src = data?.weather?.[0]?.icon ?? "";

  mainTemperature.textContent = data?.main?.temp ?? "N/A";

  feelsLike.textContent = data?.main?.feels_like ?? "N/A";

  humidity.textContent = data?.main?.humidity ?? "N/A";

  wind.textContent = data?.wind?.speed ?? "N/A";

  windGust.textContent = data?.wind?.gust ?? "N/A";

  weatherMain.textContent = data?.weather?.[0]?.main ?? "N/A";

  city.textContent = data?.name ?? "N/A";
}
