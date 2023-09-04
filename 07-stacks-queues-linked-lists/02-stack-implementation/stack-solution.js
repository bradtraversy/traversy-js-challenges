class Stack {
  constructor() {
    // The maximum number of elements the stack can hold.
    this.maxSize = 100;
    // The stack itself.
    this.stack = [];
    // The index of the top element in the stack.
    this.top = -1;
  }

  // Add an element to the top of the stack.
  push(value) {
    // If the stack is full, return false.
    if (this.isFull()) {
      return false;
    }
    // Increment the top index.
    this.top++;
    // Add the value to the top of the stack.
    this.stack[this.top] = value;
    return true;
  }

  // Remove the top element from the stack.
  pop() {
    if (this.isEmpty()) {
      return null;
    }
    this.top--;

    return this.stack.pop();
  }

  // Get the value of the top element in the stack.
  peek() {
    // If the stack is empty, return null.
    if (this.isEmpty()) {
      return null;
    }
    // Return the value of the top element.
    return this.stack[this.top];
  }

  // Check if the stack is empty.
  isEmpty() {
    // If the top index is -1, the stack is empty.
    return this.top === -1;
  }

  // Check if the stack is full.
  isFull() {
    // If the top index is equal to the maximum size of the stack, the stack is full.
    return this.top === this.maxSize - 1;
  }
}

module.exports = Stack;
