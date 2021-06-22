"use strict";

let num = 16,
num1 = 14;

var isPerfectSquare = function(num) {
  if (num == 1) return true;
  let mid = num / 2;
  let sqrt = 0;
  for (let i = 1; i <= mid; i++) {
    sqrt = num / i;
    if (sqrt == i) {
      return true;
    } else if (sqrt < i) {
      return false;
    }
  }
  return false;
};

console.log(isPerfectSquare(num1));
