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

var removeNthFromEnd = function(head, n) {
  let h = arrayToList(head);
  let delay = h;
  let curr = h;
  for (let i = 0; i < n; i++) curr = curr.next;
  if (curr === null) return delay.next;
  while (curr.next) {
    curr = curr.next;
    delay = delay.next;
  }
  delay.next = delay.next.next;
  return h;
};

console.log(removeNthFromEnd([1,2,3,4,5], 2));
