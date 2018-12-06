'use strict';

(function () {
  let area = document.querySelector('.game__area');
  let items = area.querySelectorAll('.game__item');
  let comment = area.querySelector('.game__comment');
  let marks = document.querySelectorAll('.game__mark');
  let win = area.querySelector('.game__win');

  items.forEach((item, index) => {
    item.addEventListener('click', function () {
      let question = item.querySelector('.game__question');
      let answer = item.querySelector('.game__answer');

      question.classList.add('game__question--fade');
      answer.classList.add('game__answer--reveal');

      if (comment.classList.contains('game__comment--hide')) {
        comment.classList.remove('game__comment--hide');
      }

      comment.textContent = item.dataset.answer;
      item.style.pointerEvents = "none";
      marks[index].querySelector('.game__check').checked = 'true';

      let final = true;

      marks.forEach(item => {
        if (!item.querySelector('.game__check').checked) {
          console.log('false');
          final = false;
        }
      });

      if (final) {
        win.classList.remove('game__win--hide');
      }


    });
  });

})();
