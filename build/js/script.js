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

// burgerBtn.addEventListener('click', addClassItem);
// closeBtn.addEventListener('click', removeClassItem);


// Отменяем скрол

function existVerticalScroll() {
  return document.body.offsetHeight > window.innerHeight
}

function getBodyScrollTop(): number {
  return (
    self.pageYOffset ||
    (document.documentElement && document.documentElement.ScrollTop) ||
    (document.body && document.body.scrollTop)
  );
};

burgerBtn.addEventListener('click', e => {
  e.preventDefault();

  body.dataset.scrollY = getBodyScrollTop();

  sidebarMenu.classList.add('sidebar-menu--opened');

  if(existVerticalScroll()) { // новая строка
    body.classList.add('body-lock');
    body.style.top = `-${body.dataset.scrollY}px`;
  }
})

closeBtn.addEventListener('click', e => {
  e.preventDefault();

  sidebarMenu.classList.remove('sidebar-menu--opened');

  if(existVerticalScroll()) { // новая строка
    body.classList.remove('body-lock');
    window.scrollTo(0,body.dataset.scrollY);
  }
})
