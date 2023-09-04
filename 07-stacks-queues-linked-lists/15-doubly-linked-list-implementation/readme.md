# Doubly Linked List Implementation

In this lesson, we will create a doubly linked list class in JavaScript. If you want to try this on your own, going on the knowledge that you have of a linked list and what I have explained about a doubly linked list, go ahead and try to implement this on your own. If you get stuck, you can always come back and watch this lesson.

I am going to switch it up a bit and instead of using classes, I am going to use a constructor function and some methods on the prototype.

## `Node` Function

We will first create a `Node` function that will be used to create nodes for our doubly linked list. The `Node` function will take in a value and set the `value` property to the value that is passed in. It will also set the `next` and `prev` properties to `null`.

```js
function Node(data) {
  this.data = data;
  this.next = null;
  this.prev = null;
}
```

## `DoublyLinkedList` Function

Next, we will create a `DoublyLinkedList` function that will be used to create doubly linked lists. The `DoublyLinkedList` function will set the `head` and `tail` properties to `null` and the `length` property to `0`.

```js
function DoublyLinkedList() {
  this.head = null;
  this.tail = null;
  this.length = 0;
}
```

## `append` Method

We will add a method called `append` to the `DoublyLinkedList` prototype. This method will add a node to the end of the doubly linked list.

```js
DoublyLinkedList.prototype.append = function (data) {
  const newNode = new Node(data);

  if (!this.head) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
  }

  this.length++;
};
```

We create a new node with the data that is passed in. If the `head` property is `null`, then we set the `head` and `tail` properties to the new node. Otherwise, we set the `prev` property of the new node to the current `tail` node. We then set the `next` property of the current `tail` node to the new node. Finally, we set the `tail` property to the new node.

Let's try out what we have so far. Add this to your run file or the bottom of the current file:

```js
const DoublyLinkedList = require('./doubly-linked-list');

const list = new DoublyLinkedList();

list.append(1);
list.append(2);
list.append(3);

console.log(list);
```

You should see something like this:

```js
DoublyLinkedList {
  head: <ref *1> Node {
    data: 1,
    next: Node { data: 2, next: [Node], prev: [Circular *1] },
    prev: null
  },
  tail: <ref *2> Node {
    data: 3,
    next: null,
    prev: Node { data: 2, next: [Circular *2], prev: [Node] }
  },
  length: 3
}
```

This shows us that we have a doubly linked list with a `head` and `tail` node. The `head` node has a `next` node and the `tail` node has a `prev` node. The `prev` of the first node and the `next` of the last node are both `null`.

## `printAll` Method

Let's create a method to print out all of the data in the list. We will add a method called `printAll` to the `DoublyLinkedList` prototype.

```js
DoublyLinkedList.prototype.printAll = function () {
  let current = this.head;

  while (current) {
    console.log(current.data);
    current = current.next;
  }
};
```

You can test this with the following:

```js
const list = new DoublyLinkedList();

list.append(1);
list.append(2);
list.append(3);

list.printAll();
```

You should see something like this:

```bash
1
2
3
```

## `prepend` Method

Let's add a function to add a node to the beginning of the list. We will call this function `prepend`. It will take in a value and add a node to the beginning of the list.

```js
DoublyLinkedList.prototype.prepend = function (data) {
  const newNode = new Node(data);

  if (!this.head) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
  }

  this.length++;
};
```

We create a new node with the data that is passed in. If the `head` property is `null`, then we set the `head` and `tail` properties to the new node. Otherwise, we set the `next` property of the new node to the current `head` node. We then set the `prev` property of the current `head` node to the new node. Finally, we set the `head` property to the new node.

You can try with:

```js
const list = new DoublyLinkedList();

list.append(1);
list.append(2);
list.append(3);
list.prepend('Hello');

list.printAll();
```

You should see something like this:

```bash
Hello
1
2
3
```

## `insert` Method

Let's add a function to insert a node at a specific index. We will call this function `insert`. It will take in an index and a value and insert a node at that index.

```js
DoublyLinkedList.prototype.insert = function (index, data) {
  if (index < 0 || index > this.length) {
    return null;
  }

  if (index === 0) {
    return this.prepend(data);
  }

  if (index === this.length) {
    return this.append(data);
  }

  const newNode = new Node(data);
  let currentNode = this.head;

  for (let i = 0; i < index - 1; i++) {
    currentNode = currentNode.next;
  }

  newNode.next = currentNode.next;
  newNode.prev = currentNode;
  currentNode.next.prev = newNode;
  currentNode.next = newNode;

  this.length++;
};
```

We first check if the index is valid. If it is, we check if the index is `0`. If it is, we call the `prepend` method. We then check if the index is the same as the length of the list. If it is, we call the `append` method. Otherwise, we create a new node with the data that is passed in.

We then loop through the list until we get to the node before the index. We set the `next` property of the new node to the `next` property of the current node. We set the `prev` property of the new node to the current node. We set the `prev` property of the node after the new node to the new node. We set the `next` property of the current node to the new node.

You can try with:

```js
const list = new DoublyLinkedList();

list.append(1);
list.append(2);
list.append(3);
list.prepend('Hello');
list.insert(2, 'World');

list.printAll();
```

You should see something like this:

```bash
Hello
1
World
2
3
```

## `get` Method

Let's add a function to get a node at a specific index. We will call this function `get`. It will take in an index and return the node at that index.

```js
DoublyLinkedList.prototype.get = function (index) {
  if (index < 0 || index >= this.length) {
    return null;
  }

  let currentNode = this.head;
  for (let i = 0; i < index; i++) {
    currentNode = currentNode.next;
  }

  return currentNode;
};
```

We first check if the index is valid. If it is, we loop through the list until we get to the node at the index and return it.

You can try with:

```js
console.log(list.get(0));
```

You should see something like this:

```js
<ref *2> Node {
  data: 'Hello',
  next: <ref *1> Node {
    data: 1,
    next: Node { data: 'World', next: [Node], prev: [Circular *1] },
    prev: [Circular *2]
  },
  prev: null
}
```

## `remove` Method

Let's add a function to remove a node at a specific index. We will call this function `remove`. It will take in an index and remove the node at that index.

```js
DoublyLinkedList.prototype.remove = function (data) {
  if (!this.head) return;

  let currentNode = this.head;
  while (currentNode) {
    if (currentNode.data === data) {
      if (currentNode === this.head) {
        this.head = currentNode.next;
        if (this.head) {
          this.head.prev = null;
        }
      } else if (currentNode === this.tail) {
        this.tail = currentNode.prev;
        this.tail.next = null;
      } else {
        currentNode.prev.next = currentNode.next;
        currentNode.next.prev = currentNode.prev;
      }

      this.length--;
      return true;
    }

    currentNode = currentNode.next;
  }

  return false;
};
```

We first check if the list is empty by checking if the `head` is `null`. If it is, we return.

If it is not empty, we continue and set the `currentNode` to the `head`.

We then loop through the list until we find the node with the data that we want to remove. If we find it, we check if it is the `head` node. If it is, we set the `head` to the `next` node. We also check if the `head` is not `null`. If it is not, we set the `prev` of the `head` to `null` because it is now the first node.

If the node is not the `head`, we check if it is the `tail` node. If it is, we set the `tail` to the `prev` node. We also set the `next` of the `tail` to `null` because it is now the last node.

If the node is neither the `head` nor the `tail`, we set the `next` of the `prev` node to the `next` node. We also set the `prev` of the `next` node to the `prev` node.

We then decrement the `length` and return `true`.

If we do not find the node, we return `false`.

You can test this out with the following code:

```js
const list = new DoublyLinkedList();

list.append(1);
list.append(2);
list.append(3);
list.prepend('Hello');
list.insert(2, 'World');
list.remove(4);

list.printAll();
```

You should now see something like this:

```bash
Hello
1
World
2
3
```

## Test Cases

```js
describe('DoublyLinkedList', () => {
  let list;

  beforeEach(() => {
    list = new DoublyLinkedList();
  });

  it('should append elements to the end of the list', () => {
    list.append(1);
    list.append(2);
    expect(list.get(0).data).toBe(1);
    expect(list.get(1).data).toBe(2);
  });

  it('should prepend elements to the beginning of the list', () => {
    list.prepend(1);
    list.prepend(2);
    expect(list.get(0).data).toBe(2);
    expect(list.get(1).data).toBe(1);
  });

  it('should insert elements at a specific index', () => {
    list.append(1);
    list.append(3);
    list.insert(1, 2);
    expect(list.get(0).data).toBe(1);
    expect(list.get(1).data).toBe(2);
    expect(list.get(2).data).toBe(3);
  });

  it('should remove elements from the list', () => {
    list.append(1);
    list.append(2);
    list.append(3);
    list.remove(2);
    expect(list.get(0).data).toBe(1);
    expect(list.get(1).data).toBe(3);
  });

  it('should return null for invalid indices', () => {
    list.append(1);
    expect(list.get(-1)).toBe(null);
    expect(list.get(1)).toBe(null);
  });

  it('should have the correct length after operations', () => {
    expect(list.length).toBe(0);
    list.append(1);
    expect(list.length).toBe(1);
    list.prepend(2);
    expect(list.length).toBe(2);
    list.remove(1);
    expect(list.length).toBe(1);
    list.remove(2);
    expect(list.length).toBe(0);
  });

  it('should handle inserting at the beginning and end correctly', () => {
    list.insert(0, 1);
    list.insert(1, 2);
    expect(list.get(0).data).toBe(1);
    expect(list.get(1).data).toBe(2);
  });

  it('should return true when an item is successfully removed', () => {
    list.append(1);
    list.append(2);
    expect(list.remove(2)).toBe(true);
  });

  it('should return false when removing an item not in the list', () => {
    list.append(1);
    expect(list.remove(2)).toBe(false);
  });
});
```
