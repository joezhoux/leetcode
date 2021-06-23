"use strict";

let x = 2.00000,
  n = 10,
  x1 = 2.10000,
  n1 = 3,
  x2 = 2.00000,
  n2 = -2;

var myPow = function (x, n) {
  if (n == 0) return 1;
  else if (n == 1) return x;
  else if (n == -1) return 1 / x;
  else if (n % 2 == 0) {
    let pow = myPow(x, n / 2);
    return pow * pow;
  } else if (n % 2 != 0) {
    return x * myPow(x, n - 1);
  }
};

console.log(myPow(2.000, 10));

//x ** 100 等价于 x ** 1100100
var myPow = function (x, n) {
  let pow = 1;
  let isPositive = true;
  if (n < 0) {
    n = -n;
    isPositive = false;
  }
  while (n) {
    if (n & 1) {
      pow *= x;
    }
    x = x * x;
    n = n >> 1;
  }
  return isPositive ? pow : 1 / pow;
};