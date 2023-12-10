"use strict";
export function data() {
  const nav = document.querySelector("nav");
  const svg = document.querySelector("svg");
  const navList = document.querySelector(".navList");
  const logo = document.querySelector(".logo");
  const rightBtn = document.querySelector(".rightBtn");
  const leftBtn = document.querySelector(".leftBtn");
  const sliderImgDivs = document.querySelectorAll(".sliderImg");
  const sliderBtns = document.querySelectorAll(".sliderBtns");
  const xButton = document.querySelector(".xBtn");

  return {
    nav,
    svg,
    navList,
    logo,
    leftBtn,
    rightBtn,
    sliderImgDivs,
    sliderBtns,
    xButton,
  };
}

// sve ih ubacim u ovaj izmedju linija, i onda 234 poceram desno sa pozicijom apsolute, i onda overflow tu,
// pa kasnije na klik, da se pomjeraju
