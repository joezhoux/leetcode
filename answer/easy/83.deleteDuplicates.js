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


var deleteDuplicates = function(head) {
  if (!head) return null;
  let curr = head;
  let next = head.next;
  while (next) {
    if (next.val == curr.val) {
      curr.next = next.next;
    } else {
      curr = curr.next;
    }
    next = next.next;
  }
  return head;
};

console.log(deleteDuplicates([1,1,2,3,3]))
