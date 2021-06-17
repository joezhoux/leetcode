"use strict";

let x = 121;
let y = -121;
let z = 10;

var isPalindrome = function(x) {
  if(x < 0) return false;
  x = x.toString();
  let len = x.length - 1;
  let l = 0;
  let r = len;
  while (l <= r) {
    if(x[l] != x[r]) {
      return false
    }
    l++;
    r--;
  }
  return true;
};

console.log(isPalindrome(9));
