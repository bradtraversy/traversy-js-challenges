// Node class
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function maxDepth(root) {
  // If the root is null, return 0.
  if (!root) {
    return 0;
  }

  // Recursively call maxDepth on the left and right subtrees.
  const leftDepth = maxDepth(root.left);
  const rightDepth = maxDepth(root.right);

  // Return the max of the left and right depths, plus 1. We add 1 to account for the root.
  return Math.max(leftDepth, rightDepth) + 1;
}

module.exports = {
  maxDepth,
  Node,
};
