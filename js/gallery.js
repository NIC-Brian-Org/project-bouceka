"use strict"

// reference of all images in gallery
const galleryImagesEl = document.querySelectorAll('.gallery__image');
// reference of the popup
const popupEl = document.getElementById('popup');
// reference of the close button in popup
const closeButtonEl = document.querySelector('.popup__close');
// reference of the box in the popup
const popupContentEl = document.querySelector('.popup__content');
// reference of the image in the popup
const popupImageEl = document.querySelector('.popup__img');
// reference of the title in the popup
const popupTitleEl = document.querySelector('.popup h2');


// add a listener for every gallery image that occurs on the page with class '.gallery__image'
galleryImagesEl.forEach((imageEl) => {
  imageEl.addEventListener('click', (event) => {
		// we set the source of the image in popup
    popupImageEl.src = event.target.src;
		// we set the alt of the image in popup
    popupImageEl.alt = event.target.alt;
		// we set the title of the image in popup
    popupTitleEl.innerHTML = event.target.alt;
		// we display the popup by adding class that changes visibility
    popupEl.classList.add('active');
  });
});

// if a user clicks on the X button it closes the popup
closeButtonEl.addEventListener('click', (event) => {
  popupEl.classList.remove('active');
});

// when the popup appears, set a listener
popupEl.addEventListener('click', (event) => {
	// store boolean if a user clicks on the popup
  const isClickInside = popupContentEl.contains(event.target);

	// if the user clicks out of the popup it closes the popup
  if (!isClickInside) {
    popupEl.classList.remove('active');
  }
});
