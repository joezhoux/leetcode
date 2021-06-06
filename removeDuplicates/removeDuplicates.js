"use strict";

//双下标
var removeDuplicates = function(nums) {
  const len = nums.length;
  if(len == 0) return 0;
  let mark = 0;
  for(let i = 0; i < len; i++) {
    if(nums[mark] != nums[i]) {
      mark++;
    }
    nums[mark] = nums[i];
  }
  return mark+1;
};

//抛开题目限制，利用Set特性数组去重
let nums = [0,0,1,1,1,2,2,3,3,4];

nums = [...new Set(nums)];

console.log(nums);
