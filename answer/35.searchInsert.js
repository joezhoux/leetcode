"use strict";

let nums = [1,3,5,6];
let target = 5;
let target1 = 7;

// var searchInsert = function (nums, target) {
//   let counter = 0;
//   for (let val of nums) {
//     if (val == target) {
//       counter++;
//       return nums.indexOf(val);
//     } else if (target < val && counter == 0) {
//       nums.splice(nums.indexOf(val), 0, target);
//       break;
//     } else if (nums.indexOf(val) == nums.length - 1) {
//       nums.push(target);
//       break
//     }
//   }
//   return nums.indexOf(target);
// };

//二分查找
var searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while(left <= right) {
    //取中值的另一种操作 left + ((rigth - left) >> 1)
    let mid = left + Math.floor((right - left)/2);
    if (target <= nums[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return left;
};

console.log(searchInsert(nums, target1));
