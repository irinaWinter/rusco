(function () {
  ymaps.ready(function () {
    var center = [55.809166, 37.611976];

    if (document.documentElement.clientWidth > 768) {
      center = [55.809166, 37.608976];
    }

    var myMap = new ymaps.Map("map", {
      center: center,
      zoom: 17
    }, {
      searchControlProvider: "yandex#search"
    }),

    myPlacemark = new ymaps.Placemark([55.809166, 37.611976], {
      iconCaption: "17-й проезд Марьиной рощи, д. 4, корп. 1, г. Москва",
      geometry: {
        type: "Point",
        coordinates: [55.809166, 37.611976],
      }
    }, {
      preset: "islands#redPocketIcon"
    })

    myMap.geoObjects.add(myPlacemark);
  });
})();
