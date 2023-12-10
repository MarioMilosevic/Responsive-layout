"use strict";
import { data } from "./constants";
const {
  nav,
  svg,
  navList,
  logo,
  rightBtn,
  leftBtn,
  sliderImgDivs,
  sliderBtns,
  xButton,
} = data();
import { sliderDivTranslate } from "./helpers";

svg.addEventListener("click", function () {
  nav.classList.add("navTranslate");
});

xButton.addEventListener("click", function () {
  nav.classList.remove("navTranslate");
});

//ako je event target isti kao sacuvani target uzmi currentPosition i dodaj ga na svaki od divova, kao transform translate vrijednost dinamicki
let currentPosition = 0;
rightBtn.addEventListener("click", function () {
  currentPosition = currentPosition - 130;
  if (currentPosition < -390) {
    currentPosition = 0;
  }
  sliderDivTranslate(currentPosition, sliderImgDivs);
  console.log(currentPosition);
});
// });
// ako je currentposition veci od nekog broja vrati na 0 a ako je manji od 0 vrati na taj najveci broj

leftBtn.addEventListener("click", function () {
  currentPosition = currentPosition + 130;
  if (currentPosition > 0) {
    currentPosition = -390;
  }
  sliderDivTranslate(currentPosition, sliderImgDivs);
});
