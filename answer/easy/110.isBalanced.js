"use strict";

var isBalanced = function(root) {
  let diff = 0;

  let loop = node => {
    if (!node) return 0;

    let left = loop(node.left);
    let right = loop(node.right);

    diff = Math.max(diff, Math.abs(left - right));
    return Math.max(left, right) + 1;
  }
  loop(root);
  return diff <= 1;
};
