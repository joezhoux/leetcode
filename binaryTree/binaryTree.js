var node4 = {left: null, right: null, val: 4 }; 
var node5 = {left: null, right: null, val: 5 }; 
var node6 = {left: null, right: null, val: 6 }; 
var node7 = {left: null, right: null, val: 7 };
var node3 = {left: node6, right: node7, val: 3 };
var node2 = {left: node4, right: node5, val: 2 };
var node1 = {left: node2, right: node3, val: 1 };

const tree = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
      right: {
        val: 9
      }
    },
    right: {
      val: 5,
      right: {
        val: 11
      }
    }
  },
  right: {
    val: 3,
    left: {
      val: 6,
      left: {
        val: 12
      }
    },
    right: {
      val: 7
    }
  }
}

//递归前序遍历二叉树 root -> left -> right
function preorderTraversal(root) {
  let ans = [];
  function loop(node) {
    if (node) {
      //存入root
      ans.push(node.val);
      //递归存入left所有节点
      loop(node.left);
      //递归存入right所有节点
      loop(node.right);
    }
  }
  loop(root);
  return ans;
}

//迭代前序遍历二叉树 
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

//递归中序遍历二叉树 left -> root -> right
function inorderTraversal(root) {
  let ans = [];
  function loop(node) {
    if (node) {
      //节点存在优先递归left
      if (node.left) loop(node.left);
      //存入最深层left，若无left 存入root
      ans.push(node.val);
      //最后递归存right
      if (node.right) loop(node.right);
    }
  }
  loop(root);
  return ans;
}

//迭代中序遍历二叉树
function inorderTraversal(root) {
  let ans = [];
  let stack = [];
  while (stack.length || root) {
    if (root) {
      //节点存在存入栈中
      stack.push(root);
      //优先遍历left 到最深层
      root = root.left;
    } else {
      //将最深层left节点 或 根节点 弹出
      let p = stack.pop();
      ans.push(p.val);
      //最后处理right 节点
      if (p.right) {
        root = p.right;
      }
    }
  }
  return ans;
}

//递归后序遍历二叉树 left -> right -> root
function postorderTraversal(root) {
  let ans = [];
  function loop(node) {
    if (node) {
      //先left后right
      if (node.left) loop(node.left);
      if (node.right) loop(node.right);
    }
    //先left后right，最后存root
    ans.push(node.val);
  }
  loop(root);
  return ans;
}

//迭代后序遍历二叉树 
function postorderTraversal(root) {
  let ans = [];
  let stack = [root];
  while (stack.length) {
    if (root.left && !root.mark) {
      //使用continue 优先遍历到left最深层，并在每一层打上标记
      root.mark = 'left';
      root = root.left;
      //栈记录每一层
      stack.push(root);
      continue;
    }
    //首次到达left最深层，有right进 无则出栈
    if (root.right && root.mark != 'right') {
      //continue 遍历到right最深层 每层打上标记（覆盖了left的标记）
      //所以判断条件 不是 !root.mark，而是 root.mark != 'right'
      root.mark = 'right';
      root = root.right;
      //栈记录每一层
      stack.push(root);
      continue;
    }
    //将节点弹出后，重置 root 为栈最后一个节点
    let p = stack.pop();
    ans.push(p.val);
    root = stack[stack.length - 1];
  }
  return ans;
}

//广度优先 一层一层从左往右递归
function levelOrder(root) {
  let ans = [];
  let queue = [];
  function loop(node) {
    if (node) {
      ans.push(node.val);
      //队列先进先出
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
      
      loop(queue.shift());
    }
  }
  loop(root);
  return ans;
}

//迭代广度遍历
function levelOrder(root) {
  let ans = [];
  let queue = [root];

  while (queue.length) {
    let node = queue.shift();
    if (node) {
      ans.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
  return ans;
}

var maxDepth = function(root) {
  if (!root) return 0;
  let dep = node => {
    if (!node) return 0;
    return Math.max(dep(node.left), dep(node.right)) + 1;
  }
  return dep(root);
};

var sortedArrayToBST = function(nums, start=0, end = nums.length-1) {
  if(start<=end){
      let mid = Math.floor((start+end)/2);
      // console.log(mid, end)
      let root = new TreeNode(nums[mid]);
      root.left = sortedArrayToBST(nums, start, mid-1);
      root.right = sortedArrayToBST(nums, mid+1, end);
      return root;
  }
  return null;
};

//广度优先 给定数组 一层一层创建二叉树
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

console.log(maxDepth(tree));
