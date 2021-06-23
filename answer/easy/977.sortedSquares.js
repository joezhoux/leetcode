"use strict";

var sortedSquares = function(nums) {
  return nums.map(a => a ** 2).sort((a, b) => a - b);
};

// O(n)
var sortedSquares = function(nums) {
  let len = nums.length;
  const arr = new Array(len);
  let l = 0;
  let r = len - 1;
  for (let i = len - 1; i >= 0 ; i--) {
    if (Math.abs(nums[l]) < Math.abs(nums[r])) {
      arr[i] = nums[r] ** 2;
      r--;
    } else {
      arr[i] = nums[l] ** 2;
      l++;
    }
  }
  return arr;
};


console.log(sortedSquares([-7,-3,2,3,11]));
