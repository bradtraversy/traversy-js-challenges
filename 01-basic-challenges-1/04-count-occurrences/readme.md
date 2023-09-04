# Challenge: Count Occurrences


## Instructions

Write a function called `countOccurrences()` that takes in a string and a character and returns the number of occurrences of that character in the string.

### Function Signature

```js
/**
 * Returns the number of occurrences of a character in a string.
 * @param {string} str - The string to search.
 * @param {string} char - The character to search for.
 * @returns {number} - The number of occurrences of the character in the string.
 */
function countOccurrences(str: string, char: string): number;
```

### Examples

```js
countOccurrences('hello', 'l'); // 2
countOccurrences('hello', 'z'); // 0
```

### Constraints

- Lowercase and uppercase characters are considered different characters. If you want, you can make the function case insensitive

### Hints

- You can loop through a string just like you can loop through an array.
- You can use the `++` operator to increment a variable.
- You could take another approach and use the `split()` method to split the string into an array of substrings based on the given character.

## Solutions

<details>
  <summary>Click For Solution 1</summary>

```JavaScript
function countOccurrences(str, char) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    }
  }

  return count;
}

// Case insensitive version
// function countOccurrences(str, char) {
//   const lowerStr = str.toLowerCase();
//   const lowerChar = char.toLowerCase();

//   let count = 0;

//   for (let i = 0; i < lowerStr.length; i++) {
//     if (lowerStr[i] === lowerChar) {
//       count++;
//     }
//   }

//   return count;
// }

```

### Explanation

- Initialize a `count` variable to 0.

- Iterate through the string and check if the current character is equal to the character we're looking for. If it is, we increment the `count` variable.

- After the loop, we return the `count` variable.

- To make the function case insensitive, we can convert the string and character to lowercase before looping through the string.

</details>

<details>
  <summary>Click For Solution 2</summary>

```JavaScript
const countOccurrences = (str, char) => str.split(char).length - 1;
```

### Explanation

- Utilize the split method of the string to split it into an array of substrings based on the given character.

- Since splitting the string removes the character, the resulting array will have one less element than the number of occurrences of the character. Therefore, we can simply subtract 1 from the length of the array to get the count of occurrences.

This solution may be prettier, but it actually is not as efficient as the loop. The for loop solution directly counts the occurrences while iterating through the string, whereas the split solution involves splitting the string into an array and performing additional operations. The difference is negligible, but it is still good to be aware of.

</details>

### Test Cases

```js
test('Count Occurrences of a Character', () => {
  expect(countOccurrences('hello', 'l')).toBe(2);
  expect(countOccurrences('programming', 'm')).toBe(2);
  expect(countOccurrences('banana', 'a')).toBe(3);
});
```
