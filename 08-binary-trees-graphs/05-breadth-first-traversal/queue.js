class Queue {
  constructor() {
    this.queue = [];
    this.head = 0;
    this.tail = 0;
    this.maxSize = 100;
  }

  enqueue(element) {
    if (this.isFull()) {
      return false;
    }
    this.queue[this.tail] = element;
    this.tail++;
    return true;
  }

  dequeue() {
    const item = this.queue[this.head];
    this.head++;
    return item;
  }

  peek() {
    return this.queue[this.head];
  }

  getLength() {
    return this.tail - this.head;
  }

  isEmpty() {
    return this.getLength() === 0;
  }

  isFull() {
    return this.getLength() === this.maxSize;
  }
}

// const queue = new Queue();
// console.log(queue.isEmpty()); // true
// console.log(queue.isFull()); // false
// console.log(queue.enqueue(1)); // true
// console.log(queue.enqueue(2)); // true
// console.log(queue.enqueue(3)); // true
// console.log(queue.peek()); // 1
// console.log(queue.dequeue()); // 1
// console.log(queue.peek()); // 2
// console.log(queue.getLength()); // 2

module.exports = Queue;
