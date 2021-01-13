const navToggler = document.querySelector('.nav-toggler');
const navMenu = document.querySelector('.navbar ul');
const navLinks = document.querySelectorAll('.navbar a');

allEventListners();

function allEventListners() {
    navToggler.addEventListener('click', togglerClick);
    navLinks.forEach(elem => elem.addEventListener('click', navLinkClick));
}

function togglerClick() {
    navToggler.classList.toggle('toggler-open');
    navMenu.classList.toggle('open');
}

function navLinkClick() {
    if (navMenu.classList.contains('open')) {
        navToggler.click();
    }
}

$(document).ready(function() {
    $(document).scroll(function() {
        var navScroll = $(this).scrollTop();
        if (navScroll > 1) {
            $(".navbar-area").addClass('fixed');
        }
    });
});


var scrollBtn = document.querySelector(".scrollBtn")
var rootElement = document.documentElement
var TOGGLE_RATIO = 0.80

function catchScroll() {
    var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight
    if ((rootElement.scrollTop / scrollTotal) > TOGGLE_RATIO) {
        scrollBtn.classList.add("showBtn")
    } else {
        scrollBtn.classList.remove("showBtn")
    }
}

function scrollTop() {
    rootElement.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}
scrollBtn.addEventListener("click", scrollTop)
document.addEventListener("scroll", catchScroll)