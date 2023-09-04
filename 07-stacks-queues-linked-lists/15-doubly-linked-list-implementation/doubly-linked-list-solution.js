// Node class to represent a node in the linked list
function Node(data) {
  this.data = data;
  this.next = null;
  this.prev = null;
}

// Doubly linked list class
function DoublyLinkedList() {
  this.head = null; // Head points to the first node in the list
  this.tail = null; // Tail points to the last node in the list
  this.length = 0; // Length of the list
}

// Add a new node to the end of the list
DoublyLinkedList.prototype.append = function (data) {
  // Create a new node
  const newNode = new Node(data);

  // If the list is empty, set the head and tail to the new node
  if (!this.head) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    // If the list is not empty, add the new node to the end of the list
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
  }

  // Increment the length of the list
  this.length++;
};

// Add a new node to the beginning of the list
DoublyLinkedList.prototype.prepend = function (data) {
  // Create a new node
  const newNode = new Node(data);

  // If the list is empty, set the head and tail to the new node
  if (!this.head) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    // If the list is not empty, add the new node to the beginning of the list
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
  }

  // Increment the length of the list
  this.length++;
};

// Insert a new node at the specified index
DoublyLinkedList.prototype.insertAt = function (index, data) {
  // If the index is invalid, return null
  if (index < 0 || index > this.length) {
    return null;
  }

  // If the index is 0, prepend the new node to the beginning of the list
  if (index === 0) {
    return this.prepend(data);
  }

  // If the index is equal to the length of the list, append the new node to the end of the list
  if (index === this.length) {
    return this.append(data);
  }

  // Create a new node
  const newNode = new Node(data);
  // Find the node at the index - 1
  let currentNode = this.head;

  // Iterate through the list until we reach the node at the index - 1
  for (let i = 0; i < index - 1; i++) {
    currentNode = currentNode.next;
  }

  // Set the next and prev pointers of the new node
  newNode.next = currentNode.next;
  newNode.prev = currentNode;
  currentNode.next.prev = newNode;
  currentNode.next = newNode;

  // Increment the length of the list
  this.length++;
};

// Get the node at the specified index
DoublyLinkedList.prototype.get = function (index) {
  // If the index is invalid, return null
  if (index < 0 || index >= this.length) {
    return null;
  }

  // Set the current node to the head
  let currentNode = this.head;
  // Iterate through the list
  for (let i = 0; i < index; i++) {
    // Set the current node to the next node
    currentNode = currentNode.next;
  }

  return currentNode;
};

// Remove the node at the specified index
DoublyLinkedList.prototype.remove = function (index) {
  // Check if index is out of bounds
  if (index < 0 || index >= this.length) {
    return null; // Return null if index is invalid
  }

  // Removing the first node
  if (index === 0) {
    this.head = this.head.next; // Update head to the next node
    if (this.head) {
      this.head.prev = null; // Update new head's prev pointer to null
    } else {
      this.tail = null; // List is empty after removal
    }
  } else if (index === this.length - 1) {
    // Removing the last node
    this.tail = this.tail.prev; // Update tail to the previous node
    if (this.tail) {
      this.tail.next = null; // Update new tail's next pointer to null
    } else {
      this.head = null; // List is empty after removal
    }
  } else {
    // Removing a node in the middle
    let currentNode = this.head;

    // Traverse to the node at the given index
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }

    // Update pointers to skip the current node
    currentNode.prev.next = currentNode.next; // Update prev node's next pointer
    currentNode.next.prev = currentNode.prev; // Update next node's prev pointer
  }

  // Decrement the length of the list
  this.length--;
};

// See if the list contains a node with the specified data
DoublyLinkedList.prototype.contains = function (data) {
  // Set the current node to the head
  let current = this.head;

  // Iterate through the list
  while (current) {
    // If the data of the current node is equal to the data we are looking for, return true
    if (current.data === data) {
      return true;
    }
    current = current.next;
  }

  return false;
};

// Print all the nodes in the list
DoublyLinkedList.prototype.printAll = function () {
  // Set the current node to the head
  let current = this.head;

  // Iterate through the list
  while (current) {
    // Print the data of the current node
    console.log(current.data);
    // Set the current node to the next node
    current = current.next;
  }
};

module.exports = DoublyLinkedList;
