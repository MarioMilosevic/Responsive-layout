 "use strict";
import { data } from "./constants";
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
const toggleClasses = (navigation, list, img) => {
  navigation.classList.toggle("mobileNav");
  list.classList.toggle("mobileNavList");
  img.classList.toggle("mobileLogo");
};
