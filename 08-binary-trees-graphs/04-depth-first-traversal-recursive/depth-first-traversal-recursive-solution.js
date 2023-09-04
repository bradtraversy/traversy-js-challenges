// Node class
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function recDepthFirstTraversal(root) {
  // If the root is null, return an empty array.
  const result = [];

  // Create a recursive helper function.
  function traverse(node) {
    // If the node is not null:
    if (node !== null) {
      // Add the node's data to the result.
      result.push(node.data);
      // Traverse the left subtree.
      traverse(node.left);
      // Traverse the right subtree.
      traverse(node.right);
    }
  }

  // Invoke the recursive helper function on the root.
  traverse(root);
  // Return the result.
  return result;
}

module.exports = {
  Node,
  recDepthFirstTraversal,
};
