# Challenge: Binary Tree Maximum Depth

## Instructions

Write a function called `maxDepth` that takes the root of a binary tree as input and returns the maximum depth of the tree. The maximum depth is defined as the number of nodes along the longest path from the root node down to the farthest leaf node.

### Function Signature

```js
/**
 * Returns the maximum depth of the binary tree.
 * @param {Node} root - The root node of the binary tree.
 * @returns {number} - The maximum depth of the binary tree.
 */
function maxDepth(root: Node): number;) {}
```

### Examples

```js
// Explanation: The binary tree is as follows:
//     3
//    / \
//   9  20
//     /  \
//    15   7
// The maximum depth is 3, which is the path 3 -> 20 -> 7.

// Explanation: The binary tree is as follows:
//     1
//      \
//       2
// The maximum depth is 2, which is the path 1 -> 2.

// Input: root = []
// Output: 0
// Explanation: An empty tree has a maximum depth of 0.
```

### Hints

- You can solve this problem using a depth-first traversal approach.
- Use recursion to explore the left and right subtrees of each node and return the maximum depth between them.

### Binary Tree Node

Here's the definition of the binary tree node:

```js
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
```

## Solutions

<details>
  <summary>Click For Solution</summary>

```js
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function maxDepth(root) {
  if (!root) {
    return 0;
  }

  const leftDepth = maxDepth(root.left);
  const rightDepth = maxDepth(root.right);

  return Math.max(leftDepth, rightDepth) + 1;
}
```

### Explanation

- Check if the root node is `null`. If it is, return `0` since the tree is empty.
- Recursively calculate the maximum depth of the left and right subtrees of the current node.
- Return the maximum depth between the left and right subtrees plus `1` to account for the current node.

</details>

### Test Cases

```js
const { Node, maxDepth } = require('./maximum-depth');

describe('Binary Tree Maximum Depth', () => {
  test('Should calculate the maximum depth of a binary tree', () => {
    // Create the binary tree:    3
    //                           / \
    //                          9  20
    //                             / \
    //                            15  7

    const root = new Node(3);
    const node9 = new Node(9);
    const node20 = new Node(20);
    const node15 = new Node(15);
    const node7 = new Node(7);

    root.left = node9;
    root.right = node20;
    node20.left = node15;
    node20.right = node7;

    expect(maxDepth(root)).toBe(3);
  });

  test('Should handle a tree with a single root node', () => {
    const root = new Node(1);
    expect(maxDepth(root)).toBe(1);
  });

  test('Should calculate the maximum depth of a binary tree with only left children', () => {
    // Create the binary tree:    1
    //                           /
    //                          2
    //                         /
    //                        3
    //                       /
    //                      4

    const root = new Node(1);
    const node2 = new Node(2);
    const node3 = new Node(3);
    const node4 = new Node(4);

    root.left = node2;
    node2.left = node3;
    node3.left = node4;

    expect(maxDepth(root)).toBe(4);
  });
});

```

The test cases ensure that the `maxDepth` function correctly calculates the maximum depth of various binary trees, including edge cases of empty trees and trees with a single root node.
