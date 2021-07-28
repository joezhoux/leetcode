"use strict";

var nthUglyNumber = function(n) {
  let arr = [1]
  let idx2 = idx3 = idx5 = 0
  let ugly = u2 = u3 = u5 = 0
  while (arr.length < n) {
    u2 = arr[idx2] * 2
    u3 = arr[idx3] * 3
    u5 = arr[idx5] * 5
    ugly = Math.min(u2, u3, u5)
    if (ugly == u2) idx2++
    if (ugly == u3) idx3++
    if (ugly == u5) idx5++
    arr.push(ugly)
  }
  return arr[n - 1]
};
