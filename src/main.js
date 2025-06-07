import { createGalleryCardTemplate } from './js/render-functions';
import { fetchPhotosByQuery } from './js/pixabay-api';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";



const refs = {
    searchForm: document.querySelector('.js-search-form'),
    gallery: document.querySelector('.js-gallery'),
    loader: document.querySelector('.js-loader'),
};
  
const onSearchFormSubmit = event => {
    event.preventDefault();
  
    const { target: searchForm } = event;
  
    const searchedQuery = searchForm.elements.user_query.value;
  
    refs.loader.classList.add('active');
  
    refs.gallery.innerHTML = '';
  
    fetchPhotosByQuery(searchedQuery)
      .finally(() => {
        refs.loader.classList.remove('active');
      })
        .then(data => {
        if (!searchedQuery.trim()) {
            return;
        }
        if (data.total === 0) {
            iziToast.error({
                title: 'Error',
                message: 'Sorry, there are no images matching your search query. Please try again!',
            });
  
          refs.gallery.innerHTML = '';
  
          return;
        }
  
        const galleryCardsTemplate = data.hits.map(pictureInfo => createGalleryCardTemplate(pictureInfo)).join('');
  
        refs.gallery.innerHTML = galleryCardsTemplate;
        
        const lightbox = new SimpleLightbox('.js-gallery a');
        lightbox.refresh();
      })
      .catch(err => {
        console.log(err);
      });
  };
  
  refs.searchForm.addEventListener('submit', onSearchFormSubmit);