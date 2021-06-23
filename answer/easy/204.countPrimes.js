"use strict";

var countPrimes = function(n) {
  let arr = new Uint8Array(n);
  let count = 0;
  for (let i = 2; i < n; i++) {
    if (arr[i]) continue;
    count++;
    for (let out = i * i; out < n; out += i) {
      arr[out] = 1;
    }
  }
  return count;
};
console.log(countPrimes(999983));
