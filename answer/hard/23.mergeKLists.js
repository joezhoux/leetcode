"use strict"

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

function arrayToList(arr){
  if(!arr.length) {
    return null;
  }
  let node = null;
  let head = {val: arr[0],next:null};
  //存储当前节点
  let curr = head; 
  for(let i = 1; i < arr.length; i++) {
    node = {val: arr[i],next:null};
    curr.next = node;
    curr = node;
  }
  return head;
}

let arr = [arrayToList([2,4,5]), arrayToList([1,3,4]), arrayToList([3,8,9]), arrayToList([2,6,7])]

var mergeKLists = function(lists) {
  if (!lists.length) return null
  if (lists.length === 1) return lists[0]
  let list = new ListNode()
  let ans = list
  let heap = new MinHeap()
  for (let n of lists) {
    if (n) {
      heap.push(n)
    }
  }
  while (heap.index) {
    let node = heap.pop()
    ans.next = node
    ans = ans.next
    if (node.next) {
      heap.push(node.next)
    }
  }
  return list.next
};

class MinHeap {
  constructor() {
    this.heap = []
    this.index = 0
  }
  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
  }
  heapUp(idx) {
    //当i位置不是首个值，即根节点
    while (idx > 0) {
      //父节点为与子节点关系为 idx = 2n + 1 即父节点下标为
      // (idx - 1) / 2
      let pIdx = (idx - 1) >> 1
      //小的值从idx位置向上调整
      if (this.heap[idx].val < this.heap[pIdx].val) {
        this.swap(idx, pIdx)
        //交换完最小值后交换index用于跳出循环
        idx = pIdx
      } else {
        return
      }
    }
  }
  //从idx位置开始向下调整
  heapDown(idx) {
    let len = this.heap.length
    while (idx < len) {
      let minIdx = idx
      let lIdx = minIdx * 2 + 1
      let rIdx = minIdx * 2 + 2
//如果下标没有超出数组长度，并且对应的值小于根的值，idx向下调整
      if (lIdx < len && this.heap[lIdx].val < this.heap[minIdx].val) {
        minIdx = lIdx
      }
      if (rIdx < len && this.heap[rIdx].val < this.heap[minIdx].val) {
        minIdx = rIdx
      }
//如果上述两个条件都不满足，则不进行交换
      if (minIdx !== idx) {
        this.swap(minIdx, idx)
        idx = minIdx
      } else {
        return
      }
    }
  }
  push(val) {
    //往堆增加元素
    this.heap[this.index++] = val
    //判断该元素是否需要上调
    this.heapUp(this.heap.length - 1)
    return this
  }
  pop() {
    //将堆顶元素删除
    let el = this.heap[0]
    //将最后的元素放置到堆顶
    this.heap[0] = this.heap.pop()
    this.index--
    //判断改元素是否需要下调
    this.heapDown(0)
    return el
  }
}


console.log(mergeKLists(arr))


// function heapSort(ary) {
//   var pq = new MinHeap()
//   for (var i = 0; i < ary.length; i++) {
//     pq.push(ary[i])
//   }
//   for (var i = 0; i < ary.length; i++) {
//     ary[i] = pq.pop()
//   }
//   return ary
// }
