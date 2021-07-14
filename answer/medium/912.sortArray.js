"use strict";

var sortArray = function(nums) {
  let len = nums.length;
  if (len < 2) return nums;
  let mid = Math.floor(len / 2);
  let left = nums.slice(0, mid);
  let right = nums.slice(mid);
  return merge(sortArray(left), sortArray(right));
};

var merge = function(left, right) {
  let ans = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      ans.push(left.shift());
    } else {
      ans.push(right.shift());
    }
  }
  while (left.length) ans.push(left.shift());
  while (right.length) ans.push(right.shift());
  return ans;
}