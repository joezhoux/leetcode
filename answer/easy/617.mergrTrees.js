"use strict";

var mergeTrees = function(root1, root2) {
  if (!root1 || !root2) return root1 || root2;
  return new TreeNode(root1.val + root2.val,
    mergeTrees(root1.left, root2.left), mergeTrees(root1.right, root2.right));
};
