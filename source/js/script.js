const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');
const catContainer = document.querySelector('.living-example__slider-container');
const catToggle = document.querySelector('.living-example__slider-button');
const catToggleBefore = document.querySelector('.living-example__slider-text--before');
const catToggleAfter = document.querySelector('.living-example__slider-text--after');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});
