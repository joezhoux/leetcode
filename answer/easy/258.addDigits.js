"use strict";

var addDigits = function(num) {
  if (num < 11) return num;
  num = num.toString();
  while (num.length > 1) {
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
      sum += parseInt(num[i]);
    }
    num = sum.toString();
  }
 return parseInt(num);
};

console.log(addDigits(38));
