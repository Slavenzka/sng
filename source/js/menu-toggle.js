'use strict';

(function () {
  let nav = document.querySelector('.header__nav');
  let toggle = nav.querySelector('.nav__toggle');

  toggle.addEventListener('click', function () {
    if (nav.classList.contains('nav-opened')) {
      nav.classList.remove('nav-opened');
      nav.classList.add('nav-closed');
    } else if (nav.classList.contains('nav-closed')) {
      nav.classList.remove('nav-closed');
      nav.classList.add('nav-opened');
    }
  });
})();
