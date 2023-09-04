const { Node, depthFirstTraversal } = require('./depth-first-traversal');

describe('Depth First Traversal', () => {
  test('Should perform depth-first traversal on the binary tree', () => {
    // Create a binary tree:      a
    //                          /   \
    //                         b     c
    //                        / \    /
    //                       d   e  f

    const root = new Node('a');
    const nodeB = new Node('b');
    const nodeC = new Node('c');
    const nodeD = new Node('d');
    const nodeE = new Node('e');
    const nodeF = new Node('f');

    root.left = nodeB;
    root.right = nodeC;
    nodeB.left = nodeD;
    nodeB.right = nodeE;
    nodeC.left = nodeF;

    expect(depthFirstTraversal(root)).toEqual(['a', 'b', 'd', 'e', 'c', 'f']);
  });

  test('Should return an empty array for an empty tree', () => {
    expect(depthFirstTraversal(null)).toEqual([]);
  });

  test('Should handle a tree with only the root node', () => {
    const root = new Node('root');
    expect(depthFirstTraversal(root)).toEqual(['root']);
  });
});
