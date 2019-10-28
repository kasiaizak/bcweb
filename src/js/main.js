"use strict";

// hamburger menu
const buttonMenu = document.querySelector('.button__menu--js');
const buttonSearch = document.querySelector('.button__search--js');
const content = document.querySelector('.content--js');
const searchBar = document.querySelector('.navbar__search--js');
const showHomepage = document.querySelector('.menu__item--homepage-js');

const menuOffer = document.querySelector('.menu__item--offer-js');
const menuArticles = document.querySelector('.menu__item--articles-js');
const menuContact = document.querySelector('.menu__item--contact-js');
const offer = document.querySelector('.offer--js');
const articles = document.querySelector('.articles--js');
const contact = document.querySelector('.contact--js');


const hideOffer = () => {
  offer.classList.remove('offer--visible');
  menuOffer.classList.remove('menu__item--open');
}

const hideArticles = () => {
  articles.classList.remove('articles--visible');
  menuArticles.classList.remove('menu__item--open');
}

const hideContact = () => {
  contact.classList.remove('contact--visible');
  menuContact.classList.remove('menu__item--open');
}

const buttonMenuSwitcher = () => {
  if (content.classList.contains('content--visible')) {
    searchBar.classList.remove('navbar__search--visible');
    buttonMenu.innerHTML = '<i class="fas fa-bars"></i>';
  } else {
    buttonMenu.innerHTML = '<i class="fas fa-times"></i>';
  }
}


// change visible content
const contentSwitcher = () => {
  const main = document.querySelector('.main--js');
  const navbar = document.querySelector('.navbar--js');
  const logo = document.querySelector('.navbar__item--logo-js');
  const header = document.querySelector('.header--js');

  main.classList.toggle('main--change-color');
  navbar.classList.toggle('navbar--add-background');
  logo.classList.toggle('navbar__item--logo-change-color');
  header.classList.toggle('header--hide');
  content.classList.toggle('content--visible');

  if (!content.classList.contains('content--visible')) {
    hideArticles();
    hideContact();
    hideOffer();
  }
}

buttonMenu.addEventListener('click', () => {
  buttonMenuSwitcher();
  contentSwitcher();
});

showHomepage.addEventListener('click', () => {
  buttonMenuSwitcher();
  contentSwitcher();
});


// show content essence

menuOffer.addEventListener('click', () => {
  menuOffer.classList.toggle('menu__item--open');
  offer.classList.toggle('offer--visible');
  if (articles.classList.contains('articles--visible')) {
    hideArticles()
  }
  if (contact.classList.contains('contact--visible')) {
    hideContact()
  }
});

menuArticles.addEventListener('click', () => {
  menuArticles.classList.toggle('menu__item--open');
  articles.classList.toggle('articles--visible');
  if (offer.classList.contains('offer--visible')) {
    hideOffer()
  }
  if (contact.classList.contains('contact--visible')) {
    hideContact()
  }
});

menuContact.addEventListener('click', () => {
  menuContact.classList.toggle('menu__item--open');
  contact.classList.toggle('contact--visible');
  if (offer.classList.contains('offer--visible')) {
    hideOffer()
  }
  if (articles.classList.contains('articles--visible')) {
    hideArticles()
  }
});


// search

buttonSearch.addEventListener('click', () => {
  if (content.classList.contains('content--visible')) {
    searchBar.classList.toggle('navbar__search--visible');
  } else {
    contentSwitcher();
    searchBar.classList.toggle('navbar__search--visible');
  }
});

$(function() {
  $('.navbar__search--js').on('input.highlight', function() {
    // Determine specified search term
    const searchTerm = $(this).val();
    // Highlight search term inside a specific context
    $('.content--js').unmark().mark(searchTerm);
  }).trigger('input.highlight').focus();
});
