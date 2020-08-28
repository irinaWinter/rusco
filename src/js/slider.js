(function () {
  var switchesList = document.querySelector('.slider__switches');
  var slides = document.querySelectorAll('.slide');
  var switches = document.querySelectorAll('.switch');
  var activeSlide = document.querySelector('.slide:not(.hidden)');

  switchesList.addEventListener('click', function (evt) {
    switchesClickHandler(evt);
  });

  var switchesClickHandler = function (evt) {
    shangeSlide(evt);
  };

  var shangeSlide = function (evt) {
    activeSlide.classList.add('hidden');
    activeSlideId = Array.from(switches).indexOf(evt.target.parentNode);
    activeSlide = slides[activeSlideId];
    activeSlide.classList.remove('hidden');
  };
})();
