 "use strict";
import { data } from "./constants";
import { toggleClasses } from "./helpers";
const {nav, svg, navList, logo, x} = data()

svg.addEventListener("click", function () {
  x.classList.add("xButton");
  x.textContent = "X";
  nav.appendChild(x);
  toggleClasses(nav, navList, logo);
});

x.addEventListener("click", function () {
  toggleClasses(nav, navList, logo);
});

