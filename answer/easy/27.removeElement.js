"use strict";

let nums = [0,1,2,2,3,0,4,2];
let val = 2;

var removeElement = function(nums, val) {
  let len = nums.length;
  if(len == 0) return 0;
  let mark = 0;
  for(let i = 0; i < len; i++) {
    if(nums[i] != val) {
      nums[mark] = nums[i];
      mark++;
    }
  }
  return mark;
};

//只遍历一次

var removeElements = function(nums, val) {
  let len = nums.length;
  if(len == 0) return 0;
  for(let i = 0; i < len;) {
    if(nums[i] == val) {
      nums[i] = nums[len-1];
      len--;
    } else {
      i++;
    }
  }
  return len;
};

//过滤法
let filter = function(nums, val) {
  nums = nums.filter(cur => {
    return !(cur == val);
  })
  return nums;
};

