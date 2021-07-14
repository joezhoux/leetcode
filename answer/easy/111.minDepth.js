"use strict";

var minDepth = function(root) {
  if (!root) return 0;

  let left = minDepth(root.left);
  let right = minDepth(root.right);

  if (root.left && root.right) return Math.min(left, right) + 1;

  return Math.max(left, right) + 1;
};
