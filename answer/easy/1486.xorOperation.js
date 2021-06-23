"use strict";

var xorOperation = function(n, start) {
  let nums = 0;
  for (let i = 0; i < n; i++) {
    nums ^= (start + i * 2);
  }
  return nums; 
};

console.log(xorOperation(1, 7));
