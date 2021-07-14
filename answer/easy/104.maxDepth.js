"use strict";

var maxDepth = function(root) {
  if (!root) return 0;
  let dep = node => {
    if (!node) return 0;
    return Math.max(dep(node.left), dep(node.right)) + 1;
  }
  return dep(root);
};

//队列 利用广度的迭代法，每进一层循环计数加1
var maxDepth = function(root) {
  if (!root) return 0;
  let queue = [root];
  let count = 0;
  while (queue.length) {
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      let node = queue.shift();
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    count++;
  }
  return count;
};
