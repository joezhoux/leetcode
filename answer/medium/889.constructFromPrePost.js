"use strict";

var constructFromPrePost = function(pre, post) {
  let preIndex = 0;
  let loop = ary => {
    if (!ary.length) return null;
    let node = pre[preIndex++];
    let idx = ary.indexOf(pre[preIndex]);
    let tree = new TreeNode(node);
    tree.left =  loop(ary.slice(0, idx + 1));
    tree.right = loop(ary.slice(idx + 1, ary.indexOf(node)));
    return tree;
  }
  return loop(post);
}

