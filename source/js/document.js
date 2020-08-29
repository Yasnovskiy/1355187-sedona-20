var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var close_btns = document.querySelectorAll('.modal__button');
var modal = document.querySelector('.modal--mistake');
var modal_success = document.querySelector('.modal--shipped');
var required_fields = document.querySelectorAll('.required');
var form_data = document.querySelector('.form');
var invalid_elements = document.querySelectorAll('.error');
var form_tel = document.querySelector('.form-tel');
var form_email = document.querySelector('.form-email');

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

if (form_data) {
  required_fields.forEach(function(item, i) {
    item.removeAttribute('required');
  });

  form_tel.removeAttribute('pattern');
  form_tel.removeAttribute('type');
  form_email.removeAttribute('pattern');
  form_email.removeAttribute('type');

  form_data.addEventListener('submit', function(evt) {
    var phone_pattern = /^\+?[0-9]\([0-9]{3}\)[0-9]{7}$/;
    var email_pattern = /\S+@\S+\.\S+/;
    evt.preventDefault();
    var flag = 0;
    required_fields.forEach(function(item, i) {
      if (item.value === '') {
        item.classList.add('error');
        flag = 1;
      }
    });
    if (!form_tel.value.match(phone_pattern)) {
      form_tel.classList.add('error');
      flag = 1;
    }

    if (!form_email.value.match(email_pattern)) {
      form_email.classList.add('error');
      flag = 1;
    }

    var invalid_elements = document.querySelectorAll('.error');
    if (invalid_elements) {
      invalid_elements.forEach(function(item, i) {
        item.addEventListener('focus', function() {
          item.classList.remove('error');
        });
      });
    }

    if (flag == 1) {
      modal.classList.add('modal--active');
    } else {
      modal_success.classList.add('modal--active');
      form_data.reset();
    }
  });
}

if (close_btns) {
  close_btns.forEach(function(item, i) {
    item.addEventListener('click', function(evt) {
      evt.preventDefault();
      item.parentElement.parentElement.parentElement.classList.remove('modal--active');
    });
  });
}
