var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var close = document.querySelector('.modal__button');
var modal = document.querySelector('.modal--mistake');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

if (close) {
  close.addEventListener('click', function (evt) {
    evt.preventDefault();
    modal.classList.remove('modal--active');
  });
};
