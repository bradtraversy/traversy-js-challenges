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
