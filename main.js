// "use strict";
const svg = document.querySelector("svg");
const links = document.querySelectorAll("a");
const nav = document.querySelector('nav')
svg.addEventListener("click", function () {
    nav.classList.add('transition')
  links.forEach((link) => {
    link.classList.add('transition')
  });
});
