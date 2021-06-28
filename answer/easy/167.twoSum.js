"use strict";

var twoSum = function(numbers, target) {
  if (numbers.length == 2) return [1, 2];
  let l = 0, r = numbers.length - 1;
  while (l < r) {
    if (target > numbers[l] + numbers[r]) {
      l++;
    } else if (target < numbers[l] + numbers[r]) {
      r--;
    } else {
      break;
    }
  }
  return [l + 1, r + 1];
};

console.log(twoSum([2,7,11,15], 9));
