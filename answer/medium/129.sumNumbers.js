"use strict";

var sumNumbers = function(root) {
  let sum = 0;
  let loop = (node, cur) => {
    if (!node) return;
    cur = cur * 10 + node.val;
    if (!node.left && !node.right) {
      sum += cur;
      return; 
    }
    if (node.left) loop(node.left, cur);
    if (node.right) loop(node.right, cur);
  }
  loop(root, 0);
  return sum;
};
