"use strict";

var longestCommonPrefix = function(strs) {
  if (!strs.length) return "";
  let str = strs[0];
  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(str) !== 0) {
      str = str.substring(0, str.length - 1);
    }
  }
  return str;
};
