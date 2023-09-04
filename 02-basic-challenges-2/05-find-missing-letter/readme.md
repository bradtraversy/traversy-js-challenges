# Challenge: Find Missing Letter

## Instructions

Write a function called `findMissingLetter` that takes in an array of consecutive (increasing) letters as input and returns the missing letter in the array.

### Function Signature

```js
/**
 * Returns the missing letter in an array of consecutive letters.
 * @param {string[]} arr - An array of consecutive letters.
 * @returns {string} - The missing letter.
 */
function findMissingLetter(arr: string[]): string;
```

### Examples

```js
findMissingLetter(['a', 'b', 'c', 'd', 'f']); // => "e"
findMissingLetter(['O', 'Q', 'R', 'S']); // => "P"
findMissingLetter(['t', 'u', 'v', 'w', 'x', 'z']); // => "y"
```

### Constraints

- The input array will only contain letters in one case (lower or upper)
- If no letters are in the array, return an empty string

### Hints

- You can put the alphabet in a string and use the `indexOf` method to get the index of a letter in the alphabet string.
- Another approach would be to use the `charCodeAt` method to get the unicode value of a letter. 

## Solutions

<details>
  <summary>Click For Solution 1 </summary>

```js
function findMissingLetter(arr) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const startIndex = alphabet.indexOf(arr[0]);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== alphabet[startIndex + i]) {
      return alphabet[startIndex + i];
    }
  }

  return '';
}
```

### Explanation

- Declare a variable `alphabet` and assign it a string of all the letters of the alphabet.
- Declare a variable `startIndex` and assigned it the index of the first letter of the input array in the `alphabet` string.
- Loop through the input array and check if the current letter in the input array is not equal to the letter at the current index in the `alphabet` string.
- If it is not equal, return the letter at the current index in the `alphabet` string.
- If we get to the end of the loop without returning anything, we return an empty string.

</details>

<details>
  <summary>Click For Solution 2 </summary>

```js
function findMissingLetter(arr) {
  let start = arr[0].charCodeAt(0);
  for (let i = 1; i < arr.length; i++) {
    const current = arr[i].charCodeAt(0);
    if (current - start > 1) {
      return String.fromCharCode(start + 1);
    }
    start = current;
  }
  return '';
}
```

### Explanation

- Declare a variable `start` and assigned it the ASCII code of the first letter of the input array.
- Loop through the input array and check if the ASCII code of the current letter minus the ASCII code of the previous letter is greater than 1.
- If it is, return the letter that is one greater than the previous letter.
- If we get to the end of the loop without returning anything, we return an empty string.

</details>

### Test Cases

```js
test('Find Missing Letter', () => {
  expect(findMissingLetter(['a', 'b', 'c', 'e'])).toBe('d');
  expect(findMissingLetter(['X', 'Z'])).toBe('Y');
  expect(findMissingLetter(['m', 'n', 'o', 'q', 'r'])).toBe('p');
  expect(findMissingLetter(['F', 'G', 'H', 'J'])).toBe('I');
});
```
