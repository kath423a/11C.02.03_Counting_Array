"use strict";

window.addEventListener("DOMContentLoaded", loop);

const arr = [];
let counting = 0;

function loop() {
  arr.unshift(counting);
  counting++;
  if (counting > 9) {
    arr.pop(arr);
  }

  setTimeout(loop, 500);

  console.log(arr);
}
