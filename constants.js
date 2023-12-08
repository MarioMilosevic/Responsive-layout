'use strict'
export function data() {
    const nav = document.querySelector("nav");
    const svg = document.querySelector("svg");
    const navList = document.querySelector(".navList");
    const logo = document.querySelector(".logo");




    return {nav, svg, navList, logo}
} 

// sve ih ubacim u ovaj izmedju linija, i onda 234 poceram desno sa pozicijom apsolute, i onda overflow tu, 
// pa kasnije na klik, da se pomjeraju