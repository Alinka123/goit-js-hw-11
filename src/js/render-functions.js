import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';


const galleryContainer = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const lightbox = new SimpleLightbox('.gallery a');


function imageTemplate({ largeImageURL, webformatURL, tags, likes, views, comments, downloads }) {
  return `
    <li class="gallery-item">
      <a href="${largeImageURL}">
        <img src="${webformatURL}" alt="${tags}" loading="lazy" />
      </a>
      <div class="image-info">
        <p> Likes ${likes}</p>
        <p> Views ${views}</p>
        <p> Comments ${comments}</p>
        <p> Downloads ${downloads}</p>
      </div>
    </li>
  `;
}

function galleryTemplate(images) {
  return images.map(imageTemplate).join('\n');
}

export function createGallery(images) {
  const markup = galleryTemplate(images);
  galleryContainer.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

export function clearGallery() {
  galleryContainer.innerHTML = '';
}


export function showLoader() {
  loader.classList.remove('hidden');
}

export function hideLoader() {
  loader.classList.add('hidden');
}

