'use strict';

(function () {
  let list = document.querySelector('.reviews__list');
  let modalTriggers = list.querySelectorAll('.reviews__link')

  function openModal (item) {
    let html = document.querySelector('html');

    function closeModal (modal) {
      let btn = modal.querySelector('.modal__btn');

      function clickBtn () {
        modal.classList.remove('modal-open');
        btn.removeEventListener('click', clickBtn);
        html.style.overflow = 'auto';
      }

      btn.addEventListener('click', clickBtn);
    }

    html.style.overflow = 'hidden';
    let idModal = '#' + item.dataset.modal;
    let modal = list.querySelector(idModal);
    modal.classList.add('modal-open');
    closeModal(modal);
  }

  modalTriggers.forEach(item => {
    item.addEventListener('click', function (evt) {
      evt.preventDefault();
      openModal(item);
    });
  });
})();
