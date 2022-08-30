class Node {
  constructor(data = null, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  isEmpty() {
    return this.head === null;
  }

  getTail() {
    let currentNode = this.head;

    while (currentNode?.next) {
      currentNode = currentNode.next;
    }

    return currentNode;
  }

  addToStart(node) {
    if (!this.head) this.head = node;

    node.next = this.head.next;

    this.head = node;
  }

  addToEnd(node) {
    if (!this.head) {
      this.head = node;

      return;
    }

    const tail = this.getTail();

    tail.next = node;
  }

  addToIndex(index, nodeToInsert) {
    let currentNode = this.head;

    for (let i = 0; i < index; i++) {
      if (i === index - 1) {
        nodeToInsert.next = currentNode.next;

        currentNode.next = nodeToInsert;

        return;
      }

      currentNode = currentNode.next;
    }
  }

  deleteFromStart() {
    if (!this.head) return;

    this.head = this.head.next;
  }

  deleteFromEnd() {
    let currentNode = this.head;

    while (currentNode?.next?.next) {
      currentNode = currentNode.next;
    }

    currentNode.next = null;
  }

  deleteFromIndex(index) {
    if (!index) return this.deleteFromStart();

    let currentNode = this.head;
    let previousNode;

    for (let i = 0; i <= index; i++) {
      if (i === index) {
        previousNode.next = currentNode?.next ?? null;

        return;
      }

      previousNode = currentNode;
      currentNode = currentNode.next;
    }
  }

  clear() {
    if (this.head) this.head = null;
  }
}

export { Node, LinkedList }