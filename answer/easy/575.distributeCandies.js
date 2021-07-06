"use strict";

var distributeCandies = function(candyType) {
  let set = [...new Set(candyType)];
  let n = candyType.length / 2;
  return Math.min(set.length, n);
};
