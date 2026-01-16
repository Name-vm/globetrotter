const historyBtn = document.getElementById("historyBtn");
const clearHistoryBtn = document.getElementById("clearHistory");
const historyModal = document.getElementById("historyModal");
const historyClose = document.getElementById("historyClose");
const historyList = document.getElementById("historyList");
const historyOverlay = historyModal.querySelector(".modal-overlay");
const searchInput = document.querySelector(".search-input");
const searchForm = document.querySelector(".search-form");

export function renderHistory() {
  const history = JSON.parse(localStorage.getItem("cityHistory")) || [];

  historyList.textContent = "";

  if (history.length === 0) {
    const noHistory = document.createElement("p");
    noHistory.textContent = `No search history yet `;
    historyList.append(noHistory);
    return;
  }

  history.forEach((item) => {
    const li = document.createElement("li");

    const city = document.createElement("span");
    city.textContent = item.city;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = `Delete city`;
    deleteBtn.classList.add("close-button");

    city.addEventListener("click", () => {
      searchInput.value = item.city;
      searchForm.dispatchEvent(new Event("submit"));
      closeHistoryModal();
    });

    deleteBtn.addEventListener("click", () => {
      const updated = history.filter((h) => h.city !== item.city);
      localStorage.setItem("cityHistory", JSON.stringify(updated));
      renderHistory();
    });

    li.append(city, deleteBtn);
    historyList.appendChild(li);
  });
}

export function saveHistory(city) {
  const history = JSON.parse(localStorage.getItem("cityHistory")) || [];

  const filtered = history.filter(
    (item) => item?.city?.toLowerCase() !== city.toLowerCase()
  );

  filtered.unshift({ city, timestamp: Date.now() });

  const latest = filtered.slice(0, 10);

  localStorage.setItem("cityHistory", JSON.stringify(latest));
}

export function closeHistoryModal() {
  historyModal.classList.add("hidden");
  document.body.style.overflow = "";
}

export function initHistory() {
  historyBtn.addEventListener("click", () => {
    renderHistory();
    historyModal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  });

  historyClose.addEventListener("click", closeHistoryModal);

  historyOverlay.addEventListener("click", closeHistoryModal);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !historyModal.classList.contains("hidden")) {
      closeHistoryModal();
    }
  });

  clearHistoryBtn.addEventListener("click", () => {
    localStorage.removeItem("cityHistory");
    renderHistory();
  });
}
