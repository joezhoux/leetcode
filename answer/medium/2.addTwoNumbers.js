"use strict";

var addTwoNumbers = function(l1, l2) {
  let list = new ListNode(0, null);
  let carry = 0;
  let curr = list;
  while (l1 || l2 || carry) {
    if (l1) {
      carry += l1.val;
      l1 = l1.next;
    }
    if (l2) {
      carry += l2.val;
      l2 = l2.next;
    }
    curr.next = new ListNode(carry % 10);
    carry = parseInt(carry / 10);
    curr = curr.next;
  }
  return list.next;
};
