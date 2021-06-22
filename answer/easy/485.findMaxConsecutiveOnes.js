"use strict";

let nums = [1,1,0,1,1,1],
nums1 = [1,0,1,1,0,1];

var findMaxConsecutiveOnes = function(nums) {
  let sum = 0;
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 1) {
      sum += 1;
    } else {
      sum = 0;
    }
    if (sum > max) max = sum;
  }
  return max;
};
