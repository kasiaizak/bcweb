"use strict";

// hamburger menu
const contentSwitcher = document.querySelector('.button__menu--js')

contentSwitcher.addEventListener('click', (e) => {
  const main = document.querySelector('.main--js');
  const logo = document.querySelector('.navbar__item--logo-js');
  const header = document.querySelector('.header--js');
  const content = document.querySelector('.content--js');

  main.classList.toggle('main--change-color')
  logo.classList.toggle('navbar__item--logo-change-color');
  header.classList.toggle('header--hide');

  content.classList.toggle('content--visible');
  if (content.classList.contains('content--visible')) {
    contentSwitcher.innerHTML = '<i class="fas fa-times"></i>';
  } else {
    contentSwitcher.innerHTML = '<i class="fas fa-bars"></i>';
  }
});