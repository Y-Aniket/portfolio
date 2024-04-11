const iconToggle = document.querySelector('.toggle_icon'); 
const navbarMenu = document.querySelector('.menu');
const menuLniks = document.querySelectorAll('.menu_link');
const iconClose = document.querySelector('.close_icon');

iconToggle.addEventListener('click',() => {
    navbarMenu.classList.toggle('active');
});

iconClose.addEventListener('click', () => {
    navbarMenu.classList.remove('active');
});

menuLniks.forEach((menuLnik) => {
    menuLnik.addEventListener('click', () => {
        navbarMenu.classList.remove('active');
    })
})

// Change background header

function scrollHeader() {
    const header = document.getElementById('header');
    this.scrollY >= 20 ? header.classList.add('active') : header.classList.remove('active');
}

window.addEventListener('scroll', scrollHeader);

/* Hero type effect */

const type = document.querySelector('.typed');

    if (type) {
        let typed_string = type.getAttribute('data-typed-items');
        typed_string = typed_string.split(',');
        new Typed('.typed', {
            strings: typed_string,
            loop: true,
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 2000
        });
    }
