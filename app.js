// function to get rid of preloader after it loads
var loader = document.getElementById('preloader');
window.addEventListener('load', function(){
    loader.style.display = 'none';
})

// function for mobile menu click effect
const mobileMenu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu');

mobileMenu.addEventListener('click', function(){
    mobileMenu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})

