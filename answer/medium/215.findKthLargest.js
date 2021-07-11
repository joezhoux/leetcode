"use strict";

var findKthLargest = function(nums, k) {
  let ans = mergeSort(nums);
  return ans[k - 1];
};

var mergeSort = function(nums) {
  let len = nums.length;
  if (len < 2) return nums;
  let mid = Math.floor(len / 2);
  let left = nums.slice(0, mid);
  let right = nums.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
}

var merge = function(left, right) {
  let result = [];
  while (left.length && right.length) {
    if (left[0] > right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  while (left.length) result.push(left.shift());
  while (right.length) result.push(right.shift());
  return result;
}

console.log(findKthLargest([3,2,3,1,2,4,5,5,6], 4))
