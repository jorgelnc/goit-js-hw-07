import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const gallery = document.querySelector(".gallery");

let newGallery = galleryItems.map((item) => {
    const li = `<li class="gallery__item">
    <a class="gallery__link" href="${item.original}">
        <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
        />
    </a>
</li>`;
    return li;
  })
  .join("");

gallery.innerHTML = newGallery;

gallery.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.nodeName !== "IMG") {
        return;
    }
    
    let instance = basicLightbox.create(`<img src="${e.target.src}" alt="${e.target.alt}"/>`);
    instance.show();

    document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
    instance.close();
    }
    });
});
