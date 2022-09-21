import { galleryItems } from "./gallery-items.js";

const galleryContainer = document.querySelector(".gallery");

function createMarkupGalleryPictures(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>`;
    })
    .join("");
}

const galleryMarkup = createMarkupGalleryPictures(galleryItems);
galleryContainer.insertAdjacentHTML("afterbegin", galleryMarkup);

const imgEl = document.querySelector(".gallery__image");

var lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
