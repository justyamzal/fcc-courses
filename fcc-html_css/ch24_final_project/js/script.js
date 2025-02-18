// script.js

// Get elements
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const closeMenu = document.getElementById('closeMenu');

// Event listener for hamburger icon
hamburger.addEventListener('click', () => {
    navMenu.classList.add('active'); // Slide in the menu

    hamburger.style.display = 'none'; // Hide hamburger button
    closeMenu.style.display = 'block'; // Show close button
});

// Event listener for close button
closeMenu.addEventListener('click', () => {
    navMenu.classList.remove('active'); // Slide out the menu

    hamburger.style.display = 'block'; // Show hamburger button
    closeMenu.style.display = 'none'; // Hide close button
});

// Optional: Close menu when clicking outside of it
window.addEventListener('click', (event) => {
    if (event.target === navMenu) {
        navMenu.classList.remove('active'); // Slide out the menu
    }
});