# Linked List Implementation

In the last lesson, we talked about what a linked list is and how it works. In this lesson, we'll implement one in JavaScript.

## `Node` Class & Constructor

Before we create the linked list class, we need to create a node class. The node class will be used to create the nodes that make up the linked list. Each node will have a data property and a next property. The data property will store the data that the node holds. The next property will point to the next node in the linked list.

```js
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
```

## `LinkedList` Class & Constructor

Now that we have a node class, we can create the linked list class. The linked list class will have a head property and a tail property. The head property will point to the first node in the linked list. The tail property will point to the last node in the linked list. When we start out, the head and tail properties will both be null.

```js
class LinkedList() {
   constructor() {
    this.head = null;
    this.tail = null;
  }
}
```

## `add` Method

The `add` method will add a new node to the end of the linked list. It takes in a `data` value and will get passed into the node constructor. It then checks to see if the head property is null. If it is, it sets the head property to the new node. If it isn't, it sets the next property of the tail node to the new node. It then sets the tail property to the new node.

The time complexity of this method is O(1) because it doesn't have to loop through the linked list to add the new node. It just has to set the next property of the tail node to the new node and then set the tail property to the new node.

```js
add(data) {
  const node = new Node(data);

  if (this.head === null) {
    this.head = node;
  } else {
    this.tail.next = node;
  }

  this.tail = node;
}
```

## `printAll` Method

I want to be able to test this out, so let's add a method that will print out all of the nodes in the linked list. The `printAll` method will start at the head node and loop through each node until it reaches the tail node. It will print out the data of each node as it loops through.

```js
  printAll() {
    let current = this.head;

    while (current !== null) {
      console.log(current.data);
      current = current.next;
    }
  }
```

We can now test this out by creating a new linked list and adding some nodes to it.

```js
const list = new LinkedList();

list.add(1);
list.add(2);
list.add(3);
list.add(4);

list.printAll();
```

## `get` Method

The `get` method will return the data of the node at the specified index. It takes in an `index` value and loops through the linked list until it reaches the node at the specified index. It then returns the data of that node. The time complexity of this method is O(n) because it has to loop through the linked list to find the node at the specified index. Arrays are better for this because they have constant time access. The time complexity of accessing an element in an array is O(1).

```js
 get(index) {
    let current = this.head;
    let i = 0;

    while (i < index) {
      current = current.next;
      i++;
    }

    return current.data;
  }

```

## `insertAt` Method

The `insertAt` method will insert a new node at the specified index. It takes in an `index` value and a `data` value. It then checks to see if the index is 0. If it is, it creates a new node and sets the next property of the new node to the head node. It then sets the head property to the new node. If the index is not 0, it loops through the linked list until it reaches the node at the specified index. It then creates a new node and sets the next property of the new node to the node at the specified index. It then sets the next property of the previous node to the new node. The time complexity of this method is O(n) because it has to loop through the linked list to find the node at the specified index. Arrays are better for this because they have constant time access. The time complexity of accessing an element in an array is O(1).

```js
 insertAt(index, data) {
    if (index === 0) {
      const node = new Node(data);
      node.next = this.head;
      this.head = node;
    } else {
      let current = this.head;
      let previous = null;
      let i = 0;

      while (i < index) {
        previous = current;
        current = current.next;
        i++;
      }

      const node = new Node(data);
      node.next = current;
      previous.next = node;
    }
  }
```

## `removeFrom` Method

The `removeFrom` method will remove the node at the specified index. It takes in an `index` value and checks to see if the index is 0. If it is, it sets the head property to the next property of the head node. If it isn't, it loops through the linked list until it reaches the node at the specified index. It then sets the next property of the previous node to the next property of the current node.

```js
  removeFrom(index) {
    if (index === 0) {
      this.head = this.head.next;
    } else {
      let current = this.head;
      let previous = null;
      let i = 0;

      while (i < index) {
        previous = current;
        current = current.next;
        i++;
      }

      previous.next = current.next;
    }
  }
}
```
