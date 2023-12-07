// "use strict";
const svg = document.querySelector("svg");
const nav = document.querySelector("nav");
const navList = document.querySelector('.navList')
const logo = document.querySelector('.logo')
svg.addEventListener("click", function () {
    const x = document.createElement('button')
    x.classList.add('xButton')
    x.textContent = 'X'
    nav.appendChild(x)
    nav.classList.add('mobileNav')
    navList.classList.add('mobileNavList')
    logo.classList.add('mobileLogo')
})

