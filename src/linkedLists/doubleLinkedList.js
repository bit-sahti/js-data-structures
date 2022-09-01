import { LinkedListInterface } from './linkedListInterface.js';

class DoubleLinkedList extends LinkedListInterface {
  constructor(head = null) {
    super();

    this.addInitialNode(head);
  }

  addInitialNode(node) {
    this.head = node ?? null;
    this.tail = this.head;
    this.length = node ? 1 : 0;
  }

  addToStart(node) {
    if (!this.head) return this.addInitialNode(node);

    this.head.previous = node;
    node.next = this.head;
    this.head = node;

    this.length++;
  }

  addToEnd(node) {
    if (!this.head) return this.addInitialNode(node);

    node.previous = this.tail;
    this.tail.next = node;
    this.tail = node;

    this.length++;
  }

  addToIndex(index, nodeToInsert) {
    if (!index) return this.addToStart(nodeToInsert);
    if (index === this.length) return this.addToEnd(nodeToInsert);

    let currentNode = this.head;

    for (let i = 0; i <= this.length; i++) {
      if (i === index) {
        nodeToInsert.previous = currentNode.previous;
        nodeToInsert.next = currentNode;
        currentNode.previous.next = nodeToInsert;
        currentNode.previous = nodeToInsert;

        break;
      }

      currentNode = currentNode.next;
    }

    this.length++;
  }

  deleteFromStart() {
    if (!this.head) return;

    if (!this.head.next) return this.clear();

    this.head = this.head.next;
    this.head.previous = null;

    this.length--;
  }

  deleteFromEnd() {
    const newTail = this.getTail().previous;

    newTail.next = null;
    this.tail = newTail;

    this.length--;
  }

  deleteFromIndex(index) {
    if (!index) return this.deleteFromStart();
    if (index === this.length - 1) return this.deleteFromEnd();

    let currentNode = this.head;

    for (let i = 0; i < index; i++) {
      if (i === index - 1) {
        currentNode.next = currentNode.next.next;
        currentNode.next.previous = currentNode;

        break;
      }

      currentNode = currentNode.next;
    }

    this.length--;
  }
}

export { DoubleLinkedList };
