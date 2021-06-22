"use strict";

let x = 123;
let y = -321;
let z = 120;

var reverse = function (x) {
  let r = 0;
  let nums = "";
  let isPositive = true;
  if (x < 0) {
    x = -x;
    isPositive = false;
  }
  do {
    r = x % 10;
    x = (x - r) / 10;
    nums += r;
  } while (x)
  nums = isPositive ? Number(nums) : -Number(nums);
  if (nums >= (-2) ** 31 && nums <= 2 ** 31 - 1) {
    return nums;
  } else {
    return 0;
  }
}; 
console.log(reverse(-51200));
