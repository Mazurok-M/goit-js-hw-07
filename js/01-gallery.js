import { galleryItems } from "./gallery-items.js";

const galleryContainer = document.querySelector(".gallery");

function createMarkupGalleryPictures(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>`;
    })
    .join("");
}

const galleryMarkup = createMarkupGalleryPictures(galleryItems);
galleryContainer.insertAdjacentHTML("afterbegin", galleryMarkup);

galleryContainer.addEventListener("click", ongalleryContainerClick);

let currentTargetModal = null;

function ongalleryContainerClick(event) {
  if (event.target === event.currentTarget) {
    return;
  }
  event.preventDefault();

  const instance = basicLightbox.create(
    `
    <img src="${event.target.dataset.source}" width="1280" height="850">
`,
    {
      onShow: () => window.addEventListener("keydown", escapeClose),
      onClose: () => window.removeEventListener("keydown", escapeClose),
    }
  );
  currentTargetModal = instance;
  instance.show();
}

function escapeClose(event) {
  if (event.code === "Escape") {
    currentTargetModal.close();
  }
}
