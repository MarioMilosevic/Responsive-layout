// "use strict";
const svg = document.querySelector("svg");
const links = document.querySelectorAll("a");
const nav = document.querySelector("nav");
console.log(nav);
svg.addEventListener("click", function () {
    nav.classList.add('mobileNav')
})

