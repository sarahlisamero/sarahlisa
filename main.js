document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const menuOpen = document.querySelector('.menu-open');
    const closeMenu = document.querySelector('.close-menu');

    hamburgerMenu.addEventListener('click', () => {
        menuOpen.style.display = "flex";
    });

    closeMenu.addEventListener('click', () => {
        menuOpen.style.display = "none";
    });
});
