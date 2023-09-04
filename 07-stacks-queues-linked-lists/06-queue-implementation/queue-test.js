const Queue = require('./queue');

describe('Queue', () => {
  let queue;

  beforeEach(() => {
    queue = new Queue();
  });

  afterEach(() => {
    queue = null;
  });

  test('enqueue should add an element to the queue', () => {
    queue.enqueue(1);
    expect(queue.getLength()).toBe(1);
    expect(queue.peek()).toBe(1);
  });

  test('dequeue should remove and return the front element from the queue', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.dequeue()).toBe(1);
    expect(queue.getLength()).toBe(1);
    expect(queue.peek()).toBe(2);
  });

  test('peek should return the front element without removing it', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.peek()).toBe(1);
    expect(queue.getLength()).toBe(2);
  });

  test('getLength should return the number of elements in the queue', () => {
    expect(queue.getLength()).toBe(0);
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.getLength()).toBe(3);
    queue.dequeue();
    expect(queue.getLength()).toBe(2);
  });

  test('isEmpty should return true if the queue is empty', () => {
    expect(queue.isEmpty()).toBe(true);
    queue.enqueue(1);
    expect(queue.isEmpty()).toBe(false);
    queue.dequeue();
    expect(queue.isEmpty()).toBe(true);
  });

  test('isFull should return true if the queue is full', () => {
    const maxSize = 3;
    const fullQueue = new Queue();
    fullQueue.maxSize = maxSize;
    fullQueue.enqueue(1);
    fullQueue.enqueue(2);
    fullQueue.enqueue(3);
    expect(fullQueue.isFull()).toBe(true);
    fullQueue.dequeue();
    expect(fullQueue.isFull()).toBe(false);
  });
});
