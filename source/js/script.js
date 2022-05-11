const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');
const catContainer = document.querySelector('.living-example__slider-container');
const catToggle = document.querySelector('.living-example__slider-button');

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

catToggle.addEventListener('click', function() {
  if (catContainer.classList.contains('living-example__slider-container--before')) {
    catContainer.classList.remove('living-example__slider-container--before');
    catContainer.classList.add('living-example__slider-container--after');
    document.getElementById("catImage").src="img/after-mobile.png";
    document.getElementById("catImage").srcset="img/after-mobile@2x.png";
  } else {
    catContainer.classList.add('living-example__slider-container--before');
    catContainer.classList.remove('living-example__slider-container--after');
    document.getElementById("catImage").src="img/before-mobile.png";
    document.getElementById("catImage").srcset="img/before-mobile@2x.png";
  }
});
