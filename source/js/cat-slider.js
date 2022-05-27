const catContainer = document.querySelector('.living-example__slider-container');
const catToggle = document.querySelector('.living-example__slider-button');
const catToggleBefore = document.querySelector('.living-example__slider-text--before');
const catToggleAfter = document.querySelector('.living-example__slider-text--after');

catToggleBefore.addEventListener('click', function() {
  catContainer.classList.add('living-example__slider-container--before');
  catContainer.classList.remove('living-example__slider-container--after');
  document.getElementById("catImage").src="img/before-mobile.webp";
  document.getElementById("catImage").srcset="img/before-mobile@2x.webp";
});

catToggleAfter.addEventListener('click', function() {
  catContainer.classList.remove('living-example__slider-container--before');
  catContainer.classList.add('living-example__slider-container--after');
  document.getElementById("catImage").src="img/after-mobile.webp";
  document.getElementById("catImage").srcset="img/after-mobile@2x.webp";
});

// catToggle.addEventListener('click', function() {
//   if (catContainer.classList.contains('living-example__slider-container--before')) {
//     catContainer.classList.remove('living-example__slider-container--before');
//     catContainer.classList.add('living-example__slider-container--after');
//     document.getElementById("catImage").src="img/after-mobile.webp";
//     document.getElementById("catImage").srcset="img/after-mobile@2x.webp";
//   } else {
//     catContainer.classList.add('living-example__slider-container--before');
//     catContainer.classList.remove('living-example__slider-container--after');
//     document.getElementById("catImage").src="img/before-mobile.webp";
//     document.getElementById("catImage").srcset="img/before-mobile@2x.webp";
//   }
// });
