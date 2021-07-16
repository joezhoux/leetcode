"use strict";

var postorderTraversal = function(root) {
  if (!root) return [];
  let ans = [];
  let loop = node => {
    if (node) {
      if (node.left) loop(node.left);
      if (node.right) loop(node.right);
    }
    ans.push(node.val);   
  }
  loop(root)
  return ans;
};

var postorderTraversal = function(root) {
  if (!root) return [];
  let ans = [];
  let stack = [root];
  while (stack.length) {
    if (root.left && !root.mark) {
      root.mark = 'l';
      root = root.left;
      stack.push(root);
      continue;
    }
    if (root.right && root.mark != 'r') {
      root.mark = 'r';
      root = root.right;
      stack.push(root);
      continue;
    }
    let p = stack.pop();
    ans.push(p.val);
    root = stack[stack.length - 1];
  }
  return ans;
};
