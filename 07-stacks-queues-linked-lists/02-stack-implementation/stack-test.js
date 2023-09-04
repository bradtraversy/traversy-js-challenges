const Stack = require('./stack'); // Assuming the Stack class is in a separate file called Stack.js

describe('Stack', () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  afterEach(() => {
    stack = null;
  });

  test('push should add an element to the stack', () => {
    stack.push(1);
    expect(stack.peek()).toBe(1);
  });

  test('pop should remove and return the top element from the stack', () => {
    stack.push(1);
    stack.push(2);
    const poppedElement = stack.pop();
    expect(poppedElement).toBe(2);
    expect(stack.peek()).toBe(1);
  });

  test('peek should return the top element without removing it', () => {
    stack.push(1);
    stack.push(2);
    expect(stack.peek()).toBe(2);
    expect(stack.pop()).toBe(2);
    expect(stack.peek()).toBe(1);
  });

  test('isEmpty should return true if the stack is empty', () => {
    expect(stack.isEmpty()).toBe(true);
    stack.push(1);
    expect(stack.isEmpty()).toBe(false);
    stack.pop();
    expect(stack.isEmpty()).toBe(true);
  });

  test('isFull should return true if the stack is full', () => {
    expect(stack.isFull()).toBe(false);
    for (let i = 0; i < stack.maxSize; i++) {
      stack.push(i);
    }
    expect(stack.isFull()).toBe(true);
  });
});
