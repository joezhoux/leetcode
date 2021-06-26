"use strict";

var addStrings = function(num1, num2) {
  let carry = 0;
  let len = Math.max(num1.length, num2.length);
  let sum = "";
  let digit = 0;
  len > num1.length ? num1 = num1.padStart(len, "0") : num2 = num2.padStart(len, "0");
  for (let i = len - 1; i >= 0; i--) {
    digit = (num1[i] ^ 0) + (num2[i] ^ 0) + carry;
    carry = parseInt(digit / 10);
    sum = digit % 10 + sum;
  }
  return carry == 1 ? "1" + sum : sum;
};

console.log(addStrings("456", "777"));
