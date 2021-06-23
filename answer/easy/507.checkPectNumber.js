"use strict";

var checkPerfectNumber = function(num) {
  if (num < 3) return false;
  let sum = 0;
  let n = Math.floor(Math.sqrt(num));
  for (let i = 1; i <= n; i++) {
    if (num % i == 0) {
      sum += i + num / i;
    }
  }
  return sum == 2 * num ? true : false;
};
