'use strict'

export const sliderDivTranslate = (position, arr) => {
    arr.forEach(el => {
      el.style.transform = `translateX(${position}%)`
    })
    };

export const removeClass = (arr, cl) => {
arr.forEach(el => el.classList.remove(cl))
}


    