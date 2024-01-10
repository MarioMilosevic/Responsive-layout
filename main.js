"use strict";
import { data } from "./constants";
const {
  nav,
  svg,
  rightBtn,
  leftBtn,
  sliderBtns,
  xButton,
  sliderDivArr,
} = data();
import { moveSlideDiv } from "./helpers";
import { removeClass } from "./helpers";

svg.addEventListener("click", function () {
  nav.classList.add("navTranslate");
});

xButton.addEventListener("click", function () {
  nav.classList.remove("navTranslate");
});

let currentPosition = 0;

const nextSlide = () => {
  if (currentPosition === sliderDivArr.length - 1) {
    currentPosition = 0;
  } else {
    currentPosition++;
  }
  moveSlideDiv(currentPosition, sliderDivArr);
  removeClass(sliderBtns, "filledBtn");
  sliderBtns[currentPosition].classList.add("filledBtn");
};

const prevSlide = () => {
  if (currentPosition === 0) {
    currentPosition = sliderDivArr.length - 1;
  } else {
    currentPosition--;
  }
  moveSlideDiv(currentPosition, sliderDivArr);
  removeClass(sliderBtns, "filledBtn");
  sliderBtns[currentPosition].classList.add("filledBtn");
};

rightBtn.addEventListener("click", nextSlide);
leftBtn.addEventListener("click", prevSlide);

sliderBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    removeClass(sliderBtns, "filledBtn");
    currentPosition = btn.id;
    if (btn.id === String(currentPosition)) {
      sliderBtns[currentPosition].classList.add("filledBtn");
      moveSlideDiv(currentPosition, sliderDivArr)
    }
  });
});


