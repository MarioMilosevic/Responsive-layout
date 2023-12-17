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
  const button0 = document.querySelector("#btn0");
  const button1 = document.querySelector("#btn1");
  const button2 = document.querySelector("#btn2");
  const button3 = document.querySelector("#btn3");
  const slider1 = document.querySelector(".slider1");
  const slider2 = document.querySelector(".slider2");
  const slider3 = document.querySelector(".slider3");
  const slider4 = document.querySelector(".slider4");
  const sliderDivArr = [slider1, slider2, slider3, slider4];
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
    button0,
    button1,
    button2,
    button3,
    slider1,
    slider2,
    slider3,
    slider4,
    sliderDivArr
  };
}


