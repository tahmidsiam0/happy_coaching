const header = document.querySelector('header'),
    hero = document.querySelector('#hero');

window.addEventListener('scroll', function () {
    if (this.scrollY > 60) {
        header.classList.add('sticky');
        hero.classList.add('margin_60px');
    } else {
        header.classList.remove('sticky');
        hero.classList.remove('margin_60px');
    }
});