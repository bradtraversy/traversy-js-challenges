class TreeNode {
  constructor(value) {
    // The value of the node.
    this.value = value;
    // The left child of the node.
    this.left = null;
    // The right child of the node.
    this.right = null;
  }
}

// Add a bunch of nodes to the tree.
const a = new TreeNode('a');
const b = new TreeNode('b');
const c = new TreeNode('c');
const d = new TreeNode('d');
const e = new TreeNode('e');
const f = new TreeNode('f');

// Set the left of the root to b and the right of the root to c.
a.left = b;
a.right = c;
// Set the left of b to d and the right of b to e.
b.left = d;
b.right = e;
// Set the right of c to f.
c.right = f;

module.exports = TreeNode;
