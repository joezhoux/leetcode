"use strict";

let x = 1, y = 4,
x1= 3, y1 = 1;

var hammingDistance = function(x, y) {
  let nums = x ^ y;
  let count = 0;
  while (nums > 0) {
    count += nums & 1;
    nums >>= 1;
  }
  return count;
};

console.log(hammingDistance(100, 1000));
