"use strict";

let n = 2,
n1 = 5;

var countBits = function(n) {
  let arr = [0];
  for (let i = 1; i <= n; i++){
    let bits = i >> 1;
    let odd = i & 1;
    arr[i] = arr[bits] + odd;
  }
  return arr;
};
