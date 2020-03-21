'use strict';
var bodyPage = document.querySelector('body');
var burgerBtn = document.querySelector('.header__burger-btn');
var header = document.querySelector('.header');

var openMenu = function (event) {
  event.preventDefault();
  header.classList.add('header--opened');

};

burgerBtn.addEventListener('click', openMenu);

bodyPage.classList.remove('.body--nojs');
