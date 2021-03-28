// otwieranie menu
document.getElementsByClassName('mobile-hamburger')[0].addEventListener('click', function() {
    document.getElementsByClassName('open-menu-holder')[0].classList.toggle('open');
});
// zamykanie menu
document.getElementsByClassName('mobile-close')[0].addEventListener('click', function() {
    document.getElementsByClassName('open-menu-holder')[0].classList.toggle('open');
});