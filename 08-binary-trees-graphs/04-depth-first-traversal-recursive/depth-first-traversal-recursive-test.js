const {
  Node,
  recDepthFirstTraversal,
} = require('./depth-first-traversal-recursive');

// Test tree: a -> b -> d
//             \-> e
//       -> c -> f
const root = new Node('a');
root.left = new Node('b');
root.right = new Node('c');
root.left.left = new Node('d');
root.left.right = new Node('e');
root.right.left = new Node('f');

test('Depth First Traversal', () => {
  expect(recDepthFirstTraversal(root)).toEqual(['a', 'b', 'd', 'e', 'c', 'f']);
});
