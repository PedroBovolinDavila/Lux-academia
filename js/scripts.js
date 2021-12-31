const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar_menu');
const navLogo = document.querySelector('#navbar_logo');
const body = document.querySelector('body');

const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
    body.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

// Animations

gsap.registerPlugin(ScrollTrigger);

gsap.from('.animate-hero', {
    duration: 0.6,
    opacity: 0,
    y: -150,
    stagger: 0.3
})

gsap.from('.animate-services', {
    scrollTrigger: '.animate-services',
    duration: 0.3,
    x: -1500,
    opacity: 1,
    stagger: 0.12
})

gsap.from('.animate-img', {
    scrollTrigger: '.animate-services',
    duration: 1.2,
    x: -1500,
    opacity: 0,
    stagger: 0.12
})

gsap.from('.animate-membership', {
    scrollTrigger: '.animate-membership',
    duration: 1,
    y: -150,
    opacity: 0,
    stagger: 0.3,
    delay: 0.4
})

gsap.from('.animate-card', {
    scrollTrigger: '.animate-card',
    duration: 1,
    y: -150,
    opacity: 0,
    stagger: 0.2,
    delay: 0.2
})

gsap.from('.animate-team', {
    scrollTrigger: '.animate-team',
    duration: 1,
    y: -150,
    opacity: 0,
    stagger: 0.3,
    delay: 0.2
})