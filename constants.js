'use strict'
export function data() {
    const nav = document.querySelector("nav");
    const svg = document.querySelector("svg");
    const navList = document.querySelector(".navList");
    const logo = document.querySelector(".logo");
    const x = document.createElement("button");

    return {nav, svg, navList, logo, x}
} 