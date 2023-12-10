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
} = data();
import { sliderDivTranslate } from "./helpers";

svg.addEventListener("click", function () {
  nav.classList.add("navTranslate");
});

xButton.addEventListener("click", function () {
  nav.classList.remove("navTranslate");
});

let currentPosition = 0;
rightBtn.addEventListener("click", function () {
  currentPosition = currentPosition - 130;
  if (currentPosition < -390) {
    currentPosition = 0;
  }
  sliderDivTranslate(currentPosition, sliderImgDivs);
  console.log(currentPosition);
});

leftBtn.addEventListener("click", function () {
  currentPosition = currentPosition + 130;
  if (currentPosition > 0) {
    currentPosition = -390;
  }
  sliderDivTranslate(currentPosition, sliderImgDivs);
});

sliderBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    if (btn.id === 'btn1') {
      currentPosition = 0;
      sliderDivTranslate(currentPosition, sliderImgDivs);
    } else if (btn.id === 'btn2') {
      currentPosition = -130;
      sliderDivTranslate(currentPosition, sliderImgDivs);
    } else if (btn.id === 'btn3') {
      currentPosition = -260;
      sliderDivTranslate(currentPosition, sliderImgDivs);
    } else if (btn.id === 'btn4') {
      currentPosition = -390;
      sliderDivTranslate(currentPosition, sliderImgDivs);
    }
  });
});





// button1.addEventListener('click', function(){
//   currentPosition = 0
//   sliderDivTranslate(currentPosition, sliderImgDivs)
// })

// button2.addEventListener('click', function(){
//   currentPosition = -130
//   sliderDivTranslate(currentPosition, sliderImgDivs)
// })
// button3.addEventListener('click', function(){
//   currentPosition = -260
//   sliderDivTranslate(currentPosition, sliderImgDivs)
// })
// button4.addEventListener('click', function(){
//   currentPosition = -390
//   sliderDivTranslate(currentPosition, sliderImgDivs)
// })
