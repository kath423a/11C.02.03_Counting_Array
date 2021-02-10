"use strict";

window.addEventListener("DOMContentLoaded", loop);

//The two variables: the array and the counter (only one of them can be a let-variable)
const arr = [];
let counting = 0;

//Only one function (loop)
//The unshift() method adds one or more elements to the beginning of the array and return the new lenght
function loop() {
  arr.unshift(counting);
  counting++;
  if (counting > 9) {
    arr.pop(arr);
  }

  //Counts with a timed delay, here 1second
  setTimeout(loop, 1000);

  //The array is logged to the console
  console.log(arr);
}
