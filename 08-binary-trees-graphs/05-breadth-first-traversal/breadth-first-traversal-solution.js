const Queue = require('./queue');

// Node class
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function breadthFirstTraversal(root) {
  //  If the root is null, return an empty array.
  if (!root) {
    return [];
  }

  // Create a queue and add the root to it.
  const result = [];
  const queue = [];

  // Add the root to the queue.
  queue.push(root);

  // While the queue is not empty:
  while (queue.length > 0) {
    // Remove a node from the queue.
    const current = queue.shift();
    // Add the node's data to the result.
    result.push(current.data);

    // If the node has a left child, add it to the queue.
    if (current.left) {
      queue.push(current.left);
    }

    // If the node has a right child, add it to the queue.
    if (current.right) {
      queue.push(current.right);
    }
  }

  // Return the result.
  return result;
}

// Using Queue class
function breadthFirstTraversal(root) {
  //  If the root is null, return an empty array.
  if (!root) {
    return [];
  }

  // Create a queue and add the root to it. Init Queue.
  const result = [];
  const queue = new Queue();

  // Add the root to the queue.
  queue.enqueue(root);

  // While the queue is not empty:
  while (!queue.isEmpty()) {
    // Remove a node from the queue.
    const current = queue.dequeue();
    // Add the node's data to the result.
    result.push(current.data);

    // If the node has a left child, add it to the queue.
    if (current.left) {
      queue.enqueue(current.left);
    }

    //  If the node has a right child, add it to the queue.
    if (current.right) {
      queue.enqueue(current.right);
    }
  }

  // Return the result.
  return result;
}

module.exports = {
  Node,
  breadthFirstTraversal,
};
