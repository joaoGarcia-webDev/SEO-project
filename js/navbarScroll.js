window.addEventListener('scroll', function () {
    var posicaoy = window.pageYOffset;
    const navScroll = document.getElementById('navbarScroll')
    
    if (posicaoy >= 200) {
        navScroll.classList.add('nav-scroll')
    } else if (posicaoy < 200) {
        navScroll.classList.remove('nav-scroll')
    }
});