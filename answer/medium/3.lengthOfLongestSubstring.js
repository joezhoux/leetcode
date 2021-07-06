"use strict";

var lengthOfLongestSubstring = function (s) {
  let set = new Set(), l = 0, r = 0, len = 0;
  while (r < s.length) {
    if (!set.has(s[r])) {
      set.add(s[r]);
      r++;
      len = Math.max(len, r - l);
    } else {
      set.delete(s[l]);
      l++;
    }
  }
  return len;
};

console.log(lengthOfLongestSubstring("abcabcbb"));