//! Nav Toggle 
const btn = document.querySelector('.menu-header__burger');
const nav = document.querySelector('.menu-header__menu');

btn.addEventListener('click', () => {
   btn.classList.toggle('active');
   nav.classList.toggle('active');
});





