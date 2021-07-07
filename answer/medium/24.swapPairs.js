"use strict";

var swapPairs = function(head) {
  let list = new ListNode(0,null);
  list.next = head;
  let curr = list;
  while (curr.next !== null && curr.next.next !== null) {
    let f = curr.next;
    let s = curr.next.next;
    // curr -> f -> s -> ...
    //第一个节点指向第二个节点的指向 curr -> f -> ...
    //                                    f -> s
    f.next = s.next;
    //第二个节点指向第一个节点 curr -> f -> ...
    //                               f <- s
    s.next = f;
    //当前指向修改为指向第二个节点 curr -> s -> f -> ...
    curr.next = s;
    //将当前项 移动两个节点 0 -> s -> f -> curr -> ...
    curr = curr.next.next;
  }
  return list.next;
};
