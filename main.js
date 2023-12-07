 "use strict";
import { data } from "./constants";
const {nav, svg, navList, logo, x} = data()

svg.addEventListener("click", function () {
  x.classList.add("xButton");
  x.textContent = "X";
  nav.appendChild(x);
  nav.style.transform = 'translateX(100%)'
});

x.addEventListener("click", function () {
    nav.removeChild(x)
    nav.style.transform = 'translateX(-100%)';
});

