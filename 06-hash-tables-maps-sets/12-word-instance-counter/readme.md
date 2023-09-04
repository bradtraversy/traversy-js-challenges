# Challenge: Word Frequency Counter using HashTable

## Instructions

Write a function called `wordInstanceCounter` that takes a string and a word as input and returns the number of instances of that word in the string. This function should count the occurrences of the specified word, ignoring case and excluding punctuation.

### Function Signature

```js
/**
 * Returns the number of instances of the specified word in the input string.
 * @param {string} str - The input string containing words.
 * @param {string} word - The word to count instances of.
 * @returns {number} - The number of instances of the specified word.
 */
function wordInstanceCounter(str: string, word: string): number
```

### Examples

```js
console.log(
  wordInstanceCounter('The quick brown fox jumps over the lazy dog.', 'the')
); // Output: 2
console.log(
  wordInstanceCounter(
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'ipsum'
  )
); // Output: 1
console.log(wordInstanceCounter('Hello, world!', 'hello')); // Output: 1
console.log(wordInstanceCounter('Hello, Hello, Hello!', 'hello')); // Output: 3
```

### Constraints

- The input string will only contain letters, spaces, and punctuation marks.

### Hints

- You can use a `HashTable` to store the word frequencies, where the word is the key, and the count is the value. Loop through each word, update the count in the `HashTable`, and return the count of the specified word.

### Solution

<details>
  <summary>Click For Solution</summary>

```js
function wordInstanceCounter(str, word) {
  const words = str.toLowerCase().split(/\W+/);
  const wordFrequency = new HashTable();
  const targetWord = word.toLowerCase();
  let count = 0;

  for (const currentWord of words) {
    if (currentWord === '') continue;

    if (wordFrequency.has(currentWord)) {
      wordFrequency.set(currentWord, wordFrequency.get(currentWord) + 1);
    } else {
      wordFrequency.set(currentWord, 1);
    }

    if (currentWord === targetWord) {
      count = wordFrequency.get(currentWord);
    }
  }

  return count;
}
```

</details>

### Test Cases

```js
test('Counting instances of a word in a string', () => {
  expect(
    wordInstanceCounter('The quick brown fox jumps over the lazy dog.', 'the')
  ).toBe(2);
  expect(
    wordInstanceCounter(
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'ipsum'
    )
  ).toBe(1);
  expect(wordInstanceCounter('Hello, world!', 'hello')).toBe(1);
  expect(wordInstanceCounter('Hello, Hello, Hello!', 'hello')).toBe(3);
});
```
