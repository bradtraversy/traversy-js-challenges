const DoublyLinkedList = require('./doubly-linked-list');

describe('DoublyLinkedList', () => {
  let list;

  beforeEach(() => {
    list = new DoublyLinkedList();
  });

  it('should append nodes correctly', () => {
    list.append(100);
    list.append(200);

    expect(list.head.data).toBe(100);
    expect(list.tail.data).toBe(200);
    expect(list.length).toBe(2);
  });

  it('should prepend nodes correctly', () => {
    list.prepend(200);
    list.prepend(100);

    expect(list.head.data).toBe(100);
    expect(list.tail.data).toBe(200);
    expect(list.length).toBe(2);
  });

  it('should insert nodes at the specified index correctly', () => {
    list.append(100);
    list.append(200);
    list.append(400);
    list.insertAt(2, 300);

    expect(list.head.data).toBe(100);
    expect(list.head.next.data).toBe(200);
    expect(list.head.next.next.data).toBe(300);
    expect(list.head.next.next.next.data).toBe(400);
    expect(list.length).toBe(4);
  });

  it('should get a node at the specified index correctly', () => {
    list.append(100);
    list.append(200);
    list.append(300);

    const nodeAtIndex = list.get(1);
    expect(nodeAtIndex.data).toBe(200);
  });

  it('should remove nodes at the specified index correctly', () => {
    list.append(100);
    list.append(200);
    list.append(300);
    list.append(400);
    list.remove(2);

    expect(list.head.data).toBe(100);
    expect(list.head.next.data).toBe(200);
    expect(list.head.next.next.data).toBe(400);
    expect(list.length).toBe(3);
  });

  it('should check if the list contains a node with the specified data correctly', () => {
    list.append(100);
    list.append(200);
    list.append(300);

    expect(list.contains(200)).toBe(true);
    expect(list.contains(400)).toBe(false);
  });

  it('should print all nodes in the list', () => {
    const spy = jest.spyOn(console, 'log');
    list.append(100);
    list.append(200);
    list.append(300);
    list.printAll();

    expect(spy).toHaveBeenCalledWith(100);
    expect(spy).toHaveBeenCalledWith(200);
    expect(spy).toHaveBeenCalledWith(300);

    spy.mockRestore();
  });
});
