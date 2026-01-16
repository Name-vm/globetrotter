import { getLocalTime, roundNum } from "../utils/helpers.js";

const cityCard = document.querySelector(".city-card");

export function renderCity(data, forecastData) {
  const {
    name: { common },
    capital,
    area,
    region,
    subregion,
    languages,
    population,
    flags,
    currencies,
  } = data;

  cityCard.textContent = "";

  const flag = document.createElement("img");
  const cityTitle = document.createElement("h2");

  const localTime = document.createElement("p");
  const capitalDisplay = document.createElement("p");

  const regionDisplay = document.createElement("p");

  const populationDisplay = document.createElement("p");
  const totalArea = document.createElement("p");

  const languagesDisplay = document.createElement("p");
  const currenciesDisplay = document.createElement("p");

  const firstLanguage = languages ? Object.values(languages)[0] : "N/A";
  const currency = currencies
    ? Object.values(currencies)[0]
    : { name: "N/A", symbol: "" };

  flag.src = flags.svg;
  flag.loading = "lazy";
  flag.alt = `${common} flag`;

  cityTitle.textContent = `City: ${forecastData.city.name} | Country: ${common}`;
  localTime.textContent = `Local time: ${getLocalTime(
    forecastData.city.timezone
  )}`;

  capitalDisplay.textContent = `Capital: ${capital?.[0] || "N/A"}`;
  regionDisplay.textContent = `Region: ${region} | Subregion: ${subregion}`;

  populationDisplay.textContent = `Population: ${population.toLocaleString()}`;
  totalArea.textContent = `Area: ${roundNum(area).toLocaleString()} km²`;

  languagesDisplay.textContent = `Main language: ${firstLanguage}`;

  currenciesDisplay.textContent = `Main currency: ${currency.name} (${currency.symbol})`;

  cityCard.append(
    flag,
    cityTitle,
    localTime,
    capitalDisplay,
    regionDisplay,
    populationDisplay,
    totalArea,
    languagesDisplay,
    currenciesDisplay
  );
}
