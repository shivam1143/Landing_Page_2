const menuBtn = document.getElementById('menu-btn');
const navlinks = document.getElementById('nav-links');
const menuBtnIcon = menuBtn.querySelector('i');

menuBtn.addEventListener('click', (e) => {
    navlinks.classList.toggle('open');

    const isOpen = navlinks.classList.contains('open');
    menuBtnIcon.setAttribute('class', isOpen ? "ri-close-line" : "ri-menu-line");
});

navlinks.addEventListener('click', (e) => {
    navlinks.classList.remove('open');
    meniBtnIcon.setAttribute('class', "ri-menu-line");
});