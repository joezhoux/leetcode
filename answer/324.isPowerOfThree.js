"use strict";

let n = 27;
let n1 = 0;
let n2 = 9;
let n3 = 45;

var isPowerOfThree = function(n) {
  if (n == 0) return false;
  for (let i = 0;; i++) {
    if (3 ** i > n) return false;
    if (3 ** i == n) return true;
  }

};

console.log(isPowerOfThree(n3));
