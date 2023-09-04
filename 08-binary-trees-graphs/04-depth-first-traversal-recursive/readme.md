# Challenge: Recursive Depth First Traversal

## Instructions

Write a function called `recDepthFirstTraversal` that takes the root node of a binary tree as input and returns an array containing the nodes visited in depth-first order. You can use the last lesson as a reference, but you must use recursion to solve this problem.

Depth-first traversal is an algorithm that starts at the root node and explores as far as possible along each branch before backtracking. The nodes are visited in the order they are encountered during the traversal.

The `Node` class is provided for you:

```js
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
```

You can assume that the binary tree is not empty.

### Example

```js
const root = new Node('a');
root.left = new Node('b');
root.right = new Node('c');
root.left.left = new Node('d');
root.left.right = new Node('e');
root.right.left = new Node('f');

depthFirstTraversal(root); // should return ['a', 'b', 'd', 'e', 'c', 'f']
```

### Hints

- You can implement the depth-first traversal recursively using a helper function that is called on the left and right subtrees of the current node.
- The base case is when the node is `null`, in which case we simply return from the function.

## Solutions

<details>
  <summary>Click For Solution</summary>

```js
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function recDepthFirstTraversal(root) {
  const result = [];

  function traverse(node) {
    if (node !== null) {
      result.push(node.data);
      traverse(node.left);
      traverse(node.right);
    }
  }

  traverse(root);
  return result;
}
```

### Explanation

- Initialize an empty array called `result` to store the nodes visited in depth-first order.
- Define a helper function called `traverse` that takes in a node as input.
- If the node is not `null`, push the node's data to the `result` array.
- Call `traverse` on the left subtree of the current node.
- Call `traverse` on the right subtree of the current node.
- Call `traverse` on the root node to start the traversal.
- Return the `result` array.

</details>

### Test Cases

```js
const { Node, recDepthFirstTraversal } = require('./recursive-depth-traversal');

// Test tree:
//      a
//     / \
//    b   c
//   / \   \
//  d   e   f

const root = new Node('a');
root.left = new Node('b');
root.right = new Node('c');
root.left.left = new Node('d');
root.left.right = new Node('e');
root.right.left = new Node('f');

test('Depth First Traversal', () => {
  expect(depthFirstTraversal(root)).toEqual(['a', 'b', 'd', 'e', 'c', 'f']);
});
```
