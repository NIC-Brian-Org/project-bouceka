"use strict"

// reference of the navigation icon
const btnNavEl = document.getElementById('nav-icon');
// reference of the navigation list
const headerEl = document.getElementsByClassName('collapsed-menu');

// set event listener that checks whether the user clicks of hamburger menu
btnNavEl.addEventListener('click', function () {
  if (headerEl[0].classList[1] === 'no-active') {
		// open the navigation
    headerEl[0].classList.add('is-active');
    headerEl[0].classList.remove('no-active');
    btnNavEl.classList.add('open');
  } else {
		// close the navigation
    headerEl[0].classList.remove('is-active');
    btnNavEl.classList.remove('open');
    headerEl[0].classList.add('no-active');
  }
});
