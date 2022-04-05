const galleryImagesEl = document.querySelectorAll('.gallery__image');
const popupEl = document.getElementById('popup');
const closeButtonEl = document.querySelector('.popup__close');
const closeContentEl = document.querySelector('.popup__content');
const popupImageEl = document.querySelector('.popup__img');
const popupTitleEl = document.querySelector('.popup h2');

galleryImagesEl.forEach((imageEl) => {
  imageEl.addEventListener('click', (event) => {
    popupImageEl.src = event.target.src;
    popupImageEl.alt = event.target.alt;
    popupTitleEl.innerHTML = event.target.alt;
    popupEl.classList.add('active');
  });
});

closeButtonEl.addEventListener('click', (event) => {
  popupEl.classList.remove('active');
});

popupEl.addEventListener('click', (event) => {
  const isClickInside = closeContentEl.contains(event.target);

  if (!isClickInside) {
    popupEl.classList.remove('active');
  }
});
