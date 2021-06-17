'use strict';

let s = "Hello World";
let s1 = " va ";

var lengthOfLastWord = function (s) {
  let len = s.length -1;
  let count = 0;
  if (s == " ") return count;
  for (let i = len; i >= 0; i--) {
    
    if(s[i] == " " && i >= 0) {
      if(count == 0) continue;
      break;
    } else {
      count++;
    }
  }
  return count;
};

console.log(lengthOfLastWord(s1));
