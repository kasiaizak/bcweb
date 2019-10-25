"use strict";

// hamburger menu
const contentSwitcher = document.querySelector('.button__menu--js');

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


// show content essence

const showOffer = document.querySelector('.menu__item--offer-js');
const showArticles = document.querySelector('.menu__item--articles-js');
const showContact = document.querySelector('.menu__item--contact-js');
const offer = document.querySelector('.offer--js');
const articles = document.querySelector('.articles--js');
const contact = document.querySelector('.offer--js');

showOffer.addEventListener('click', (e) => {
  offer.classList.toggle('offer--visible');
  if (articles.classList.contains('articles--visible')) {
    articles.classList.remove('articles--visible');
  }
  if (contact.classList.contains('contact--visible')) {
    contact.classList.remove('contact--visible');
  }
});

showArticles.addEventListener('click', (e) => {
  articles.classList.toggle('articles--visible');
  if (offer.classList.contains('offer--visible')) {
    offer.classList.remove('offer--visible');
  }
  if (contact.classList.contains('contact--visible')) {
    contact.classList.remove('contact--visible');
  }
});

showContact.addEventListener('click', (e) => {
  contact.classList.toggle('contact--visible');
  if (offer.classList.contains('offer--visible')) {
    offer.classList.remove('offer--visible');
  }
  if (articles.classList.contains('articles--visible')) {
    articles.classList.remove('articles--visible');
  }
});

