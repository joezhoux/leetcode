"use strict";

let s = "A man, a plan, a canal: Panama",
s1 = "ab_a";

var isPalindrome = function(s) {
  if (s.length == 1) return true;
  let str = s.replace(/[^0-9a-zA-Z]/g,"").toLowerCase();
  return str == [...str].reverse().join("");
};
console.log(isPalindrome(s1));
