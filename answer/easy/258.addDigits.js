"use strict";

var addDigits = function(num) {
  if (num < 10) return num;
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

//Math way abcd % 9 = (a * (1 + 999) + b * (1 + 99) + c * (1 + 9) + d) % 9
//                  = (a + a * 999 + b + b * 99 + c + c * 9 + d) % 9
//                  = (a + b + c + d) % 9
// abcd % 3 也一样
var addDigits = function(num) {
  if (num == 0) return 0;
  return num % 9 == 0 ? 9 : num % 9;
};


console.log(addDigits(38));
