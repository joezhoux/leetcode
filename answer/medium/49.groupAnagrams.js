"use strict";

var groupAnagrams = function(strs) {
  let map = new Map();
  strs.forEach(str => {
    const sortStr = [...str].sort().join("");
    if (!map.has(sortStr)) {
      map.set(sortStr, []);
    }
    const val = map.get(sortStr);
    val.push(str);
    map.set(sortStr, val);
  });
  return Array.from(map.values());
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
