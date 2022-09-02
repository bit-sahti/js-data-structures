class Queue {
  constructor() {
    this.data = new Map();
    this.head = 0;
    this.rear = 0;
  }

  get length() {
    return this.data.size;
  }

  enqueue(item) {
    this.data.set(this.rear, item);

    this.rear++;
  }

  dequeue() {
    const item = this.data.get(this.head);
    this.data.delete(this.head);

    this.head++;

    return item;
  }

  peek(index) {
    if (index === -1) return this.data.get(this.rear - 1);

    return this.data.get(this.head);
  }
}

export { Queue };
