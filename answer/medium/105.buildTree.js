"use strict";

var buildTree = function(preorder, inorder) {
  if (!inorder.length) return null;
  let root = new TreeNode(preorder.shift());
  let rootIndex = inorder.indexOf(root.val);

  root.left = buildTree(preorder, inorder.slice(0, rootIndex));
  root.right = buildTree(preorder, inorder.slice(rootIndex + 1));
  return root;
};
