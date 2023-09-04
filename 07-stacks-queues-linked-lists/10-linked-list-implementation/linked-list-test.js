const { Node, LinkedList } = require('./linked-list');

describe('LinkedList', () => {
  let linkedList;

  beforeEach(() => {
    linkedList = new LinkedList();
  });

  describe('add', () => {
    test('should add a node to the end of a non-empty list', () => {
      linkedList.add('A');
      linkedList.add('B');
      linkedList.add('C');

      expect(linkedList.head.data).toEqual('A');
      expect(linkedList.tail.data).toEqual('C');
    });
  });

  describe('printAll', () => {
    test('should print all nodes in the list', () => {
      const consoleSpy = jest.spyOn(console, 'log');

      linkedList.add('A');
      linkedList.add('B');
      linkedList.add('C');

      linkedList.printAll();

      expect(consoleSpy).toHaveBeenCalledWith('A');
      expect(consoleSpy).toHaveBeenCalledWith('B');
      expect(consoleSpy).toHaveBeenCalledWith('C');

      consoleSpy.mockRestore();
    });
  });

  describe('get', () => {
    test('should get a single node at a specific index', () => {
      linkedList.add('A');
      linkedList.add('B');
      linkedList.add('C');

      expect(linkedList.get(0)).toBe('A');
      expect(linkedList.get(1)).toBe('B');
      expect(linkedList.get(2)).toBe('C');
    });
  });

  describe('insertAt', () => {
    test('should insert a node at the beginning of the list', () => {
      linkedList.add('B');
      linkedList.add('C');

      linkedList.insertAt(0, 'A');

      expect(linkedList.head.data).toEqual('A');
      expect(linkedList.head.next.data).toEqual('B');
    });

    test('should insert a node at a specific index', () => {
      linkedList.add('A');
      linkedList.add('C');
      linkedList.add('D');

      linkedList.insertAt(1, 'B');

      expect(linkedList.head.data).toEqual('A');
      expect(linkedList.head.next.data).toEqual('B');
      expect(linkedList.head.next.next.data).toEqual('C');
      expect(linkedList.tail.data).toEqual('D');
    });
  });

  describe('removeFrom', () => {
    test('should remove a node from the beginning of the list', () => {
      linkedList.add('A');
      linkedList.add('B');
      linkedList.add('C');

      linkedList.removeFrom(0);

      expect(linkedList.head.data).toEqual('B');
    });

    test('should remove a node from a specific index', () => {
      linkedList.add('A');
      linkedList.add('B');
      linkedList.add('C');
      linkedList.add('D');

      linkedList.removeFrom(1);

      expect(linkedList.head.data).toEqual('A');
      expect(linkedList.head.next.data).toEqual('C');
      expect(linkedList.tail.data).toEqual('D');
    });
  });
});
