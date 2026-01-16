const imagesCard = document.querySelector(".images-card");
const photoTitle = document.querySelector(".photo-title");
const modal = document.getElementById("photoModal");
const modalImg = modal.querySelector(".modal-image");
const modalDesc = modal.querySelector(".modal-description");
const modalAuthor = modal.querySelector(".modal-author");
const modalLikes = modal.querySelector(".modal-likes");
const modalLink = modal.querySelector(".modal-link");

export function renderCityPhoto(data) {
  imagesCard.textContent = "";

  if (!data || data.length === 0) {
    imagesCard.classList.add("hidden");
    photoTitle.textContent = `No city photo found`;
    return;
  }

  photoTitle.textContent = `City photo gallery`;
  imagesCard.classList.remove("hidden");

  function openModal(photo) {
    modalImg.src = photo.urls.regular;
    modalImg.alt = photo.alt_description || "City photo";

    modalDesc.textContent = photo.description || photo.alt_description || "";

    modalAuthor.innerHTML = `Photo by 
      <a href="${photo.user.links.html}" target="_blank">
        ${photo.user.name}
      </a>`;

    modalLikes.textContent = ` ${photo.likes.toLocaleString()} likes`;
    modalLink.href = photo.links.html;

    modal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  }

  data.forEach((photo) => {
    const photoCard = document.createElement("div");
    photoCard.className = "photo-card";

    const img = document.createElement("img");
    img.src = photo.urls.small;
    img.alt = photo.alt_description || "City photo";
    img.loading = "lazy";

    img.addEventListener("click", () => openModal(photo));

    const author = document.createElement("small");
    const authorLink = document.createElement("a");

    authorLink.href = `${photo.user.links.html}`;
    authorLink.textContent = ` ${photo.user.name}`;
    authorLink.target = "_blank";

    author.appendChild(authorLink);

    photoCard.append(img, author);
    imagesCard.appendChild(photoCard);
  });
}
