# Challenge: Reverse String Using a Stack

## Instructions

Write a function called `reverseStringStack` that takes in a string and returns the reversed version of the string. Be sure to use the `Stack` class that we created.

I am going to have you do the reverse string challenge using a bunch of different data structures. It may seem like overkill, which it is, but it will help you understand how each data structure works.

### Function Signature

```js
/**
 * Returns the reverse of a string.
 * @param {string} str - The string to reverse.
 * @returns {string} - The reverse of the string.
 */
function reverseStringStack(str: string): string;
```

### Constraints

- The string will only contain lowercase letters and spaces

### Examples

```js
reverseStringStack('hello'); // olleh
reverseStringStack('Howdy'); // ydwoH
reverseStringStack('Greetings from Earth'); // htraE morf sgniteerG
```

### Hints

- Push each character onto the stack
- Pop the characters from the stack to construct the reversed string

## Solutions

<details>
  <summary>Click For Solution</summary>

```js
const Stack = require('./stack');

function reverseString(str) {
  const stack = new Stack();

  // Push each character onto the stack
  for (let i = 0; i < str.length; i++) {
    stack.push(str[i]);
  }

  let reversedString = '';

  // Pop the characters from the stack to construct the reversed string
  while (!stack.isEmpty()) {
    reversedString += stack.pop();
  }

  return reversedString;
}
```

### Explanation

- Initialize a new `Stack` instance.
- Iterate through the string and pushed each character onto the stack.
- Initialize a variable called `reversedString` and set it to an empty string.
- Iterate through the stack and pop each character off and added it to the `reversedString` variable.
- Return the `reversedString` variable.

### Time & Space Complexity

The time complexity of the function `reverseString(str)` is `O(n)`, where n is the length of the input string str. This is because the function loops through the entire string once to push each character onto the stack, and then loops through the stack to pop the characters and construct the reversed string. Both operations take linear time with respect to the length of the input string.

The space complexity of the function is also `O(n)`, where n is the length of the input string str. This is because the function uses a stack to store each character of the input string, and the size of the stack is directly proportional to the length of the input string. Therefore, the space complexity grows linearly with the size of the input.

</details>

### Test Cases

```js
test('Reversing a string', () => {
  expect(reverseStringStack('Hello')).toBe('olleH');
  expect(reverseStringStack('JavaScript')).toBe('tpircSavaJ');
  expect(reverseStringStack('12345')).toBe('54321');
});
```
