import { LinkedListInterface } from './linkedListInterface.js';

class LinkedList extends LinkedListInterface {
  constructor(head) {
    super();
    this.addInitialNode(head);
  }

  addToStart(node) {
    if (!this.head) return this.addInitialNode(node);

    node.next = this.head;

    this.head = node;

    this.length++;
  }

  addToEnd(node) {
    if (!this.head) return this.addInitialNode(node);

    const tail = this.getTail();

    tail.next = node;
    this.tail = node;

    this.length++;
  }

  addToIndex(index, nodeToInsert) {
    if (!index) return this.addToStart(nodeToInsert);
    if (index === this.length) return this.addToEnd(nodeToInsert);

    let currentNode = this.head;

    for (let i = 0; i < index; i++) {
      if (i === index - 1) {
        nodeToInsert.next = currentNode.next;

        currentNode.next = nodeToInsert;

        break;
      }

      currentNode = currentNode.next;
    }

    this.length++;
  }

  deleteFromStart() {
    if (!this.head) return;

    if (this.head.next) {
      this.head = this.head.next;

      this.length--;
    } else {
      this.clear();
    }
  }

  deleteFromEnd() {
    let currentNode = this.head;

    while (currentNode?.next?.next) {
      currentNode = currentNode.next;
    }

    currentNode.next = null;

    this.tail = currentNode;
    this.length--;
  }

  deleteFromIndex(index) {
    if (!index) return this.deleteFromStart();
    if (index === this.length - 1) return this.deleteFromEnd();

    let currentNode = this.head;
    let previousNode;

    for (let i = 0; i <= index; i++) {
      if (i === index) {
        previousNode.next = currentNode.next;

        continue;
      }

      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    this.length--;
  }
}

export { LinkedList };
