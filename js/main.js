// Navbar btn click effect
const navbarToggler = document.querySelector('.navbar-toggler');
let isActive = false;

navbarToggler.addEventListener('click', () => {
    if ( isActive ) {
        isActive = !isActive;
        navbarToggler.classList.remove('active');
    } else {
        isActive = !isActive;
        navbarToggler.classList.add('active');
    };
})

// Change cat img
const changeCatImg = () => {
    const catImg = document.querySelector('.half-cats');
    if ( innerWidth < 768 ) {
        catImg.src = "../img/fat-cat.png";
    } else {
        catImg.src = "./img/half-cats-tablet.png";
    }
};

changeCatImg();
window.addEventListener('resize', () => {
    changeCatImg();
})