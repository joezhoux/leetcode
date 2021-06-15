"use strict";

let nums = [-2,1,-3,4,-1,2,1,-5,4];

var maxSubArray = function(nums) {
  let max = nums[0];
  let min = 0;
  let sub = 0;
  for(let i = 0; i < nums.length; i++) {
    sub += nums[i];
    if(sub - min > max) max = sub - min;
    if(sub < min) min = sub;
  }
  return max;
};

//分治
var maxSubArray = function(nums) {
  return max(nums, 0, nums.length - 1);
};

function max(arr, left, right) {
  if(left == right) return arr[left];
  let lmax = -Number.MAX_VALUE;
  let rmax = -Number.MAX_VALUE;
  const mid = ((right - left) >> 1) + left;
  const l = max(arr, left, mid);
  const r = max(arr, mid + 1, right);
  let sum = 0;
  for(let i = mid; i > left; i--) {
    sum += arr[i];
    if(sum > lmax) lmax = sum;
  }
  sum = 0;
  for(let i = mid + 1; i < right; i++) {
    sum += arr[i];
    if(sum > rmax) rmax = sum;
  }
  return Math.max(l, r, lmax + rmax);
}

//动态规划

var maxSubArray = function(nums) {
  const len = nums.length;
  let max = nums[0];
  for(let i = 1; i < len; i++) {
    nums[i] = Math.max(0, nums[i - 1]) + nums[i];
    if(nums[i] > max) max = nums[i];
  }
  return max;
} 
