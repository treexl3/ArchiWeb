//! Nav Toggle 
const btn = document.querySelector('.burger__menu');
const nav = document.querySelector('.menu-header__menu');
const link = document.querySelector('.menu-header__link');
document.body.classList.add('touch')

btn.addEventListener('click', () => {
   btn.classList.toggle('active');
   nav.classList.toggle('active');
   document.body.classList.toggle('lock');
});
link.addEventListener('click', () => {
   btn.classList.remove('active');
   nav.classList.remove('active');
   document.body.classList.remove('lock');
   console.log();
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

   //! Reviews: https://kenwheeler.github.io/slick/
   $('.feedback__slider').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      arrows: false
   })








