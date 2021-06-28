"use strict";

var isIsomorphic = function (s, t) {
  let map = new Map(), set = new Set();
  for (let i = 0; i < s.length; i++) {
    let sStr = s[i], tStr = t[i];
    if (map.has(sStr)) {
      if (map.get(sStr) !== tStr) return false;
    } else {
      if (set.has(tStr)) return false;
      map.set(sStr, tStr);
      set.add(tStr);
    }
  }
  return true;
};

//ES6
var isIsomorphic = function (s, t) {
  const sobj = {}, tobj = {};
  for (let i = 0; i < s.length; i++) {
    if (sobj[s[i]] !== tobj[t[i]]) return false;
    sobj[s[i]] = i;
    tobj[t[i]] = i;
  }
  return true;
};

isIsomorphic()