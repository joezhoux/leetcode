"use strict";

var twoSum = function(nums, target) {
  let result = [];
  let len = nums.length;
  for(let i = 0; i < len; i++){
      let j = nums.indexOf(target - nums[i]);
      if(j > -1 && i !== j){
          result.push(i, j);
          break; 
      }
  }
  return result;  
};

var twoSum = function(nums, target) {
  let map = new Map();
  let len = nums.length;
  for (let i = 0; i < len; i++) {
    if (map.has(target - nums[i])) {
      return [map.get(target - nums[i]), i];
    } else {
      map.set(nums[i], i);
    }
  }
};
