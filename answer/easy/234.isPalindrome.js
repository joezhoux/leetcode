"use strict";

var isPalindrome = function(head) {
  let curr = head, half = head, temp, prev;
  while (curr && curr.next) {
    // 1 -> 2 -> 3 -> 2 -> 1 -> null
    //          half: 3 -> 2 -> 1 -> null
    //                    curr: 1 -> null
    curr = curr.next.next;
    half = half.next;
  }
  // prev: 3 -> 2 -> 1 -> null
  prev = half;
  // half: 2 -> 1 -> null
  half = half.next;
  // prev: 3 -> null
  prev.next = null;
  while (half) {
    // temp: 1 -> null
    temp = half.next;
    // half: 2 -> 3 -> null
    half.next = prev;
    // prev: 2 -> 3 -> null
    prev = half;
    // half: 1 -> null
    half = temp;
  }
  // prev: 1 -> 2 -> 3 -> null
  curr = head; // curr: 1 -> 2 -> 3 -> 2 -> 1 -> null
  half = prev; // half: 1 -> 2 -> 3 -> null
  while (half) {
    if (curr.val !== half.val) {
      return false;
    }
    else {
      curr = curr.next;
      half = half.next;
    }
  }
  return true;
};
