const themeToggle = document.getElementById("themeToggle");
const themeLabel = document.getElementById("themeLabel");

const sunIcon = document.getElementById("sunIcon");
const moonIcon = document.getElementById("moonIcon");

export function updateThemeIcons(theme) {
  if (theme === "dark") {
    sunIcon.classList.remove("hidden");
    moonIcon.classList.add("hidden");
    themeLabel.textContent = "Light";
  } else {
    sunIcon.classList.add("hidden");
    moonIcon.classList.remove("hidden");
    themeLabel.textContent = "Dark";
  }
}

const savedTheme = localStorage.getItem("theme") || "light";
document.body.dataset.theme = savedTheme;
updateThemeIcons(savedTheme);

themeToggle.addEventListener("click", () => {
  const nextTheme = document.body.dataset.theme === "dark" ? "light" : "dark";
  document.body.dataset.theme = nextTheme;
  localStorage.setItem("theme", nextTheme);
  updateThemeIcons(nextTheme);
});
