// "use strict";
const svg = document.querySelector("svg");
const links = document.querySelectorAll("a");
const nav = document.querySelector("nav");
const navList = document.querySelector('.navList')
svg.addEventListener("click", function () {
    nav.classList.add('mobileNav')
    navList.classList.add('mobileNavList')
    links.classList.add('mobileLinks')
})

