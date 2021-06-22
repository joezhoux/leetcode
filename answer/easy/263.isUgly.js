"use strict";

let s = 6;
let s1 = 8;
let s2 = 14;
let s3 = 1;

var isUgly = function (n) {
  if(n == 1) return true;
  while(n > 1) {
    if (n % 2 == 0) n = n / 2;
    else if (n % 3 == 0) n = n / 3;
    else if (n % 5 == 0) n = n / 5;
    else return false;
  }
  return n === 1;
};
console.log(isUgly(7));
