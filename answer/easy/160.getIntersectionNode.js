"use strict";

// 无论是否有交点 结点数 A+B == B+A 即 A+C+B+C == B+C+A+C
//     A: 4 -> 1 ->
//                 C: 8 -> 4 -> 5
// B: 5 -> 6 -> 1 ->
var getIntersectionNode = function(headA, headB) {
  let a = headA, b = headB;
  while (a != b) {
    //A+C+B+C: 4 -> 1 -> 8 -> 4 -> 5 -> 5 -> 6 -> 1 -> 8 -> 4 -> 5 -> null
    a = a === null ? headB : a.next;
    //B+C+A+C: 5 -> 6 -> 1 -> 8 -> 4 -> 5 -> 4 -> 1 -> 8 -> 4 -> 5 -> null
    b = b === null ? headA : b.next;
  }
  return a;
};
