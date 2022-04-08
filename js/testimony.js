'use strict';

// class that describes one testimony with particular properties
class Testimony {
  constructor(author, description, date) {
    this.author = author;
    this.description = description;
    this.date = date;
  }
}

// Mock data from Google in shape Testimony
const testimonySlides = [
  new Testimony(
    'Mia Watkins',
    'Have been here a couple times and I absolutely loved my lunch today! I think this might have been a daily special? If it is I would love to see it on the regular menu!',
    2022
  ),
  new Testimony(
    'Justine Flynn',
    'Traveled in from the lower mainland for an event. Such friendly service. Loved the live music playing when I came in for lunch. The fried chicken Benny was perfect to the last bite. Would highly recommend.',
    2021
  ),
  new Testimony(
    'Munro Stuff',
    'Sweet little space with quirky decor and lovely staff. Coffee was pricey but very high quality and worth it. Eggs benny were delish. Great find, highly recommended.',
    2021
  ),
];
// reference of the content in the testimony box
const testimonialContent = document.querySelector('.testimonial__content');
// reference of the author in the testimony box
const testimonialAuthor = document.querySelector('.testimonial__author');
// reference of the dots bellow the testimony box
const dots = document.getElementsByClassName('dot');

// keep index of the current index of the testimony
let currentIndex = 0;

// function that adds index and calls displaySlide
const changeSlide = (nextIndex) => {
  displaySlide((currentIndex += nextIndex));
};

// change current index of the current testimony
const displaySlide = (index) => {
  // if the next index is greater than the length of the array of our testimonies, we set 0 -> goes at the beginning
  if (index > testimonySlides.length - 1) {
    currentIndex = 0;
  }

  // if the next index is smaller than the 0, we set the length of the array -> goes at the end
  if (index < 0) {
    currentIndex = testimonySlides.length - 1;
  }
  // we set the content of the testimony in the testimony box
  testimonialContent.innerHTML = testimonySlides[currentIndex].description;
  // we set the author of the testimony in the testimony box
  testimonialAuthor.innerHTML = `${testimonySlides[currentIndex].author}, ${testimonySlides[currentIndex].date}`;
  // we set correct location in dots
  changeDotsClass();
};

// void function that changes background color of the dots
const changeDotsClass = () => {
  for (let index = 0; index < dots.length; index++) {
    const currentDot = dots[index];
    // check the current location of the testimony -> it sets dark background color and remove the class form the rest
    if (index == currentIndex) {
      currentDot.className += ' active';
    } else {
      currentDot.className = currentDot.className.replace(' active', '');
    }
  }
};

// reference of the previous button of the testimony
const previousButton = document.querySelector('#previous-button');
// reference of the next button of the testimony
const nextButton = document.querySelector('#next-button');

// listener that changes location of the testimony
previousButton.addEventListener('click', () => {
  changeSlide(-1);
});

// listener that changes location of the testimony
nextButton.addEventListener('click', () => {
  changeSlide(1);
});

// first initialization we set dot location
displaySlide(currentIndex);
