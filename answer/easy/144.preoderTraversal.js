"use strict";

var preorderTraversal = function(root) {
  let ans = [];
  let loop = node => {
    if (node) {
      ans.push(node.val);
      postorderTraversal(node.left);
      postorderTraversal(node.right);
    }
  }
  loop(root);
  return ans;
};
