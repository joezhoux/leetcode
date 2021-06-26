"use strict";

var search = function(nums, target) {
  let r = nums.length - 1;
  let l = 0;
  while (l <= r) {
    let mid = ((r - l) >> 1) + l;
    if (target == nums[mid]) {
      return mid;
    } else if(target > nums[mid]) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return -1;
};
console.log(search([-1,0,3,5,9,12], 2));
