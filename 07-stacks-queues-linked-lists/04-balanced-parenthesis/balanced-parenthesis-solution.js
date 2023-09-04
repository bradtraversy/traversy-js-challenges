const Stack = require('./stack');

function balancedParenthesis(str) {
  // Create a new stack
  const stack = new Stack();

  // Loop through each character in str
  for (let i = 0; i < str.length; i++) {
    // If the character is '(', push it onto the stack
    if (str[i] === '(') {
      stack.push(str[i]);
      // If the character is ')', pop the stack
    } else if (str[i] === ')') {
      // If the stack is empty, return false
      if (stack.isEmpty()) {
        return false;
      }
      // If the stack is not empty, pop the stack
      stack.pop();
    }
  }

  // If the stack is empty, return true
  return stack.isEmpty();
}

module.exports = balancedParenthesis;
