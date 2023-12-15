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
  button1,
  button2,
  button3,
  button4,
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
  if(currentPosition === sliderDivArr.length - 1){
    currentPosition = 0
  }else {
    currentPosition++
  }
  moveSlideDiv(currentPosition, sliderDivArr)
 }

 const prevSlide = () => {
  if(currentPosition ===  0){
    currentPosition = sliderDivArr.length - 1
  }else {
    currentPosition--
  }
  moveSlideDiv(currentPosition, sliderDivArr)
 }

 rightBtn.addEventListener('click', nextSlide)
 leftBtn.addEventListener('click', prevSlide)




// rightBtn.addEventListener("click", function () {
//   if (currentPosition < sliderDivArr.length) {
//     moveSlideDiv(currentPosition, sliderDivArr);
//     currentPosition++;
//     console.log(currentPosition);
//   } else {
//     currentPosition = 0;
//     moveSlideDiv(currentPosition, sliderDivArr);
//     currentPosition++;
//     console.log(currentPosition);
//   }
// });
// // ako je manji od 1 da bude 4
// leftBtn.addEventListener("click", function () {
//   currentPosition--
//   if (currentPosition < 1) {
//     currentPosition = 4
//     currentPosition--
//     moveSlideDiv(currentPosition, sliderDivArr);
//     console.log(currentPosition);
//   } else if(currentPosition === 1){
//     currentPosition--
//     // ne umijem rijesit za spas
//     moveSlideDiv(currentPosition, sliderDivArr);
//   }
// });

// KASNIJE !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// sliderBtns.forEach((btn) => {
//   btn.addEventListener("click", function () {
//     if (btn.id === "btn1") {
//       currentPosition = 0;
//       removeClass(sliderBtns, "filledBtn");
//       button1.classList.add("filledBtn");
//       sliderDivTranslate(currentPosition, sliderImgDivs);
//     } else if (btn.id === "btn2") {
//       currentPosition = -130;
//       removeClass(sliderBtns, "filledBtn");
//       button2.classList.add("filledBtn");
//       sliderDivTranslate(currentPosition, sliderImgDivs);
//     } else if (btn.id === "btn3") {
//       currentPosition = -260;
//       removeClass(sliderBtns, "filledBtn");
//       button3.classList.add("filledBtn");
//       sliderDivTranslate(currentPosition, sliderImgDivs);
//     } else if (btn.id === "btn4") {
//       currentPosition = -390;
//       removeClass(sliderBtns, "filledBtn");
//       button4.classList.add("filledBtn");
//       sliderDivTranslate(currentPosition, sliderImgDivs);
//     }
//   });
// });
