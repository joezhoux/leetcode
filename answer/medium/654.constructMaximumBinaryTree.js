"use strict";

var constructMaximumBinaryTree = function(nums) {
  if (nums.length === 0) return null;
  let max = Math.max(...nums);
  let index = nums.indexOf(max);
  let root = new TreeNode(max);
  root.left = constructMaximumBinaryTree(nums.slice(0, index));
  root.right = constructMaximumBinaryTree(nums.slice(index + 1));
  return root;
};
