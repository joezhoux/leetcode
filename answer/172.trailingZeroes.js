"use strict";

let n = 3,
n1 = 5,
n2 = 0;

var trailingZeroes = function(n) {
  let count = 0;
  while (n >= 5) {
    n = Math.floor(n / 5);
    count += n;
  }
  return count;
};

console.log(trailingZeroes(20));
