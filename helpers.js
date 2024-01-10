"use strict";

export const moveSlideDiv = (position, arr) => {
  arr.forEach((el) => {
    el.style.transform = `translateX(-${position * 100}%)`;
  });
};

export const removeClass = (arr, cl) => {
  arr.forEach((el) => el.classList.remove(cl));
};
