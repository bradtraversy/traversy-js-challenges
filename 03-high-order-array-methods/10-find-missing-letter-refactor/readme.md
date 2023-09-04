# Challenge: Find Missing Letter Refactor

## Instructions

In the last section, we created a function called`findMissingLetter` that takes in an array of consecutive (increasing) letters as input and returns the missing letter in the array.

I want to do that same thing using high order array methods. It is possible to do it using `map`, `filter`, `reduce`, or `forEach`.

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

- The input array will always contain at least two letters
- The input array will only contain letters in one case (lower or upper)
- Use only high order array methods. No for loops allowed.

### Hints

- You can use `map` to get an array of the unicode numbers (using charCodeAt) of the letters in the input array and then use `find` to find the missing character code.
- You can also use `filter` as well as `reduce`

## Solutions

<details>
  <summary>Click For Solution 1 </summary>

This solution uses the `map` and `find` methods.

```js
function findMissingLetter(arr) {
  let start = arr[0].charCodeAt(0);
  const missingCharCode = arr
    .slice(1)
    .map((char) => char.charCodeAt(0))
    .find((current) => {
      if (current - start > 1) {
        return true;
      }
      start = current;
      return false;
    });
  return missingCharCode ? String.fromCharCode(missingCharCode - 1) : '';
}
```

### Explanation

- Declare a variable `start` and assigned it the ASCII code of the first letter of the input array.
- Declare a variable `missingCharCode` and assigned it the result of calling the `map` method on the input array. The callback function passed to the `map` method takes in a letter and returns the ASCII code of that letter.
- Call the `find` method on the result of the `map` method. The callback function passed to the `find` method takes in the current ASCII code and checks if the current ASCII code minus the previous ASCII code is greater than 1. If it is, it returns `true`. If it is not, it returns `false`.
- If the `find` method returns a truthy value, we return the letter that is one less than the current letter.
- If the `find` method returns a falsy value, we return an empty string.

</details>

<details>
  <summary>Click For Solution 2 </summary>

This solution uses the `filter` method.

```js
function findMissingLetter(arr) {
  const missingCharCode = arr.filter((char, index) => {
    if (index === 0) return false;
    const prevCharCode = arr[index - 1].charCodeAt(0);
    const currentCharCode = char.charCodeAt(0);
    return currentCharCode - prevCharCode > 1;
  })[0];

  return missingCharCode
    ? String.fromCharCode(missingCharCode.charCodeAt(0) - 1)
    : '';
}
```

### Explanation

- Declare a variable `missingCharCode` and assigned it the result of calling the `filter` method on the input array.
- The callback function passed to the `filter` method takes in a letter and its index and checks if the current letter is the first letter in the array. If it is, it returns `false`. If it is not, it checks if the current letter's ASCII code minus the previous letter's ASCII code is greater than 1. If it is, it returns `true`. If it is not, it returns `false`.
- If the `filter` method returns an array with a length greater than 0, we return the letter that is one less than the current letter.
- If the `filter` method returns an array with a length of 0, we return an empty string.

</details>

<details>
  <summary>Click For Solution 3 </summary>

This solution uses the `reduce` method.

```js
function findMissingLetter(arr) {
  let start = arr[0].charCodeAt(0);
  const missingCharCode = arr.reduce((missing, char) => {
    const current = char.charCodeAt(0);
    if (current - start > 1 && missing === null) {
      missing = start + 1;
    }
    start = current;
    return missing;
  }, null);
  return missingCharCode ? String.fromCharCode(missingCharCode) : '';
}
```

### Explanation

- Declare a variable `start` and assigned it the ASCII code of the first letter of the input array.
- Declare a variable `missingCharCode` and assigned it the result of calling the `reduce` method on the input array. The callback function passed to the `reduce` method takes in an accumulator and a letter. The accumulator is the missing ASCII code. The callback function checks if the current ASCII code minus the previous ASCII code is greater than 1 and if the accumulator is `null`. If it is, it assigns the missing ASCII code to the accumulator. It then assigns the current ASCII code to the `start` variable. It then returns the accumulator.
- If the `reduce` method returns a truthy value, we return the letter that is one less than the current letter.
- If the `reduce` method returns a falsy value, we return an empty string.

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
