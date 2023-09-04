# Challenge: Reverse String

## Instructions

Write a function called `reverseString` that takes in a string and returns the reverse of that string. In this section, we are really focusing on loops without using any built-in methods, so try that first. If you get stuck, you can always use the built-in methods to solve the problem.

### Function Signature

```js
/**
 * Returns the reverse of a string.
 * @param {string} str - The string to reverse.
 * @returns {string} - The reverse of the string.
 */
function reverseString(str: string): string;
```

### Examples

```JS
reverseString('hello') // 'olleh'
reverseString('world') // 'dlrow'
reverseString('') // ''
```

### Constraints

- The input string will only contain lowercase letters and spaces

### Hints

- You can also do this without using any of the built-in methods and just use a for loop.
- You could also use the methods `split`, `reverse`, and `join` to solve this problem.

## Solutions

<details>
  <summary>Click For Solution 1</summary>

This solution uses a for loop to reverse the string.

```js
function reverseString(str) {
  let reversed = '';

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  return reversed;
}
```

## Explanation

- Create a variable called `reversed` and set it equal to an empty string.
- Create a for loop that starts at the last index of `str` and decrements by 1 until it reaches 0.
- Add the character at the current index to the `reversed` variable.
- Return the `reversed` variable.

</details>

<details>
  <summary>Click For Solution 2</summary>

This solution uses built-in methods to reverse the string.

```js
function reverseString(str) {
  return str.split('').reverse().join('');
}
```

### Explanation

We created a function called `reverseString` that takes in a string called `str`. We then return the result of chaining the `split`, `reverse`, and `join` methods on `str`.

The `split` function takes in a string and turns it into an array. We passed in an empty string as an argument to `split` so that it will split the string into an array of characters.(["h", "e", "l", "l", "o"])

The `reverse` function takes in an array and reverses it. (["o", "l", "l", "e", "h"])

The `join` function takes in an array and turns it into a string. We passed in an empty string as an argument to `join` so that it will join the array of characters into a string. ('olleh')

</details>

### Test Cases

```JS
test('Reversing a string', () => {
  expect(reverseString('Hello')).toBe('olleH');
  expect(reverseString('JavaScript')).toBe('tpircSavaJ');
  expect(reverseString('12345')).toBe('54321');
});

```
