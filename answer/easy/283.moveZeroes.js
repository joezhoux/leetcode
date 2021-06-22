"use strict";

let nums = [0,1,0,3,12],
nums1 = [0];

var moveZeroes = function(nums) {
  let mark = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      nums[mark] = nums[i];
      mark++;
    }
  }
  for (let i = mark; i < nums.length; i++) {
    nums[i] = 0;
  }
  return nums;
};

console.log(moveZeroes(nums));
