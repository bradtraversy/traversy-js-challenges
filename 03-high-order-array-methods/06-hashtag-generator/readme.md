# Challenge: Hashtag Generator

## Instructions

Write a function called `generateHashtag` that takes a string as input and returns a hashtag-generated string according to the rules below. If the generated hashtag string is longer than 140 characters or the input/result is an empty string, the function should return `false`.

### Function Signature

```js
/**
 * Generates a hashtag from the input string.
 * @param {string} str - The input string.
 * @returns {string|boolean} - The generated hashtag string or false.
 */
function generateHashtag(str: string): string | boolean;
```

### Examples

```JS
generateHashtag("JavaScript is awesome"); // "#JavaScriptIsAwesome"
generateHashtag("hello world"); // "#HelloWorld"
generateHashtag("This is a very very very very very very very very very very very very very very long input that should result in a false hashtag because it exceeds the character limit of 140"); // false
generateHashtag(""); // false
```

### Constraints

- Return `false` if the input string is empty or contains only whitespace characters.
- Return `false` if the generated hashtag string is longer than 140 characters.
- Every word in the hashtag should start with a capital letter.
- The input string may contain leading/trailing whitespace characters.

### Hints

- You can use the string manipulation methods `trim()`, `split()`, and `join()` to work with the input string.
- You can use the string method `charAt()` to get the character at a specific index.
- Use string methods to capitalize the first letter of each word.

## Solutions

<details>
  <summary>Click For Solution 1</summary>

```js
function generateHashtag(str) {
  if (str.trim() === '') {
    return false;
  }

  const words = str.trim().split(/\s+/);
  const capitalizedWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );

  const hashtag = '#' + capitalizedWords.join('');

  if (hashtag.length > 140) {
    return false;
  }

  return hashtag;
}
```

### Explanation

- Check if the input string is empty or contains only whitespace characters. If so, return `false`.
- Split the input string into an array of words using the `split()` method. The `split()` method accepts a regular expression as an argument. The regular expression `/\s+/` matches one or more whitespace characters.
- Use the `map()` method to create a new array of capitalized words. The `map()` method accepts a callback function as an argument. The callback function is called for each element in the array. The callback function accepts the current element as an argument. The callback function returns the capitalized word.
- Join the capitalized words into a string using the `join()` method. The `join()` method accepts a string as an argument. The string is used to join the elements of the array. In this case, we want to join the elements of the array without any characters between them.
- Check if the generated hashtag string is longer than 140 characters. If so, return `false`.
- Return the generated hashtag string.

</details>

<details>
  <summary>Click For Solution 2</summary>

```js
function generateHashtag(str) {
  const hashtag = str.split(' ').reduce(function (tag, word) {
    return tag + word.charAt(0).toUpperCase() + word.substring(1);
  }, '#');

  return hashtag.length == 1 || hashtag.length > 140 ? false : hashtag;
}
```

### Explanation

- Split the input string into an array of words using the `split()` method.
- Use the `reduce()` method to create the hashtag string. We are passing the `#` character as the initial value of the accumulator. Then we are concatenating the accumulator with the capitalized word and then concatenating that with the rest of the word. We do this for each word in the array.
- Check if the generated hashtag string is longer than 140 characters. If so, return `false`.
- Return the generated hashtag string.

</details>
