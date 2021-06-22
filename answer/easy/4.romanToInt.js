"use strict";

let s = "III";
let s1 = "IV";
let s2 = "IX";
let s3 = "LVIII";
let s4 = "MCMXCIV";

var romanToInt = function(s) {
  const obj = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
  };
  let len = s.length;
  let sum = 0;
  let l = 1;
  for (let i = 0; i < len; i++) {
    if (obj[s[i]] < obj[s[l]]) {
      sum += obj[s[l]] - obj[s[i]];
      l++;
      i++;
    } else {
      sum += obj[s[i]];
    }
    l++;
  }
  return sum;
};

console.log(romanToInt(s4));
