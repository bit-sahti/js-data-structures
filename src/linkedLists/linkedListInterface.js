import { NotImplementedError } from '../utils/notImplementedError.js';

class LinkedListInterface {
  constructor(head = null) {
    this.head = head;
    this.tail = this.head;
  }

  addInitialNode(node = null) {
    this.head = node;
    this.tail = this.head;
    this.length = node ? 1 : 0;
  }

  isEmpty() {
    return this.head === null;
  }

  getTail() {
    return this.tail;
  }

  addToStart() {
    throw new NotImplementedError();
  }

  addToEnd() {
    throw new NotImplementedError();
  }

  addToIndex() {
    throw new NotImplementedError();
  }

  deleteFromStart() {
    throw new NotImplementedError();
  }

  deleteFromEnd() {
    throw new NotImplementedError();
  }

  deleteFromIndex() {
    throw new NotImplementedError();
  }

  clear() {
    if (this.head) {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
  }
}

export { LinkedListInterface };
