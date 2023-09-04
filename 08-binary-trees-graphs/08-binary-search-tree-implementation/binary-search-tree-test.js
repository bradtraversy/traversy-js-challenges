const { Node, BinarySearchTree } = require('./binary-search-tree');

describe('BinarySearchTree', () => {
  let bst;

  beforeEach(() => {
    bst = new BinarySearchTree();
  });

  test('should insert values correctly', () => {
    bst.insert(10);
    bst.insert(5);
    bst.insert(15);
    bst.insert(2);

    expect(bst.root.value).toBe(10);
    expect(bst.root.left.value).toBe(5);
    expect(bst.root.right.value).toBe(15);
    expect(bst.root.left.left.value).toBe(2);
  });

  test('should find existing nodes using lookup', () => {
    bst.insert(10);
    bst.insert(5);
    bst.insert(15);

    expect(bst.lookup(10).value).toBe(10);
    expect(bst.lookup(5).value).toBe(5);
    expect(bst.lookup(15).value).toBe(15);
  });

  test('should return null for non-existing nodes using lookup', () => {
    bst.insert(10);
    bst.insert(5);
    bst.insert(15);

    expect(bst.lookup(2)).toBeNull();
    expect(bst.lookup(8)).toBeNull();
    expect(bst.lookup(20)).toBeNull();
  });

  test('should remove nodes correctly', () => {
    bst.insert(10);
    bst.insert(5);
    bst.insert(15);
    bst.insert(2);
    bst.insert(7);

    bst.remove(2);
    expect(bst.lookup(2)).toBeNull();

    bst.remove(5);
    expect(bst.lookup(5)).toBeNull();

    bst.remove(15);
    expect(bst.lookup(15)).toBeNull();

    bst.remove(10);
    expect(bst.lookup(10)).toBeNull();

    bst.remove(7);
    expect(bst.lookup(7)).toBeNull();
  });

  test('should handle removing root node correctly', () => {
    bst.insert(10);
    bst.insert(5);
    bst.insert(15);

    bst.remove(10);
    expect(bst.root.value).toBe(15);
  });

  test('should print tree in-order', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {}); // Spy on console.log and mock the implementation

    const bst = new BinarySearchTree();
    bst.insert(8);
    bst.insert(3);
    bst.insert(10);
    bst.insert(1);
    bst.insert(6);
    bst.insert(14);
    bst.insert(4);
    bst.insert(7);
    bst.insert(13);

    bst.printTree();

    // Expect the console.log to be called with the correct values in in-order traversal
    expect(consoleSpy).toHaveBeenNthCalledWith(1, 1);
    expect(consoleSpy).toHaveBeenNthCalledWith(2, 3);
    expect(consoleSpy).toHaveBeenNthCalledWith(3, 4);
    expect(consoleSpy).toHaveBeenNthCalledWith(4, 6);
    expect(consoleSpy).toHaveBeenNthCalledWith(5, 7);
    expect(consoleSpy).toHaveBeenNthCalledWith(6, 8);
    expect(consoleSpy).toHaveBeenNthCalledWith(7, 10);
    expect(consoleSpy).toHaveBeenNthCalledWith(8, 13);
    expect(consoleSpy).toHaveBeenNthCalledWith(9, 14);

    // Restore the original console.log implementation
    consoleSpy.mockRestore();
  });
});
