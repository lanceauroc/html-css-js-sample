let navbar = document.querySelector('nav');
let menuLinks = document.getElementById('menu-links');

function toggleMenu () {
    menuLinks.classList.toggle('show-menu'); /* when triggered, show-menu is added to the element by the specified id*/
}

window.onscroll = function() {
    if(window.scrollY > 0) { // identifies that the page has been scrolled
        navbar.style.background = '#ffddf8';
    }else{
        navbar.style.background = 'transparent';
    }
}
