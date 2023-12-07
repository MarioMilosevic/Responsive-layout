"use strict";
import { data } from "./constants";
const { nav, svg, navList, logo } = data();
const xButton = document.querySelector(".xBtn");

svg.addEventListener("click", function () {
  nav.classList.add("navTranslate");
});

xButton.addEventListener("click", function () {
  nav.classList.remove("navTranslate");
});
