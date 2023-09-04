class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    // Initialize the tree's root node to be null
    this.root = null;
  }

  // Insert a new node into the tree
  insert(value) {
    // Create a new node with the given value
    const newNode = new Node(value);

    // If the tree is empty, set the root node to be the new node
    if (this.root === null) {
      this.root = newNode;
    } else {
      // Start at the root
      let currentNode = this.root;

      // Loop until we find a node without a left or right child
      while (true) {
        // If the new value is less than the current node's value, go left
        if (value < currentNode.value) {
          // If there's no left child already there, add the new node here
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          // Otherwise, move on to the left child and repeat the process
          currentNode = currentNode.left;
        } else {
          // If the new value is greater than or equal to the current node's value, go right
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          // Otherwise, move on to the right child and repeat the process
          currentNode = currentNode.right;
        }
      }
    }
  }

  // Search the tree for a node with the given value
  lookup(value) {
    // Start at the root
    let currentNode = this.root;

    // If the tree is empty, return null
    if (!currentNode) {
      return null;
    }

    // Traverse the tree
    while (currentNode) {
      // If the given value is less than the current node's value, go left
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      }
      // If the given value is greater than the current node's value, go right
      else if (value > currentNode.value) {
        currentNode = currentNode.right;
      }
      // If the given value is equal to the current node's value, return the current node
      else if (value === currentNode.value) {
        return currentNode;
      }
    }

    // If we get to the end of the tree without finding the given value, return null
    return null;
  }

  // Remove a node from the tree
  remove(value) {
    const removeNode = (node, value) => {
      // Base case: if the node is null, the value does not exist in the tree
      if (node === null) {
        return null;
      }

      // If the value to be removed is less than the current node's value,
      // move to the left subtree and recursively remove the value
      if (value < node.value) {
        node.left = removeNode(node.left, value);
        return node;
      }
      // If the value to be removed is greater than the current node's value,
      // move to the right subtree and recursively remove the value
      else if (value > node.value) {
        node.right = removeNode(node.right, value);
        return node;
      }
      // If the current node's value is equal to the value to be removed
      else {
        // Case 1: Node with no child or only one child
        if (node.left === null) {
          return node.right;
        } else if (node.right === null) {
          return node.left;
        }

        // Case 2: Node with two children
        // Find the smallest value in the right subtree (successor)
        let tempNode = node.right;
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }
        // Replace the current node with the successor value
        node.value = tempNode.value;
        // Remove the successor value from the right subtree
        node.right = removeNode(node.right, tempNode.value);
        return node;
      }
    };

    // Start at the root
    this.root = removeNode(this.root, value);
  }

  // Print the tree in order
  printTree() {
    // In-order traversal
    const printNode = (node) => {
      // Base case: if the node is null, we've reached the end of the tree
      if (node === null) {
        return;
      }
      // Recursively print the left subtree, then the current node, then the right subtree
      printNode(node.left);
      console.log(node.value);
      printNode(node.right);
    };

    // Start at the root
    printNode(this.root);
  }
}

module.exports = { Node, BinarySearchTree };
