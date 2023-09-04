const { Node, breadthFirstTraversal } = require('./breadth-first-traversal');

describe('Breadth-First Traversal', () => {
  test('Should perform breadth-first traversal on the binary tree', () => {
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

    expect(breadthFirstTraversal(root)).toEqual(['a', 'b', 'c', 'd', 'e', 'f']);
  });

  test('Should return an empty array for an empty tree', () => {
    expect(breadthFirstTraversal(null)).toEqual([]);
  });

  test('Should handle a tree with only the root node', () => {
    const root = new Node('root');
    expect(breadthFirstTraversal(root)).toEqual(['root']);
  });
});
