"use strict";

//链表节点
class ListNode {
  constructor(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
  }
}
//链表头
class LinkList {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  append(val) {
    let newNode = new ListNode(val);
    if(this.length==0){
      this.head = newNode;
    } else {
      let curr = this.head;
      while(curr.next){
        curr = curr.next;
      }
      curr.next = newNode;
    }
    this.length++;
  }
}

// let l1 = new LinkList();
// l1.append(1);
// l1.append(2);
// l1.append(4);

//数组转链表
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
// let l2 = [1,3,4];
// let a = arrayToList(l2);
// console.dir(a);

//链表转数组
function listToArray(head) {
  if(!head) {
    return [];
  }
  let arr = [];
  let h = head;
  while(h) {
    arr.push(h.val);
    h = h.next;
  }
  return arr;
}

// let b = listToArray(a);
// console.log(b);

var mergeTwoLists = function(l1, l2) {
  if(l1==null) return l2;
  if(l2==null) return l1;
  if(l1.val < l2.val) {
      l1.next = mergeTwoLists(l1.next,l2);
      return l1;
  } else {
      l2.next = mergeTwoLists(l1,l2.next);
      return l2;
  }
};

var mergeTwoLists = function(l1, l2) {
  let list = new ListNode(0, null);
  let currentNode = list;
  while (l1 && l2) {
    if (l1.val < l2.val) {
      currentNode.next = l1;
      l1 = l1.next;
    } else {
      currentNode.next = l2;
      l2 = l2.next;
    }
    currentNode = currentNode.next;
  }
  currentNode.next = l1 || l2;
  return list.next;
};
