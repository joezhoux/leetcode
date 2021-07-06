"use strict";

var findMedianSortedArrays = function(nums1, nums2) {
  if (nums1.length > nums2.length) {
    [nums1, nums2] = [nums2, nums1];
  }
  let m = nums1.length;
  let n = nums2.length;
  let low = 0;
  let hight = m;
  while (low <= hight) {
    let mid1 = Math.floor((low + hight) / 2);
    let mid2 = Math.floor((m + n + 1) / 2 - mid1);
    let maxLeft1 = mid1 == 0 ? -Infinity : nums1[mid1 - 1];
    let minRight1 = mid1 == m ? Infinity : nums1[mid1];
    let maxLeft2 = mid2 == 0 ? -Infinity : nums2[mid2 - 1];
    let minRight2 = mid2 == n ? Infinity : nums2[mid2];
    if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
      return (m + n) % 2 == 0
        ? (Math.max(maxLeft1, maxLeft2) + Math.min(minRight1, minRight2)) / 2
        : Math.max(maxLeft1, maxLeft2);
    } else if (maxLeft1 > minRight2) {
      hight = mid1 - 1;
    } else {
      low = mid1 + 1;
    }
  }
};

console.log(findMedianSortedArrays([1,2],[3,4]));
