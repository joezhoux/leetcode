"use strict";

let isValid = function (s) {
  const arr = [];
  const map = {
    "(": ")",
    "[": "]",
    "{": "}"
  }
  for (let i = 0; i < s.length; i++) {
    let str = s[i];
    if (["(", "{", "["].indexOf(str) > -1) {
      arr.push(str);
    } else {
      let p = arr.pop();
      if(str != map[p]) return false;
    }
  }
  return !arr.length;
};
