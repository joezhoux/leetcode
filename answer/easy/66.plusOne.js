"use strict";

let digits = [1,2,3],
digits1 = [6,1,4,5,3,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
digits2 = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3];

var plusOne = function(digits) {
  let isNine = true;
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] > 8) {
      digits[i] = 0;
    } else {
      digits[i] += 1;
      isNine = false;
      break;
    }
  }
  if (isNine) digits.unshift(1);
  return digits;
};

//大整数
var plusOne = function(digits) {
  return (BigInt(digits.join("")) + BigInt(1)).toString().split("");
};

console.log(plusOne(digits1));
