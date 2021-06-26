"use strict";

var merge = function(nums1, m, nums2, n) {
  let len1 = m - 1, len2 = n - 1, len = m + n - 1;
  while (len1 >= 0 && len2 >= 0) {
    if (nums1[len1] < nums2[len2]) {
      nums1[len--] = nums2[len2--];
    } else {
      nums1[len--] = nums1[len1--];
    }
  }
  while(len2 >= 0) {
    nums1[len--] = nums2[len2--];
  } 
};

console.log(merge([1,2,3,0,0,0],3,[2,5,6],3));
