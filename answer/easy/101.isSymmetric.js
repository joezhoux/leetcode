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

//BFS queue
var isSymmetric = function(root) {
  if (!root.left && !root.right) return true
  let queue = [root.left, root.right]
  let l = null, r = null
  while (queue.length) {
    l = queue.shift();
    r = queue.shift();
    if (!l && !r) continue
    if (!l || !r) return false
    if (l.val !== r.val) return false
    queue.push(l.left)
    queue.push(r.right)
    queue.push(l.right)
    queue.push(r.left)
  }
  return true
};