const { LinkedList } = require('./linked-list');

function reverseStringLinkedList(str) {
  // Create a new linked list
  const list = new LinkedList();

  // Add each character to the linked list
  for (let i = str.length - 1; i >= 0; i--) {
    list.add(str[i]);
  }

  // Create a variable to store the reversed string
  let reversedString = '';
  // Start at the head of the linked list
  let current = list.head;

  // Loop through each node in the linked list
  while (current !== null) {
    // Add the data of the current node to the reversed string
    reversedString += current.data;
    // Move to the next node
    current = current.next;
  }

  // Return the reversed string
  return reversedString;
}

module.exports = reverseStringLinkedList;
