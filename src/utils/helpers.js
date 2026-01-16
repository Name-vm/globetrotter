const searchButton = document.querySelector(".search-button");
const searchForm = document.querySelector(".search-form");
const spinner = document.getElementById("spinner");
const cityCard = document.querySelector(".city-card");
const imagesCard = document.querySelector(".images-card");
const errorCard = document.getElementById("errorCard");
const contentCard = document.querySelector(".content-card");
const forecastCard = document.querySelector(".forecast-card");
const forecastSection = document.querySelector(".forecast-section");

const emptyState = document.getElementById("emptyState");

export function roundNum(num) {
  return Math.round(num);
}

export function getLocalTime(timezone) {
  const nowUtc = Date.now() + new Date().getTimezoneOffset() * 60000;
  return new Date(nowUtc + timezone * 1000).toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function formatTime(unixTime, timezone) {
  return new Date((unixTime + timezone) * 1000).toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function setLoading(state) {
  searchForm.classList.toggle("loading", state);
  searchButton.disabled = state;
}

export function setSpinner(state) {
  if (state) {
    spinner.classList.remove("hidden");
  } else {
    spinner.classList.add("hidden");
  }
}

export function showError(message) {
  errorCard.textContent = `Error: ${message} `;
  errorCard.classList.remove("hidden");

  cityCard.classList.add("hidden");
  imagesCard.classList.add("hidden");
  forecastCard.classList.add("hidden");
}

export function clearError() {
  errorCard.textContent = "";
  errorCard.classList.add("hidden");
}

export function showContent() {
  contentCard.classList.remove("hidden");
  cityCard.classList.remove("hidden");
  if (imagesCard.children.length > 0) {
    imagesCard.classList.remove("hidden");
  }
  forecastSection.classList.remove("hidden");

  contentCard.classList.add("show");
  cityCard.classList.add("show");
  forecastSection.classList.add("show");
  if (imagesCard.children.length > 0) imagesCard.classList.add("show");
}

export function hideContent() {
  contentCard.classList.add("hidden");
  cityCard.classList.add("hidden");
  forecastSection.classList.add("hidden");
  imagesCard.classList.add("hidden");
  emptyState.classList.add("hidden");
}
