"use strict";

let num = 100,
num1 = -7;

var convertToBase7 = function(num) {
  let isPositive = true;
  let str = "";
  if (num < 0) {
    num = -num;
    isPositive = false;
  }
  if (num == 0) return num + str;
  while (num >= 1) {
    let digit = num % 7;
    num = (num - digit) / 7;
    str = digit + str; 
  }
  return isPositive ? str : "-" + str;
};

console.log(convertToBase7(num1));

//实用法十进制转七进制

nums.toString(7);
