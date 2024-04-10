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