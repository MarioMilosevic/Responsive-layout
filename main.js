"use strict";
import { data } from "./constants";
const { nav, svg, navList, logo, rightBtn, leftBtn, sliderImgDivs } = data();
const xButton = document.querySelector(".xBtn");
console.log(sliderImgDivs);
svg.addEventListener("click", function () {
  nav.classList.add("navTranslate");
});

xButton.addEventListener("click", function () {
  nav.classList.remove("navTranslate");
});

const sliderDivTranslate = () => {
  let currentPosition = 0;
};
//ako je event target isti kao sacuvani target uzmi currentPosition i dodaj ga na svaki od divova, kao transform translate vrijednost dinamicki
let currentPosition = 0;

rightBtn.addEventListener("click", function (e) {
    currentPosition = currentPosition - 130;
    sliderImgDivs.forEach((div) => {
      div.style.transform = `translateX(${currentPosition}%)`;
    });
    console.log(currentPosition);
});
// });
leftBtn.addEventListener("click", function () {
  sliderImgDivs.forEach((sliderImg) => {
    sliderImg.style.transform = `translateX(${130}%)`;
  });
  console.log("lijevp");
});
