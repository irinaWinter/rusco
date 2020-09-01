(function () {
  // баннер
  var bannerSwitchesList = document.querySelector('.slider__switches');
  var bannerSlides = document.querySelectorAll('.slide');
  var bannerSwitches = document.querySelectorAll('.switch');
  var bannerActiveSlide = document.querySelector('.slide:not(.hidden)');

  var shangeBannerSlide = function (evt) {
    bannerActiveSlide.classList.add('hidden');
    bannerActiveSlideId = Array.from(bannerSwitches).indexOf(evt.target.parentNode);
    bannerActiveSlide = bannerSlides[bannerActiveSlideId];
    bannerActiveSlide.classList.remove('hidden');
  };

  var bannerSwitchesClickHandler = function (evt) {
    shangeBannerSlide(evt);
  };

  bannerSwitchesList.addEventListener('click', function (evt) {
    var switchButton = evt.target.closest('label');

    if (switchButton) {
      bannerSwitchesClickHandler(evt);
    }
  });

  var switchInput = document.querySelectorAll('input[name=switch]');

  var switchInputChangeHandler = function (evt) {
    shangeBannerSlide(evt);
  };

  switchInput.forEach(function(item) {
    item.addEventListener('change', function (evt) {
      switchInputChangeHandler(evt);
    });
  });

  // преимущества
  var feature = document.querySelectorAll('.feature');
  var featuresSlides = document.querySelectorAll('.feature__text');
  var featuresSwitches = document.querySelectorAll('.feature__button');
  var featuresActiveSwitch = document.querySelector('.feature__button--active');
  var featuresActiveSlide = document.querySelector('.feature__text:not(.hidden)');

  var switchesFocusHandler = function (evt) {
    featuresActiveSlide.classList.add('hidden');
    featuresActiveSwitch.classList.remove('feature__button--active');
    featuresActiveSwitch = evt.target;
    featuresActiveSwitch.classList.add('feature__button--active');
    featuresActiveSlideId = Array.from(feature).indexOf(evt.target.parentNode);
    featuresActiveSlide = featuresSlides[featuresActiveSlideId];
    featuresActiveSlide.classList.remove('hidden');
  };

  featuresSwitches.forEach(function (item) {
    item.addEventListener('focus', function (evt) {
      switchesFocusHandler(evt);
    });
  });
})();
