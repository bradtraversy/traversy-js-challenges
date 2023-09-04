const Queue = require('./queue');

const reverseStringWithQueue = () => {
  //  Create a new queue.
  const queue = new Queue();

  //  Enqueue each character in str.
  for (let i = str.length - 1; i >= 0; i--) {
    queue.enqueue(str[i]);
  }

  //  Create a variable to store the reversed string.
  let reversedString = '';

  //  Dequeue the characters from the queue to construct the reversed string.
  while (!queue.isEmpty()) {
    reversedString += queue.dequeue();
  }

  //  Return the reversed string.
  return reversedString;
};

module.exports = reverseStringWithQueue;
