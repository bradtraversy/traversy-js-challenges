const Queue = require('./queue');
const Stack = require('./stack');

function isPalindromeQueueStack(str) {
  // Remove all non-alphanumeric characters from str and convert to lowercase.
  const formattedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  // Create a new queue and a new stack.
  const charQueue = new Queue();
  const charStack = new Stack();

  // Enqueue each character in str to the queue and push each character in str to the stack.
  for (let i = 0; i < formattedStr.length; i++) {
    const char = formattedStr.charAt(i);
    charQueue.enqueue(char);
    charStack.push(char);
  }

  // Dequeue each character from the queue and pop each character from the stack.
  while (!charQueue.isEmpty()) {
    // If the dequeued character does not equal the popped character, return false.
    if (charQueue.dequeue() !== charStack.pop()) {
      return false;
    }
  }

  //  Return true if the loop completes without returning false.
  return true;
}

module.exports = isPalindromeQueueStack;
