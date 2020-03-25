'use strict';
var bodyPage = document.querySelector('body');
var sidebarMenu = document.querySelector('.sidebar-menu');
var burgerBtn = document.querySelector('.header__burger-btn');
var closeBtn = document.querySelector('.sidebar-menu__btn-close');

bodyPage.classList.remove('page--nojs');

var addClassItem = function () {
  sidebarMenu.classList.add('sidebar-menu--opened');
};

var removeClassItem = function () {
  sidebarMenu.classList.remove('sidebar-menu--opened');
};

// var onClickOpenSidebarMenu = function () {
//   burgerBtn.removeEventListener('click', addClassItem);
//   closeBtn.addEventListener('click', removeClassItem);
// };

// var onClickCloseSidebarMenu = function () {
//   closeBtn.removeEventListener('click', removeClassItem);
//   burgerBtn.addEventListener('click', addClassItem);
// };

burgerBtn.addEventListener('click', addClassItem);
closeBtn.addEventListener('click', removeClassItem);
