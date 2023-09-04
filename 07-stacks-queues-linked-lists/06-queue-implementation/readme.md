# Queue Implementation

In the last lesson, we looked at how a queue data structure works. It is `First-in, First-out` or `FIFO`. The first element added to the queue will be the first element removed from the queue. We can use an array as a queue, but we can also create our own queue class and that's what I want to do here.

## Queue Class & Constructor

Let's start by creating a class called `Queue`. In the constructor, we'll create a property called `queue` and set it to an empty array. We'll also create a property called `head` and set it to 0. We'll create a property called `tail` and set it to 0. Finally, we'll create a property called `maxSize` and set it to 100 by default.

```js
class Queue {
  constructor() {
    this.queue = [];
    this.head = 0;
    this.tail = 0;
    this.maxSize = 100;
  }
}
```

## `getLength` Method

Create the `getLength` method and return the difference of the tail and head indexes.

```js
getLength() {
    return this.tail - this.head;
  }
```

## `isEmpty` Method

Create the `isEmpty` method and return the boolean of the length of the queue being equal to 0.

```js
isEmpty() {
    return this.getLength() === 0;
  }
```

## `isFull` Method

Create the `isFull` method and return the boolean of the length of the queue being equal to the maxSize.

```js
isFull() {
    return this.getLength() === this.maxSize;
  }
```

## `enqueue` Method

Create the `enqueue` method. It will take in a value (element). First, check if the queue is full. If it is, return false. Set the tail index of the queue to the value. Increment the tail index by 1. Return true.

```JS
 enqueue(element) {
    if (this.isFull()) {
      return false;
    }
    this.queue[this.tail] = element;
    this.tail++;
    return true;
  }
```

## `dequeue` Method

Create the `dequeue` method. Get the item in the head index of the queue and store it in a variable. Increment the head by 1. Return the variable.

```js
 dequeue() {
    const item = this.queue[this.head];
    this.head++;
    return item;
  }

```

## `peek` Method

Create the `peek` method and return the item in the head index of the queue.

```js
 peek() {
    return this.queue[this.head];
  }
```

Now you can run the test and/or test it yourself with the following code:

```js
const queue = new Queue();
console.log(queue.isEmpty()); // true
console.log(queue.isFull()); // false
console.log(queue.enqueue(1)); // true
console.log(queue.enqueue(2)); // true
console.log(queue.enqueue(3)); // true
console.log(queue.peek()); // 1
console.log(queue.dequeue()); // 1
console.log(queue.peek()); // 2
console.log(queue.getLength()); // 2
```

## Test Cases

```js
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
```
