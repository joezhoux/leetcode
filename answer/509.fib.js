"use strict";

let n = 2,
n1 = 3,
n2 = 4;

var fib = function(n) {
  if (n < 2) return n;
  let f0 = 0, f1 = 1;
  for (let i = 2; i <= n; i++) {
    [f0, f1] = [f1, f0 + f1];
  }
  return f1;
};

// 斐波那契数列第n项公式 f(n) = ((1 + Math.sqrt(5)) ** n - (1 - Math.sqrt(5)) ** n) / (2 ** n * Math.sqrt(5)) 
var fib = function(n) {
  const sqrt = Math.sqrt(5);
  return Math.floor(((1 + sqrt) ** n - (1 - sqrt) ** n) / (2 ** n * sqrt));
};

console.log(fib(16));
