# Challenge: Word Frequency Counter

## Instructions

Write a function called `wordFrequencyCounter` that takes a string as input and returns a map that represents the frequency of each word in the string. We did a similar challenge way back that counted the occurrences of a character. This function should count the occurrences of each word, ignoring case and excluding punctuation.

### Function Signature

```js
/**
 * Returns a map that represents the frequency of each word in the input string.
 * @param {string} str - The input string containing words.
 * @returns {Map<string, number>} - The map with word frequency.
 */
function wordFrequencyCounter(str) {
  // Your code here
}
```

### Examples

```js
wordFrequencyCounter('The quick brown fox jumps over the lazy dog.');
// Output: Map { 'the' => 2, 'quick' => 1, 'brown' => 1, 'fox' => 1, 'jumps' => 1, 'over' => 1, 'lazy' => 1, 'dog' => 1 }

wordFrequencyCounter(
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
);
// Output: Map { 'lorem' => 1, 'ipsum' => 1, 'dolor' => 1, 'sit' => 1, 'amet' => 1, 'consectetur' => 1, 'adipiscing' => 1, 'elit' => 1 }
```

### Constraints

- The input string will only contain letters, spaces, and punctuation marks.

### Hints

- You can use the `toLowerCase()` method to convert the input string to lowercase, so you can ignore the case when counting word frequency.
- Regular expressions can be helpful for splitting the string into words and removing punctuation marks.
- You can use a map to store the word frequencies, where the word is the key, and the count is the value. Loop through each word, update the count in the map, and return the final map.

### Solutions

<details>
  <summary>Click For Solution</summary>

```js
function wordFrequencyCounter(str) {
  // Convert the string to lowercase and split it into an array of words
  const words = str.toLowerCase().split(/\W+/);

  // Create an empty map to store word frequencies
  const wordFrequency = new Map();

  // Loop through each word in the array
  for (const word of words) {
    // Ignore empty strings (caused by multiple spaces or punctuation marks)
    if (word === '') continue;

    // If the word is already in the map, increment its frequency
    if (wordFrequency.has(word)) {
      wordFrequency.set(word, wordFrequency.get(word) + 1);
    } else {
      // If the word is not in the map, add it with a frequency of 1
      wordFrequency.set(word, 1);
    }
  }

  return wordFrequency;
}
```

### Explanation

- Create a variable `words` to store the lowercase version of the input string, split into an array of words. The regular expression `/W+/` matches one or more non-word characters, which includes spaces and punctuation marks. This will split the string into an array of words, ignoring spaces and punctuation marks.

- Create an empty `Map` called `wordFrequency` to store the word frequencies.

- Iterate through each word in the array. If the word is an empty string (which can be caused by multiple spaces or punctuation marks), skip it using `continue`. Otherwise, we check if the word is already in the map.
- If it is, we increment its frequency by 1. If it's not in the map, we add it to the map with a frequency of 1.
- Return the `wordFrequency` map, which contains the frequency of each word in the input string.

</details>

### Test Cases

```js
test('Counting word frequencies in a string', () => {
  const result1 = wordFrequencyCounter(
    'The quick brown fox jumps over the lazy dog.'
  );
  const result2 = wordFrequencyCounter(
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  );

  expect(result1.get('the')).toBe(2);
  expect(result1.get('quick')).toBe(1);
  expect(result1.get('brown')).toBe(1);
  expect(result1.get('fox')).toBe(1);
  expect(result1.get('jumps')).toBe(1);
  expect(result1.get('over')).toBe(1);
  expect(result1.get('lazy')).toBe(1);
  expect(result1.get('dog')).toBe(1);

  expect(result2.get('lorem')).toBe(1);
  expect(result2.get('ipsum')).toBe(1);
  expect(result2.get('dolor')).toBe(1);
  expect(result2.get('sit')).toBe(1);
  expect(result2.get('amet')).toBe(1);
  expect(result2.get('consectetur')).toBe(1);
  expect(result2.get('adipiscing')).toBe(1);
  expect(result2.get('elit')).toBe(1);
});
```
