const hamburgerBtn = document.querySelector('.hamburger-btn');
const mobileMenu = document.querySelector('.mobile-menu');

hamburgerBtn.addEventListener('click', () => {
     mobileMenu.classList.toggle('active')
})
