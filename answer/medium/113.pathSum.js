"use strict";

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

var arrayToTree = function (arr) {
  let root = new TreeNode(arr[0]);
  let node = [root];
  let i = 1;
  loop:
  for (let n of node) {
    //标记排除n节点为0时不需要挂载子节点
    if (n === 0) continue loop;
    //判断数组的null值，使用0代替, n.left赋空值时报错
    node.push(n.left = arr[i] === null ? 0 : new TreeNode(arr[i]));
    i++;
    if (i == arr.length) return root;
    node.push(n.right = arr[i] === null ? 0 : new TreeNode(arr[i]));
    i++;
    if (i == arr.length) return root;
  }
};

let r = arrayToTree([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1]);

var pathSum = function (root, sum) {
  const result = [];
  function traverse(node, t, ar) {
    if (!node) return;
    //判断节点是否 满足到叶子节点 且运算后值等于目标
    if (node.val === t && !node.left && !node.right) {
      ar.push(node.val);
      //加入目标数组 ar.slice()返回新数组对象, r.push(ar)此情况 r会跟着ar的变动
      result.push(ar.slice());
      //将ar里的值弹出
      ar.pop();
      return;
    }
    ar.push(node.val);
    //递归到最深层，ar数组存储路径上的值
    traverse(node.left, t - node.val, ar);
    traverse(node.right, t - node.val, ar);
    //在不满足if条件时，递归一层一层回溯，并删除存储的值
    ar.pop();
  }
  traverse(root, sum, []);
  return result;
};

console.log(pathSum(r, 22));
