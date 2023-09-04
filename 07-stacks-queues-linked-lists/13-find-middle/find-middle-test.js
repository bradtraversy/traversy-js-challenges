const { LinkedList } = require('./linked-list');
const findMiddle = require('./find-middle');

describe('findMiddle', () => {
  test('should return the middle node for a linked list with an odd number of nodes', () => {
    const list = new LinkedList();
    list.add(1);
    list.add(2);
    list.add(3);
    list.add(4);
    list.add(5);

    const middleNode = findMiddle(list);
    expect(middleNode.data).toBe(3);
  });

  test('should return the second middle node for a linked list with an even number of nodes', () => {
    const list = new LinkedList();
    list.add(1);
    list.add(2);
    list.add(3);
    list.add(4);
    list.add(5);
    list.add(6);

    const middleNode = findMiddle(list);
    expect(middleNode.data).toBe(4);
  });
});
