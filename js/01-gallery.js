import { galleryItems } from './gallery-items.js';
// Change code below this line



let imagesHtml = "";

galleryItems.forEach(function(element){
  let item = `<div class="gallery__item">
  <a class="gallery__link" href="${element.original}">
    <img
      class="gallery__image"
      src="${element.preview}"
      data-source="${element.original}"
      alt="${element.description}"
    />
  </a>
</div>`;
imagesHtml += item;

});
const galleryEl = document.querySelector(".gallery")
galleryEl.insertAdjacentHTML("beforeend", imagesHtml);



galleryEl.addEventListener("click", handleClick)
function handleClick(evt){
    evt.preventDefault();
    const url = evt.target.dataset.source;
    basicLightbox.create(`
		<img width="1400" height="900" src="${url}">
	`).show()
    
}


