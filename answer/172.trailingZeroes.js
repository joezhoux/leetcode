"use strict";

let n = 3,
n1 = 5,
n2 = 0;
//阶乘尾数0的个数与5出现的次数有关
var trailingZeroes = function(n) {
  let count = 0;
  while (n >= 5) {
    n = Math.floor(n / 5);
    count += n;
  }
  return count;
};

console.log(trailingZeroes(30));
