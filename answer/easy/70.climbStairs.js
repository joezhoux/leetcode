"use strict";

var climbStairs = function(n) {
  if (n < 3) return n
  let per = 1, cur = 2, sum = 0
  for (let i = 3; i <= n; i++) {
    sum = per + cur
    per = cur
    cur = sum
  }
  return sum
};
