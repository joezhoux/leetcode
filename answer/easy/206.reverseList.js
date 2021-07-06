"use strict";

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

var reverseList = function(head) {
  let h = arrayToList(head);
  let prev = null;
  let curr = h;
  let next = null;
  while (curr !== null) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
};

var reverseList = function(head) {
  let h = arrayToList(head);
  let [prev, current] = [null, h]
  while(current) {
    [current.next, prev, current] = [prev, current, current.next];
  }
  return prev
};

console.log(reverseList([1,2,3,4,5]));
