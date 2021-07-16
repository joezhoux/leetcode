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

function preorderTraversal(root) {
  let ans = [];
  let stack = [root];
  while (stack.length) {
    //利用栈后进先出
    let node = stack.pop();
    //先存root
    ans.push(node.val);
    //栈原来 先进后出 所有先存 right 节点
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }
  return ans;
}
