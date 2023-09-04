// Node class
class Node {
  constructor(data) {
    // The data the node holds.
    this.data = data;
    // The next node in the list.
    this.next = null;
  }
}

// Linked list class
class LinkedList {
  constructor() {
    // The head of the list.
    this.head = null;
    // The tail of the list.
    this.tail = null;
  }

  // Add a node to the end of the list
  /*
    Time Complexity: O(1)
    Space Complexity: O(1)
  */
  add(data) {
    // Create a new node
    const node = new Node(data);

    // If the list is empty, set the head to the new node
    if (this.head === null) {
      this.head = node;
    } else {
      // Otherwise, set the next node of the tail to the new node
      this.tail.next = node;
    }

    // Set the tail to the new node
    this.tail = node;
  }

  // Get a single node at a specific index
  /*
    Time Complexity: O(n)
    Space Complexity: O(1)
  */
  get(index) {
    // Start at the head
    let current = this.head;
    // The index of the current node
    let i = 0;

    // Loop through each node until we reach the index
    while (i < index) {
      // Move to the next node
      current = current.next;
      i++;
    }

    // Return the data of the current node
    return current.data;
  }

  // Insert at a specific index
  /*
    Time Complexity: O(n)
    Space Complexity: O(1)
  */
  insertAt(index, data) {
    // If the index is 0, set the head to the new node
    if (index === 0) {
      const node = new Node(data);
      node.next = this.head;
      this.head = node;
    } else {
      // Otherwise, start at the head
      let current = this.head;
      let previous = null;
      let i = 0;

      // Loop through each node until we reach the index
      while (i < index) {
        previous = current;
        current = current.next;
        i++;
      }

      // Create a new node
      const node = new Node(data);
      //   Set the next node of the new node to the current node
      node.next = current;
      //  Set the next node of the previous node to the new node
      previous.next = node;
    }
  }

  /*
    Time Complexity: O(n)
    Space Complexity: O(1)
  */
  // Remove a node from a specific index
  removeFrom(index) {
    // If the index is 0, set the head to the next node
    if (index === 0) {
      this.head = this.head.next;
    } else {
      // Otherwise, start at the head
      let current = this.head;
      let previous = null;
      let i = 0;

      // Loop through each node until we reach the index
      while (i < index) {
        // Move to the next node
        previous = current;
        current = current.next;
        i++;
      }

      // Set the next node of the previous node to the next node of the current node
      previous.next = current.next;
    }
  }

    // Print all the nodes in the list
  /*
    Time Complexity: O(n)
    Space Complexity: O(1)
  */
  printAll() {
    // Start at the head
    let current = this.head;

    // Loop through each node
    while (current !== null) {
      // Print the data
      console.log(current.data);
      // Move to the next node
      current = current.next;
    }
  }
}

module.exports = { Node, LinkedList };
