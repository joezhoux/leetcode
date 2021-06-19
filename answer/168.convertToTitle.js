"use strict";

let columnNumber = 1,
columnNumber1 = 28,
columnNumber2 = 701,
columnNumber3 = 2147483647;

//周期为26，2147483647%26 得出output的最后一个字母 即26个字母的第 23 个 w
// (2147483647 - 23) / 26 去掉w 除26得新得周期，再  (2147483647 - 23) / 26 % 26 得output倒数第二个字母
// 依次循环下去直到 columnNumber / 26 > 0;
var convertToTitle = function(columnNumber) {
  if(columnNumber < 27) return String.fromCharCode(columnNumber + 64);
  let str = "";
  while (columnNumber > 0) {
    let digit = columnNumber % 26;
    digit = digit == 0 ? 26 : digit;
    str = String.fromCharCode(digit + 64) + str;
    columnNumber = (columnNumber - digit) / 26;
  }
  return str;
};

console.log(convertToTitle(columnNumber3));

