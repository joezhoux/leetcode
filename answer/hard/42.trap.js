"use strict";

var trap = function(height) {
  if (!height) return 0;
  let ans = 0, l = 0, lmax = 0,
  r = height.length - 1, rmax = 0;
  while (l < r) {
    if (height[l] < height[r]) {
      height[l] >= lmax ? lmax = height[l] : ans += lmax - height[l];
      l++;
    } else {
      height[r] >= rmax ? rmax = height[r] : ans += rmax - height[r];
      r--;
    }
  }
  return ans;
};

console.log(trap([4,2,0,3,2,5]))
