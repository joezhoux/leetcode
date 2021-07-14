"use strict";

var levelOrder = function(root) {
  if (!root) return [];
  let queue = [root];
  let ans = [];
  while (queue.length) {
    let row = [];
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      let node = queue.shift();
      row.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    ans.push(row);
  }
  return ans;
};
