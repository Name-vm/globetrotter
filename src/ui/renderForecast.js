import { roundNum } from "../utils/helpers.js";

const forecastCard = document.querySelector(".forecast-card");
const forecastTitle = document.querySelector(".forecast-title");

export function renderWeatherForecast(data, cityName) {
  forecastTitle.textContent = `5-Day Forecast - ${cityName}`;

  forecastCard.textContent = "";

  const days = {};

  data.list.forEach((item) => {
    const date = item.dt_txt.split(" ")[0];
    if (!days[date]) days[date] = [];
    days[date].push(item);
  });

  Object.entries(days).forEach(([date, items]) => {
    const dayBlock = document.createElement("div");
    dayBlock.classList.add("day-block");

    const dayTitle = document.createElement("h3");
    dayTitle.textContent = new Date(date).toLocaleDateString("en-GB", {
      weekday: "long",
      day: "numeric",
      month: "short",
    });

    const hourRow = document.createElement("div");
    hourRow.classList.add("hour-row");

    items.forEach((item) => {
      const forecastItem = document.createElement("div");
      const time = document.createElement("p");
      const desc = document.createElement("p");
      const temp = document.createElement("p");
      const precipitation = document.createElement("p");
      const humidity = document.createElement("p");
      const wind = document.createElement("p");
      const iconCode = item.weather[0].icon;
      const iconImg = document.createElement("img");
      const weatherType = item.weather[0].main.toLowerCase();

      forecastItem.classList.add("forecast-item");
      forecastItem.classList.add(`weather-${weatherType}`);
      iconImg.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
      iconImg.alt = "Weather icon";
      iconImg.width = 60;
      desc.textContent = item.weather[0].description;
      desc.style.textTransform = "capitalize";
      precipitation.title = `Chance of rain / snow`;
      precipitation.textContent = `Preciption: ${roundNum(item.pop * 100)} % `;
      time.textContent = new Date(item.dt_txt).toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
      });
      temp.textContent = `Temperature: ${roundNum(
        item.main.temp
      )} °C (Feels like: ${roundNum(item.main.feels_like)} °C)`;
      wind.textContent = `Wind speed: ${item.wind.speed} m/s`;
      humidity.textContent = `Humidity: ${item.main.humidity} %`;
      humidity.title = "Air humidity";
      forecastItem.append(
        time,
        iconImg,
        temp,
        humidity,
        desc,
        precipitation,
        wind
      );
      hourRow.appendChild(forecastItem);
    });
    dayBlock.append(dayTitle, hourRow);

    forecastCard.append(dayBlock);
  });
}
