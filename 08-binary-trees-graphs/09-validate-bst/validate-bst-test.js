const { Node, isValidBST } = require('./validate-bst');

describe('isValidBST', () => {
  it('should return true for a valid binary search tree', () => {
    const root = new Node(8);
    const node4 = new Node(4);
    const node10 = new Node(10);
    const node2 = new Node(2);
    const node6 = new Node(6);

    root.left = node4;
    root.right = node10;
    node4.left = node2;
    node4.right = node6;

    const result = isValidBST(root);
    expect(result).toBe(true);
  });

  it('should return false for an invalid binary search tree', () => {
    const root = new Node(8);
    const node4 = new Node(4);
    const node10 = new Node(10);
    const node2 = new Node(2);
    const node12 = new Node(12);

    root.left = node4;
    root.right = node10;
    node4.left = node2;
    node4.right = node12;

    const result = isValidBST(root);
    expect(result).toBe(false);
  });
});
