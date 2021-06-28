"use strict";

var maxArea = function(height) {
  let left = 0;
  let right = height.length - 1;
  let max = 0;
  while (left < right) {
    let maxArea = Math.min(height[left], height[right]) * (right - left);
    if (maxArea > max) max = maxArea;
    //当左边高度比右边高度低时，左移右指针将长度缩短为 right - 1 的做法是没有意义的
    //新形成的面积 (right-1) * height[left] 一定比 right * height[left] 小(水位高度取决于短板)
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return max;
};

//优雅
var maxArea = function(height) {
  let maxArea = 0, l = 0, r = height.length - 1;
  while (l < r) {
    maxArea = Math.max(maxArea, Math.min(height[l], height[r]) * (r - l));
    height[l] <= height[r] ? l++ : r--;
  }
  return maxArea;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]));
