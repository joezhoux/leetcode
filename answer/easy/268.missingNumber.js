"use strict";

let nums = [3, 0, 1],
nums1 = [0, 1],
nums2 = [9,6,4,2,3,5,7,0,1];

var missingNumber = function(nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += i - nums[i];
  }
  return sum + nums.length;
};
