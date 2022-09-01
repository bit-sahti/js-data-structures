class Node {
  constructor(data = null) {
    this.data = data;
    this.next = null;
  }
}

class DoubleLinkedNode {
  constructor(data = null) {
    this.data = data;
    this.next = null;
    this.previous = null;
  }
}

export { Node, DoubleLinkedNode };
