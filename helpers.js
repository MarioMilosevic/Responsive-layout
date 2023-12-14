"use strict";



export const moveSlideDiv = (position, arr) => {
  arr.forEach(el => {
    el.style.transform = `translateX(-${position * 100}%)`
  })
}

// rightBtn.addEventListener("click", function () {
//   if(currentPosition !== sliderDivArr.length) {
//     sliderDivArr.forEach((slide) => {
//       slide.style.transform = `translateX(-${currentPosition * 100}%)`;
//     });
//     currentPosition++;
//   } else if(currentPosition === sliderDivArr.length){
//     currentPosition = 0
//     sliderDivArr.forEach((slide) => {
//       slide.style.transform = `translateX(-${currentPosition * 100}%)`;
//     });
//     currentPosition++
//   }})

// rightBtn.addEventListener("click", function () {
//   if(currentPosition !== sliderDivArr.length) {
//    sliderDivTranslate(currentPosition, sliderDivArr)
//   } else if(currentPosition === sliderDivArr.length){
  //     currentPosition = 0
  // sliderDivTranslate(currentPosition, sliderDivArr)
//     sliderDivArr.forEach((slide) => {
//       slide.style.transform = `translateX(-${currentPosition * 100}%)`;
//     });
//     currentPosition++
//   }}) 
export const removeClass = (arr, cl) => {
  arr.forEach((el) => el.classList.remove(cl));
};

// export const moveDiv = (arr) => {
// arr.forEach(el => )
// }
