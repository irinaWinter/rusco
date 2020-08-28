(function () {
  var burger = document.querySelector('.burger');
  var mobileMenu = document.querySelector('.header__main-nav-mobile-menu');

  burger.addEventListener('click', function () {
    burger.classList.toggle("open");
    mobileMenu.classList.toggle("menu");
  });
})();
