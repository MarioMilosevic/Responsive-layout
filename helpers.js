'use strict'

export const sliderDivTranslate = (position, arr) => {
    arr.forEach(el => {
      el.style.transform = `translateX(${position}%)`
    })
    };