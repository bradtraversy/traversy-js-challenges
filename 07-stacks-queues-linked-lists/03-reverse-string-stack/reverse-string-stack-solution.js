const Stack = require('./stack');

function reverseStringStack(str) {
  // Create a new stack
  const stack = new Stack();

  // Push each character onto the stack
  for (let i = 0; i < str.length; i++) {
    stack.push(str[i]);
  }

  // Create a variable to store the reversed string
  let reversedString = '';

  // Pop the characters from the stack to construct the reversed string
  while (!stack.isEmpty()) {
    reversedString += stack.pop();
  }

  // Return the reversed string
  return reversedString;
}

module.exports = reverseStringStack;
