const Queue = require('./queue');

const queue = new Queue();
console.log(queue.isEmpty());
console.log(queue.isFull());
console.log(queue.enqueue(1));
console.log(queue.enqueue(2));
console.log(queue.enqueue(3));
console.log(queue.peek());
console.log(queue.dequeue());
console.log(queue.peek());
console.log(queue.getLength());
