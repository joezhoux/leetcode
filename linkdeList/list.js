class ListNode {
  constructor(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.length = 0;
  }
  push(val) {
    let node = new ListNode(val);
    if (!this.top) {
      this.top = node;
      this.length++;
    } else {
      node.next = this.top;
      this.top = node;
      this.length++;
    }
  }
  pop() {
    let res = this.top || undefined;
    if (this.top) {
      this.top = this.top.next;
      this.length--;
    }
    return res;
  }
  peek() {
    return  !this.top ? null : this.top.val;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.tail = null;
    this.length = 0;
  }
  enqueue(val) {
    let node = new ListNode(val);
    if (!this.front) {
      this.front = this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
  }
  dequeue() {
    if (this.front) {
      let res = this.front.val;
      this.front = this.front.next;
      if (!this.front) this.tail = null;
      this.length--;
      return res;
    }
  }
}

