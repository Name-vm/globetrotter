import "../src/style.css";

import {
  showError,
  clearError,
  setSpinner,
  hideContent,
  showContent,
  setLoading,
} from "./utils/helpers.js";

import { getWeatherForecast } from "./api/weather.js";
import { getCountryData } from "./api/country.js";
import { getCityImages } from "./api/photos.js";

import { renderCity } from "./ui/renderCity.js";
import { renderWeatherForecast } from "./ui/renderForecast.js";
import { renderCityPhoto } from "./ui/renderPhotos.js";
import { initModalEvents } from "./ui/modals.js";

import { initHistory, saveHistory } from "./ui/history.js";
import { updateThemeIcons } from "./utils/theme.js";

const searchForm = document.querySelector(".search-form");
const searchInput = document.querySelector(".search-input");

const savedTheme = localStorage.getItem("theme") || "light";
document.body.dataset.theme = savedTheme;
updateThemeIcons(savedTheme);

initModalEvents();
initHistory();

searchForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const city = searchInput.value.trim();

  if (!city) return;

  hideContent();
  clearError();
  setSpinner(true);
  try {
    setLoading(true);

    const forecastData = await getWeatherForecast(city);
    const countryData = await getCountryData(forecastData.city.country);
    const photoData = await getCityImages(city);

    renderCity(countryData[0], forecastData);
    renderCityPhoto(photoData.results);
    renderWeatherForecast(forecastData, city);

    saveHistory(city);
    searchInput.value = "";

    showContent();

    console.log(forecastData);

    console.log(countryData);
    console.log(photoData);
  } catch (error) {
    console.error(error);
    showError(error.message);
  } finally {
    setLoading(false);
    setSpinner(false);
  }
});
