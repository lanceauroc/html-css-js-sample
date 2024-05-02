let navbar = document.querySelector('nav');

window.onscroll = function() {
    if(window.scrollY > 0) { // identifies that the page has been scrolled
        navbar.style.background = '#ffddf8';
    }else{
        navbar.style.background = 'transparent';
    }
}