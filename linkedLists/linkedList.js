class LinkedList {
  constructor(head = null) {
    this.length = 0;

    this.addInitialNode(head)
  }

  isEmpty() {
    return this.head === null;
  }

  getTail() {
    return this.tail;
  }

  addInitialNode(node) {
    this.head = node;

    this.tail = node;

    if (node) this.length++;
  }

  addToStart(node) {
    if (!this.head) {
      this.addInitialNode(node);

      return;
    }

    node.next = this.head.next;

    this.head = node;

    this.length++;
  }

  addToEnd(node) {
    if (!this.head) {
      this.addInitialNode(node);

      return;
    }

    const tail = this.getTail();

    tail.next = node;

    this.tail = node;

    this.length++;
  }

  addToIndex(index, nodeToInsert) {
    if (index === this.length) {
      this.addToEnd(nodeToInsert);

      return;
    }

    let currentNode = this.head;

    for (let i = 0; i < index; i++) {
      if (i === index - 1) {
        nodeToInsert.next = currentNode.next;

        currentNode.next = nodeToInsert;

        this.length++;

        return;
      }

      currentNode = currentNode.next;
      this.length++;
    }
  }

  deleteFromStart() {
    if (!this.head) return;

    if (this.head.next) {
      this.head = this.head.next;
    } else {
      this.head = null;

      this.tail = null;
    }

    this.length--;
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
        previousNode.next = currentNode?.next ?? null;

        return;
      }

      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    this.length--;
  }

  clear() {
    if (this.head) this.head = null;
  }
}

export { LinkedList };
