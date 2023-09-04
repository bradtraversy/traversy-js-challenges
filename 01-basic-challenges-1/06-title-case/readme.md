# Challenge: Title Case

## Instructions

Write a function called `titleCase` that takes in a string and returns the string with the first letter of each word capitalized.

### Function Signature

```js
/**
 * Returns a string with the first letter of each word capitalized.
 * @param {string} str - The string to capitalize.
 * @returns {string} - The string with the first letter of each word capitalized.
 */
function titleCase(str: string): string;
```

### Examples

```js
titleCase("I'm a little tea pot"); // I'm A Little Tea Pot
titleCase('sHoRt AnD sToUt'); // Short And Stout
titleCase('HERE IS MY HANDLE HERE IS MY SPOUT'); // Here Is My Handle Here Is My Spout
```

### Constraints

- You may assume that each word consists of only letters and spaces

### Hints

## Solutions

<details>
  <summary>Click For Solution 1</summary>

```php
function titleCase(str) {
  const words = str.toLowerCase().split(' ');

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }

  return words.join(' ');
}
```

### Explanation

- Split the string into an array of words and put them all in lowercase.
- Iterate through the array and capitalize the first letter of each word by using the 0 index of the word and concatenating it with the rest of the word.
- Join the array back into a string and return it.

</details>

<details>
  <summary>Click For Solution 2</summary>

```js
function titleCase(str) {
  return str.replace(/\b\w/g, (match) => match.toUpperCase());
}
```

## Explanation

In this example, we are using the replace method to find the first letter of each word and replace it with the uppercase version of itself.

The regex `/\b\w/g` matches the first letter of each word.

- `\b` matches the word boundary
- `\w` matches the first letter of each word
- The `g` flag is used to replace all occurrences of the regex in the string

The second argument is a callback function that returns the uppercase version of the matched letter.

</details>

### Test Cases

```js
test('Converting string to title case', () => {
  expect(titleCase('hello world')).toBe('Hello World');
  expect(titleCase('javascript programming')).toBe('Javascript Programming');
  expect(titleCase('openai chatbot')).toBe('Openai Chatbot');
});
```
