"use strict";

var buildTree = function(inorder, postorder) {
  if (!inorder.length) return null;
  let root = new TreeNode(postorder.pop());
  let rootIndex = inorder.indexOf(root.val);

  root.right = buildTree(inorder.slice(rootIndex + 1), postorder);
  root.left = buildTree(inorder.slice(0, rootIndex), postorder);
  return root;
};
