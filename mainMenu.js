document.querySelector('.menu-but').addEventListener('click', () => {
    let navClassBut = document.querySelector('.main-menu');
    if (navClassBut.classList.contains('main-menu-close')) {
        navClassBut.classList.remove('main-menu-close');
        navClassBut.classList.add('main-menu-open');
    } else {
        navClassBut.classList.add('main-menu-close');
        navClassBut.classList.remove('main-menu-open');
    }


});
document.querySelector('.main-menu-close-but').addEventListener('click', () => {
    let navClassBut = document.querySelector('.main-menu');
    if (navClassBut.classList.contains('main-menu-open')) {
        navClassBut.classList.add('main-menu-close');
        navClassBut.classList.remove('main-menu-open');

    }
})