"use strict";

var addBinary = function(a, b) {
  let len = Math.max(a.length,b.length);
  a.length == len ? b = b.padStart(len, "0") : a = a.padStart(len, "0");
  let carry = 0;
  let arr = new Uint8Array(len);
  let aArr = Uint8Array.from(a);
  let bArr = Uint8Array.from(b);
  for (let i = len - 1; i >= 0; i--) {
    let sum = aArr[i] + bArr[i] + carry;
    arr[i] = sum % 2;
    carry = sum >> 1;

  }
  return carry ? [carry, ...arr].join("") : arr.join(""); 
};



var addBinary = function(a, b) {
  a = BigInt(`0b${a}`);
  b = BigInt(`0b${b}`);
  let c = a + b;
  return c.toString(2);
};
console.log(addBinary("1", "111"));
