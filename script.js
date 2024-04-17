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

    // Scroll Section active liink

const sections = document.querySelectorAll('section[id]');

function scrollActive () {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 50;

        let sectionId = section.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('a[href="#' + sectionId + '"]').classList.add('active-link');
        } else {
            document.querySelector('a[href="#' + sectionId + '"]').classList.remove('active-link');
        }
    });
}

window.addEventListener('scroll', scrollActive);

// Resume sroll 

const pages = document.querySelectorAll('.page');
const  resume = document.querySelector('.resume');

function resumeActive() {
    const scrollY = window.pageYOffset;

    pages.forEach(page => { 
        const sectionHeight = page.offsetHeight;
        const sectionTop = page.offsetTop- 120;

        let sectionId = page.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.resume_tabs a[href *=' + sectionId + ']').classList.add('current');
        } else {
            document.querySelector('.resume_tabs a[href *=' + sectionId + ']').classList.remove('current');
        }
    })
}

window.addEventListener('scroll', resumeActive);

