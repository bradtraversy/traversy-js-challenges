# Challenge: Is Palindrome Using Queue and Stack

## Instructions

We are going to revisit the Palindrome challenge, but we are going to use BOTH the `Queue` and `Stack` data structures to solve it.

Create a function called `isPalindromeQueueStack` that takes in a string and checks if it is a palindrome.

The function should return `true` if the string is a palindrome, and `false` if it is not. Again, use the `Queue` and `Stack` data structures to solve this problem. If you don't get it on your own, that's fine. This is a tough one. Just make sure you understand the solution.

### Function Signature

```js
/**
 * Checks if a string is a palindrome.
 * @param {string} str - The string to check.
 * @returns {boolean} - True if the string is a palindrome, false if it is not.
 */
function isPalindromeQueueStack(str: string): boolean;
```

### Examples

```js
isPalindromeQueueStack('racecar'); // true
isPalindromeQueueStack('hello'); // false
isPalindromeQueueStack('A man, a plan, a canal: Panama'); // true
```

### Hints

- Remove all non-alphanumeric characters from the string
- Enqueue and push the characters of the string into the queue and stack respectively
- Dequeue and pop the characters from the queue and stack respectively
- Compare the characters from the queue and stack

## Solutions

<details>
  <summary>Click For Solution</summary>

```js
function isPalindromeQueueStack(str) {
  const formattedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  const charQueue = new Queue();
  const charStack = new Stack();

  for (let i = 0; i < formattedStr.length; i++) {
    const char = formattedStr.charAt(i);
    charQueue.enqueue(char);
    charStack.push(char);
  }

  while (!charQueue.isEmpty()) {
    if (charQueue.dequeue() !== charStack.pop()) {
      return false;
    }
  }

  return true;
}
```

### Explanation

- Remove all non-alphanumeric characters from the string and convert it to lowercase.
- Create a `Queue` and a `Stack` to hold the characters of the string.
- Iterate through the string and enqueue and push each character into the queue and stack respectively.
- Check if the queue is empty. If it is not, dequeue and pop the characters from the queue and stack respectively and compare them. If they are not equal, return `false`.
- If we make it through the entire string without returning `false`, return `true`.

</details>

### Test Cases

```js
test('Checking for palindrome strings', () => {
  expect(isPalindromeQueueStack('racecar')).toBe(true);
  expect(isPalindromeQueueStack('Hello')).toBe(false);
  expect(isPalindromeQueueStack('A man, a plan, a canal, Panama')).toBe(true);
  expect(isPalindromeQueueStack('12321')).toBe(true);
});
```
