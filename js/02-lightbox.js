import { galleryItems } from './gallery-items.js';
// Change code below this line

let imagesHtml = "";

galleryItems.forEach(function(element){
  let item = `
  <a class="gallery__item" href="${element.original}">
  <img class="gallery__image" src="${element.preview}" alt="${element.description}" />
</a>`;
imagesHtml += item;

});
const galleryEl = document.querySelector(".gallery")
galleryEl.insertAdjacentHTML("beforeend", imagesHtml);



galleryEl.addEventListener("click", handleClick)
function handleClick(evt){
    evt.preventDefault();
    const url = evt.target.dataset.source;
    
}
var lightbox = new SimpleLightbox('.gallery a', {
    'captionsData': 'alt',
    'captionDelay': 250
});
