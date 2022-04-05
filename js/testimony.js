class Testimony {
  constructor(author, description, date) {
    this.author = author;
    this.description = description;
    this.date = date;
  }
}
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

const testimonialContent = document.querySelector('.testimonial__content');
const testimonialAuthor = document.querySelector('.testimonial__author');
const dots = document.getElementsByClassName('dot');

let currentIndex = 0;

const changeSlide = (nextIndex) => {
  displaySlide((currentIndex += nextIndex));
};

const displaySlide = (index) => {
  if (index > testimonySlides.length - 1) {
    currentIndex = 0;
  }

  if (index < 0) {
    currentIndex = testimonySlides.length - 1;
  }
  testimonialContent.innerHTML = testimonySlides[currentIndex].description;
  testimonialAuthor.innerHTML = `${testimonySlides[currentIndex].author}, ${testimonySlides[currentIndex].date}`;
  changeDotsClass();
};

const changeDotsClass = () => {
  for (let index = 0; index < dots.length; index++) {
    const currentDot = dots[index];
    if (index == currentIndex) {
      currentDot.className += ' active';
      console.log(currentDot.className);
    } else {
      currentDot.className = currentDot.className.replace(' active', '');
    }
  }
};

const previousButton = document.querySelector('#previous-button');
const nextButton = document.querySelector('#next-button');

previousButton.addEventListener('click', () => {
  changeSlide(-1);
});

nextButton.addEventListener('click', () => {
  changeSlide(1);
});

displaySlide(currentIndex);
