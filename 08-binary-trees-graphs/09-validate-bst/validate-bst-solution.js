class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function isValidBST(root) {
  // Helper function to check if all values in a subtree are within the specified range
  function isValidSubtree(node, min, max) {
    if (!node) {
      return true;
    }

    if (
      (min !== null && node.value <= min) ||
      (max !== null && node.value >= max)
    ) {
      return false;
    }

    // For the left subtree, values must be less than the current node's value (max = node.value)
    // For the right subtree, values must be greater than the current node's value (min = node.value)
    return (
      isValidSubtree(node.left, min, node.value) &&
      isValidSubtree(node.right, node.value, max)
    );
  }

  // Call the helper function on the root with initial range of null
  return isValidSubtree(root, null, null);
}

module.exports = { Node, isValidBST };
