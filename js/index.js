// MENU BURGER

let burgerBtn = document.querySelector('.link-burger');
let navList = document.querySelector('.nav-list ul');

if (burgerBtn && navList) {
    burgerBtn.addEventListener('click', () => {
        burgerBtn.classList.toggle('open');
        navList.classList.toggle('open');
    })
}

// NAV BG 

let navbar = document.getElementById('nav-scroll');
let offSet = navbar.offsetTop;

console.log(offSet);

function scrollnavbar() {
    if (window.pageYOffset > offSet) {
        navbar.classList.add('nav-bg');
    } else {
        navbar.classList.remove('nav-bg');
    }
}

window.onscroll = function() {
    scrollnavbar();
}
