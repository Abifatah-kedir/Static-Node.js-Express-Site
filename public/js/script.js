
'use strict';

/**
 * Handle mobile menu functionality to hide/reveal sidebar on mobile layouts
 */
const body = document.querySelector('body');
let headerBtnClicked = false;

document.querySelector('#menu-icon').addEventListener('click', e => {
  !headerBtnClicked ? body.style.transform = 'translateX(300px)' : body.style.transform = 'translateX(0px)';
  return headerBtnClicked = !headerBtnClicked;
});




/* changes the colors of the skills randomly when page loads */
document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('#skills-list li');
  const used = new Set();                     // remember colors already chosen

  items.forEach(li => {
    let color;
    do {
      // lively but readable → 70 % sat, 60 % lightness
      color = `hsl(${Math.random()*360}, 70%, 60%)`;
    } while (color === 'hsl(0, 0%, 100%)' || used.has(color));  // avoid white & repeats
    used.add(color);
    li.style.color = color;                  // text color
  });
});