// "use strict";
// // ako se event target ne poklapa sa necim iz liste od elementa, elementu stavi opacity
// // kada izadjem misem da se opacity makne
// const links = document.querySelectorAll("a");

// links.forEach((link) =>{
//     // link.style.opacity = '0.2';
//     link.addEventListener("mouseenter", function (e) {
//         const target = e.target
//         if (target) {
//             target.style.opacity = "1";
//             const nextSibling = link.nextElementSibling
//             // const previousSibling = link.previousElementSibling
//             nextSibling.style.opacity = '0.2'
//             // previousSibling.style.opacity = '0.2'
//             console.log('target');
//         } else {
//             link.style.opacity = "1";
//             console.log('nije target');
//         }
//     })
// }
// );
// console.log(links);

// links.forEach(link => link.addEventListener('mouseout', function(){

// }))