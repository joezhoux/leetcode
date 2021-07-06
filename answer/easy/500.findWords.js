"use strict";

var findWords = function(words) {
  let re1 = /^[qwertyuiop]+$/i, re2 = /^[asdfghjkl]+$/i,
  re3 = /^[zxcvbnm]+$/i;
  return words.filter(w => (re1.test(w) || re2.test(w) || re3.test(w)));  
};

console.log(findWords(["Hello","Alaska","Dad","Peace"]))
