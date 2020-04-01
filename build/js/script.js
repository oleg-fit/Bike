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

// Отменяем скрол
function existVerticalScroll() {
  return document.body.offsetHeight > window.innerHeight
}

function getBodyScrollTop() {
  return (
    self.pageYOffset ||
    (document.documentElement && document.documentElement.ScrollTop) ||
    (document.body && document.body.scrollTop)
  );
}

burgerBtn.addEventListener('click', e => {
  e.preventDefault();

  bodyPage.dataset.scrollY = getBodyScrollTop();

  sidebarMenu.classList.add('sidebar-menu--opened');

  if(existVerticalScroll()) { // новая строка
    bodyPage.classList.add('page--lock');
    bodyPage.style.top = `-${bodyPage.dataset.scrollY}px`;
  }
})

closeBtn.addEventListener('click', e => {
  e.preventDefault();

  sidebarMenu.classList.remove('sidebar-menu--opened');

  if(existVerticalScroll()) { // новая строка
    bodyPage.classList.remove('page--lock');
    window.scrollTo(0,bodyPage.dataset.scrollY);
  }
})
