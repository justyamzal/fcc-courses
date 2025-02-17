// Select the hamburger button and navigation
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.header__nav');

// Toggle the "active" class on the navigation
hamburger.addEventListener('click', () => {
  nav.classList.toggle('active');
});

// Optional: Close the menu when a link is clicked
const navLinks = document.querySelectorAll('.header__ul li a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
  });
});