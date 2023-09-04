const TreeNode = require('./tree-node-class');

describe('Manual Binary Tree', () => {
  let a, b, c, d, e, f;

  beforeEach(() => {
    a = new TreeNode('a');
    b = new TreeNode('b');
    c = new TreeNode('c');
    d = new TreeNode('d');
    e = new TreeNode('e');
    f = new TreeNode('f');

    a.left = b;
    a.right = c;
    b.left = d;
    b.right = e;
    c.right = f;
  });

  test('Nodes are correctly connected', () => {
    expect(a.left).toBe(b);
    expect(a.right).toBe(c);
    expect(b.left).toBe(d);
    expect(b.right).toBe(e);
    expect(c.right).toBe(f);
  });

  test('Node values are correct', () => {
    expect(a.value).toBe('a');
    expect(b.value).toBe('b');
    expect(c.value).toBe('c');
    expect(d.value).toBe('d');
    expect(e.value).toBe('e');
    expect(f.value).toBe('f');
  });
});
