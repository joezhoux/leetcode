// "use strict";

var hammingWeight = function(n) {
  let sum = 0;
  while (n) {
    sum += n & 1;
    n = n >>> 1;
  }
  return sum;
};

console.log(hammingWeight(11111111111111111111111111111101));
