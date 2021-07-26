"use strict";

var isSymmetric = function(root) {
  if (!root.left && !root.right) return true
  let dfs = (l, r) => {
    if (!l && !r) return true
    if (!l || !r) return false
    return l.val === r.val && dfs(l.left, r.right) && dfs(l.right, r.left)
  }
  return dfs(root.left, root.right)
};
