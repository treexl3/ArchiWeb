//! Ініціалізуємо Swiper
let myImageSlider = new Swiper('.feedback-slider', {
   pagination: {
      el: '.swiper-pagination',
      //! Булети
      clickable: true,
      //! Динамічні булети
      dynamicBullets: true,
   },

   //! Авто-висота
   autoHeight: true,

   //! Кількість слайдів для показа
   slidesPerView: 2,

   //! Кількість пролистуємих слайдів
   slidesPerGroup: 1,

   //! Відступ між слайдами 
   spaceBetween: 150,

   //! Відключення функціонала
   //! якщо слайдів менше ніж потрібно
   watchOverflow: true,

   //! Управління клавіатурою
   keyboard: {
      //! Включити/виключити
      enabled: true,
      //! Включити/виключити
      //! тільки тоді коли слайдер
      //! в межах вьюпорта
      onlyInViewport: true,
      //! Включити/виключити
      //! управління клавішами
      //! PageUp, PageDown
      pageUpDown: true,
   },

   //! Швидкість
   speed: 900,

   breakpoints: {
      320: {
         slidesPerView: 1,
      },
      480: {
         slidesPerView: 1,
      },
      992: {
         slidesPerView: 2,
      },
   },

   //! ЗУм картинок
   zoom: {
      //! Максимальне збільшування
      maxRatio: 5,
      //! Мінімальне збільшування
      minRatio: 1,
   },
});

//! Запуск автопрокрутки при наведенні 
let sliderBlock = document.querySelector('.feedback-slider');

// myImagesSlider - це змінна якій прсвоїний слайдер

sliderBlock.addEventListener("mouseenter", function (e) {
   myImageSlider.params.autoplay.disableOnInteraction = false;
   myImageSlider.params.autoplay.delay = 1000;
   myImageSlider.autoplay.start();
});
sliderBlock.addEventListener("mouseleave", function (e) {
   myImageSlider.autoplay.stop();
});

//! Nav Toggle
const btn = document.querySelector('.burger__menu');
const nav = document.querySelector('.menu-header__menu');
const links = document.querySelectorAll('.menu-header__link');
document.body.classList.add('touch')

btn.addEventListener('click', () => {
   btn.classList.toggle('active');
   nav.classList.toggle('active');
   document.body.classList.toggle('lock');
});
links.forEach(link => {
   link.addEventListener('click', (e) => {
      btn.classList.remove('active');
      nav.classList.remove('active');
      document.body.classList.remove('lock');
      const targetLink = document.querySelector('.menu-header__link span.active');
      if (targetLink) {
         targetLink.classList.remove('active');
      }
      e.target.classList.add('active');
   });
});

//! Adding Map
// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);
function init() {
   var mapOptions = {
      zoom: 16.48,

      center: new google.maps.LatLng(55.9432777, -3.2058572),
      styles: [{ "featureType": "landscape.man_made", "elementType": "geometry", "stylers": [{ "color": "#f7f1df" }] }, { "featureType": "landscape.natural", "elementType": "geometry", "stylers": [{ "color": "#d0e3b4" }] }, { "featureType": "landscape.natural.terrain", "elementType": "geometry", "stylers": [{ "visibility": "off" }] }, { "featureType": "poi", "elementType": "labels", "stylers": [{ "visibility": "off" }] }, { "featureType": "poi.business", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "poi.medical", "elementType": "geometry", "stylers": [{ "color": "#fbd3da" }] }, { "featureType": "poi.park", "elementType": "geometry", "stylers": [{ "color": "#bde6ab" }] }, { "featureType": "road", "elementType": "geometry.stroke", "stylers": [{ "visibility": "off" }] }, { "featureType": "road", "elementType": "labels", "stylers": [{ "visibility": "off" }] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#ffe15f" }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#efd151" }] }, { "featureType": "road.arterial", "elementType": "geometry.fill", "stylers": [{ "color": "#ffffff" }] }, { "featureType": "road.local", "elementType": "geometry.fill", "stylers": [{ "color": "black" }] }, { "featureType": "transit.station.airport", "elementType": "geometry.fill", "stylers": [{ "color": "#cfb2db" }] }, { "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#a2daf2" }] }]
   };

   var mapElement = document.getElementById('map');

   var map = new google.maps.Map(mapElement, mapOptions);
};







