"use strict";

var sortList = function(head) {
  if (!head || !head.next) return head;
  let slow = head, fast = head;
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  let mid = slow.next;
  slow.next = null;
  return sort(sortList(head), sortList(mid)); 
};

function sort(m, n) {
  let list = new ListNode(0);
  let temp = list;
  while (m && n) {
    temp.next = (m.val < n.val) ? m : n;
    temp = temp.next;
    if (m.val < n.val) m = m.next;
    else n = n.next;
  }
  temp.next = m || n;
  return list.next;
}
