"use strict";

let x = 4,
x1 = 8;

var mySqrt = function(x) {
  let l = 0;
  let r = x;
  while (r >= l) {
    let mid = Math.floor((r + l) / 2);
    if (mid * mid == x) return mid;
    if (mid * mid > x) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
   return r;
};
