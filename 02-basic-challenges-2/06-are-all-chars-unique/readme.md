# Challenge: Are all characters unique?

## Instructions

Write a function called `areAllCharactersUnique` that takes in a string and returns `true` or `false` depending on whether all characters in the string are unique (i.e., no character is repeated).

### Function Signature

```js
/**
 * Returns true if all characters in a string are unique.
 * @param {string} str - The string to check.
 * @returns {boolean} - Whether all characters in the string are unique.
 */
function areAllCharactersUnique(str: string): boolean;
```

### Examples

```js
areAllCharactersUnique('abcdefg'); // true
areAllCharactersUnique('abcdefgA'); // true
areAllCharactersUnique('programming'); // false
areAllCharactersUnique(''); // true
areAllCharactersUnique('a'); // true
```

### Constraints

- It should be case sensitive, so `a` and `A` are considered different characters
- An empty string should return `true` by default

### Hints

- You can use a for loop to iterate through the string and check if the current character is in the set or object.

## Solutions

<details>
  <summary>Click For Solution 1</summary>

Using a `Set`:

```js
function areAllCharactersUnique(str) {
  const charSet = new Set();

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (charSet.has(char)) {
      return false;
    }
    charSet.add(char);
  }

  return true;
}
```

### Explanation

-Initialize a new `Set` to keep track of the characters we've seen so far.

- Iterate through the string and check if the current character is in the set. If it is, we return `false` because it means we've seen the character before. If it isn't, we add it to the set.
- If we make it through the entire string without returning `false`, we return `true` because it means we haven't seen any characters more than once.

</details>

<details>
  <summary>Click For Solution 2</summary>

Using an object:

```js
function areAllCharactersUnique(str) {
  const charCount = {};

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (charCount[char]) {
      return false;
    }
    charCount[char] = true;
  }

  return true;
}
```

### Explanation

This solution is similar except we use an object instead of a `Set` to keep track of the characters we've seen so far.

Then we iterate through the string and check if the current character is in the object. If it is, we return `false` because it means we've seen the character before. If it isn't, we add it to the object.

If we make it through the entire string without returning `false`, we return `true` because it means we haven't seen any characters more than once.

</details>

### Test Cases

```js
test('Unique Characters in a String', () => {
  expect(areAllCharactersUnique('abcdefg')).toBe(true);
  expect(areAllCharactersUnique('abcdefgA')).toBe(true);
  expect(areAllCharactersUnique('programming')).toBe(false);
  expect(areAllCharactersUnique('')).toBe(true);
  expect(areAllCharactersUnique('a')).toBe(true);
});
```
