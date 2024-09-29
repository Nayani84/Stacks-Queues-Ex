class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
      this.prev = null;
    }
  }
  
  class Deque {
    constructor() {
      this.left = null;
      this.right = null;
      this.size = 0;
    }
  
    /** push(val): add new value to end of the dequeue. Returns undefined. */
  
    appendLeft(val) {
      const newNode = new Node(val);
      if (!this.left) {
        this.left = newNode;
        this.right = newNode;
      } else {
        newNode.next = this.left;
        this.left.prev = newNode;
        this.left = newNode;
      }
      this.size++;
    }
  
    appendRight(val) {
      const newNode = new Node(val);
      if (!this.right) {
        this.left = newNode;
        this.right = newNode;
      } else {
        newNode.prev = this.right;
        this.right.next = newNode;
        this.right = newNode;
      }
      this.size++;
    }
  
    popLeft() {
      if (!this.left) throw new Error("Dequeue is empty");
      const removed = this.left;
      if (this.left === this.right) {
        this.right = null;
      }
      this.left = this.left.next;
      this.size--;
      return removed.val;
    }
  
    popRight() {
      if (!this.right) throw new Error("Dequeue is empty");
      const removed = this.right;
      if (this.left === this.right) {
        this.left = null;
      }
      this.right = this.right.prev;
      this.size--;
      return removed.val;
    }
  
    peekleft() {
      if (!this.left) throw new Error("Dequeue is empty");
      return this.left.val;
    }
  
    peekRight() {
      if (!this.right) throw new Error("Dequeue is empty");
      return this.right.val;
    }
  
    isEmpty() {
      return this.size === 0;
    }
  }
  
  module.exports = Deque;