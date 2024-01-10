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
  button0,
  button1,
  button2,
  button3,
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

};

const prevSlide = () => {
  if (currentPosition === 0) {
    currentPosition = sliderDivArr.length - 1;
  } else {
    currentPosition--;
  }
  moveSlideDiv(currentPosition, sliderDivArr);
};

rightBtn.addEventListener("click", nextSlide);
leftBtn.addEventListener("click", prevSlide);

// KASNIJE !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
sliderBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    removeClass(sliderBtns, "filledBtn");
    currentPosition = btn.id;
    if (btn.id === String(currentPosition)) {
      sliderBtns[currentPosition].classList.add("filledBtn");
      console.log("da");
      moveSlideDiv(currentPosition, sliderDivArr)
    }
  });
});

// sliderBtns.forEach((btn) => {
//   btn.addEventListener("click", function () {
//     if (btn.id === "btn1") {
//       currentPosition = 0;
//       removeClass(sliderBtns, "filledBtn");
//       button1.classList.add("filledBtn");
//     } else if (btn.id === "btn2") {
//       currentPosition = -130;
//       removeClass(sliderBtns, "filledBtn");
//       button2.classList.add("filledBtn");
//     } else if (btn.id === "btn3") {
//       currentPosition = -260;
//       removeClass(sliderBtns, "filledBtn");
//       button3.classList.add("filledBtn");
//     } else if (btn.id === "btn0") {
//       currentPosition = -390;
//       removeClass(sliderBtns, "filledBtn");
//       button0.classList.add("filledBtn");
//     }
//   });
// });
