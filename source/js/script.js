'use strict';
var bodyPage = document.querySelector('body');
var sidebarMenu = document.querySelector('.sidebar-menu');
var burgerBtn = document.querySelector('.header__burger-btn');
var closeBtn = document.querySelector('.sidebar-menu__btn-close');
var form = document.querySelector('.form');
var linkFilter = document.querySelector('.main-filter__list-link--filters');
var catalogFilter = document.querySelector('.catalog__filter');
var closeBtnCatalog = document.querySelector('.catalog__btn-close');

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


//=================  Sidebar-menu
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

//=================  Filter
linkFilter.addEventListener('click', e => {
  e.preventDefault();

  bodyPage.dataset.scrollY = getBodyScrollTop();

  catalogFilter.classList.add('catalog__filter--active');

  if(existVerticalScroll()) { // новая строка
    bodyPage.classList.add('page--lock');
    bodyPage.style.top = `-${bodyPage.dataset.scrollY}px`;
  }
})

closeBtnCatalog.addEventListener('click', e => {
  e.preventDefault();

  catalogFilter.classList.remove('catalog__filter--active');

  if(existVerticalScroll()) { // новая строка
    bodyPage.classList.remove('page--lock');
    window.scrollTo(0,bodyPage.dataset.scrollY);
  }
})

// Аккордеон

form.addEventListener('click', function(event) {
  var target = event.target;

  if (target.tagName == 'LEGEND') {
    target.classList.toggle("form__legend--active");
  }
} )
