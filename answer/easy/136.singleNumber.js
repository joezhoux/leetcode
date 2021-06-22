"use strict";

let nums = [2, 2, 1],
nums1 = [4, 1, 2, 1, 2],
nums2 = [1];

var singleNumber = function(nums) {
  let sum = 0;
  let len = nums.length;
  if (len == 1) return nums[0];
  for (let i = 0; i < len; i++) {
    sum ^= nums[i];
  }
  return sum;
};
