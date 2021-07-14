"use strict";

var inorderTraversal = function(root) {
  let ans = [];
  let stack = [];
  while (stack.length || root) {
    if (root) {
      stack.push(root);
      root = root.left;
    } else {
      let p = stack.pop();
      ans.push(p.val);
      if (p.right) root = p.right;
    }
  }
  return ans;
};

var inorderTraversal = function(root) {
  if (!root) return [];
  return [...inorderTraversal(root.left), root.val, ...inorderTraversal(root.right)];
}
