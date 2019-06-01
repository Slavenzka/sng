'use strict';

(function () {
  let nav = document.querySelector('.header__nav');
  let toggle = nav.querySelector('.nav__toggle');
  let links = nav.querySelectorAll('.nav__link');

  function closeMenu () {
    nav.classList.remove('nav-opened');
    nav.classList.add('nav-closed');
  }

  toggle.addEventListener('click', function () {
    if (nav.classList.contains('nav-opened')) {
      nav.classList.remove('nav-opened');
      nav.classList.add('nav-closed');
    } else if (nav.classList.contains('nav-closed')) {
      nav.classList.remove('nav-closed');
      nav.classList.add('nav-opened');
    }

    links.forEach(item => {
      item.addEventListener('click', closeMenu);
    });
  });
})();
