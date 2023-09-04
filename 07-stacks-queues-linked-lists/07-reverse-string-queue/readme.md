# Challenge Reverse a String Using a Queue

## Instructions

Write a function called `reverseStringQueue` that takes in a string and returns the reverse of that string.

The function should return the reversed string, but I want you to use the `Queue` class to do it.

### Function Signature

```js
/**
 * Returns the reverse of a string.
 * @param {string} str - The string to reverse.
 * @returns {string} - The reverse of the string.
 */
function reverseStringQueue(str: string): string;
```

### Examples

```js
reverseStringQueue('hello'); // olleh
reverseStringQueue('Howdy'); // ydwoH
reverseStringQueue('Greetings from Earth'); // htraE morf sgniteerG
```

### Constraints

- The string will only contain lowercase letters and spaces

### Hints

- Enqueue all the characters in the string into the queue
- Dequeue all the characters from the queue and add them to a new string

## Solutions

<details>
  <summary>Click For Solution</summary>

```js
const Queue = require('./queue');

const reverseStringWithQueue = (str) => {
  const queue = new Queue();

  for (let i = str.length - 1; i >= 0; i--) {
    queue.enqueue(str[i]);
  }

  let reversedString = '';
  while (!queue.isEmpty()) {
    reversedString += queue.dequeue();
  }

  return reversedString;
};
```

### Explanation

- Bring in our queue class and initialize a new queue
- Iterate over the str and enqueue each character into the queue.
- Create an empty string and dequeue each character from the queue and add it to the string.
- Return the string.

</details>

### Test Cases

```js
test('Reversing a string', () => {
  expect(reverseStringQueue('Hello')).toBe('olleH');
  expect(reverseStringQueue('JavaScript')).toBe('tpircSavaJ');
  expect(reverseStringQueue('12345')).toBe('54321');
});
```
