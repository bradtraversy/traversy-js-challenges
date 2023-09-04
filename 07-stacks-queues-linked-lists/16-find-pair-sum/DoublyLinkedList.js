function Node(data) {
  this.data = data;
  this.next = null;
  this.prev = null;
}

function DoublyLinkedList() {
  this.head = null;
  this.tail = null;
  this.length = 0;
}

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

DoublyLinkedList.prototype.insertAt = function (index, data) {
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

DoublyLinkedList.prototype.get = function (index) {
  if (index < 0 || index > this.length) {
    return null;
  }

  let currentNode = this.head;

  for (let i = 0; i < index; i++) {
    currentNode = currentNode.next;
  }

  return currentNode;
};

DoublyLinkedList.prototype.remove = function (index) {
  if (index < 0 || index > this.length) {
    return null;
  }

  if (index === 0) {
    this.head = this.head.next;

    if (this.head) {
      this.head.prev = null;
    } else {
      this.tail = null;
    }
  } else if (index === this.length - 1) {
    this.tail = this.tail.prev;

    if (this.tail) {
      this.tail.next = null;
    } else {
      this.head = null;
    }
  } else {
    let currentNode = this.head;

    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }

    currentNode.prev.next = currentNode.next;
    currentNode.next.prev = currentNode.prev;
  }

  this.length--;
};

DoublyLinkedList.prototype.contains = function (data) {
  let current = this.head;

  while (current) {
    if (current.data === data) {
      return true;
    }
    current = current.next;
  }

  return false;
};

DoublyLinkedList.prototype.printAll = function () {
  let current = this.head;

  while (current) {
    console.log(current.data);
    current = current.next;
  }
};

module.exports = DoublyLinkedList;
