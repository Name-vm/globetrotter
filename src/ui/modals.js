const modal = document.getElementById("photoModal");
const modalImg = modal.querySelector(".modal-image");

const modalClose = modal.querySelector(".modal-close");
const modalOverlay = modal.querySelector(".modal-overlay");

export function initModalEvents() {
  modalClose.addEventListener("click", closeModal);
  modalOverlay.addEventListener("click", closeModal);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
      closeModal();
    }
  });
}

export function closeModal() {
  modal.classList.add("hidden");
  modalImg.src = "";
  document.body.style.overflow = "";
}
