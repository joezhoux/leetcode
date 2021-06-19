"use strict";

let n = 19,
  n1 = 2;

//happy nums 平方和总会回归个位数
var isHappy = function (n) {
  if (!n) return false;
  n = n.toString();
  while (n.length > 1) {
    let sum = 0;
    for (let i = 0; i < n.length; i++) {
      sum += n[i] ** 2;
    }
    n = sum.toString();
  } 
  return n == 1 || n == 7;
};

console.log(isHappy(7));
