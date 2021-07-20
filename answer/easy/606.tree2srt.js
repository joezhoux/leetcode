"use strict";

var tree2str = function(root) {
  if (!root) return "";
  let left = tree2str(root.left);
  let right = tree2str(root.right);
  if (right) return `${root.val}(${left})(${right})`;
  else if (left) return `${root.val}(${left})`;
  else return `${root.val}`;
};
