"use strict";

let n = 3,
n1 = 5,
n2 = 15;

var fizzBuzz = function(n) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      arr[i - 1] = "FizzBuzz";
    } else if (i % 3 == 0) {
      arr[i - 1] = "Fizz";
    } else if (i % 5 == 0) {
      arr[i - 1] = "Buzz";
    } else {
      arr[i - 1] = i + "";
    }
  }
  return arr;
};
