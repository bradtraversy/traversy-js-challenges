const Stack = require('./stack');

// Node class
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function depthFirstTraversal(root) {
  // If the root is null, return an empty array.
  if (!root) {
    return [];
  }

  // Create an empty array to store the result.
  const result = [];
  const stack = [];

  // Push the root onto the stack.
  stack.push(root);

  // While the stack is not empty:
  while (stack.length > 0) {
    // Pop a node from the stack.
    const current = stack.pop();
    // Add the node's data to the result.
    result.push(current.data);

    // If the node has a right child, push it onto the stack.
    if (current.right) {
      stack.push(current.right);
    }

    // If the node has a left child, push it onto the stack.
    if (current.left) {
      stack.push(current.left);
    }
  }

  // Return the result.
  return result;
}

// Using Stack class:
function depthFirstTraversal(root) {
  // If the root is null, return an empty array.
  if (!root) {
    return [];
  }

  // Create an empty array to store the result. Init the stack.
  const result = [];
  const stack = new Stack();

  // Push the root onto the stack.
  stack.push(root);

  // While the stack is not empty:
  while (!stack.isEmpty()) {
    // Pop a node from the stack.
    const current = stack.pop();
    // Add the node's data to the result.
    result.push(current.data);

    // If the node has a right child, push it onto the stack.
    if (current.right) {
      stack.push(current.right);
    }

    // If the node has a left child, push it onto the stack.
    if (current.left) {
      stack.push(current.left);
    }
  }

  // Return the result.
  return result;
}

module.exports = {
  Node,
  depthFirstTraversal,
};
