# Challenge: Anagram Grouping

Anagrams are words or phrases formed by rearranging the letters of another word or phrase. For example, `cinema` is an anagram of `iceman`.

## Instructions

Write a function called `anagramGrouping` that takes an array of strings as input and returns an array of arrays, where each sub-array contains words that are anagrams of each other.

### Function Signature

```js
/**
 * Returns an array of arrays, where each sub-array contains words that are anagrams of each other.
 * @param {string[]} words - The input array of strings containing words.
 * @returns {string[][]} - The array of arrays with anagram groups.
 */
function anagramGrouping(words: string[]): string[][];
```

### Examples

```js
anagramGrouping(['cat', 'act', 'dog', 'god', 'tac']);
// Output: [['cat', 'act', 'tac'], ['dog', 'god']]

anagramGrouping(['listen', 'silent', 'enlist', 'hello', 'world']);
// Output: [['listen', 'silent', 'enlist'], ['hello'], ['world']]
```

### Constraints

- The input array `words` will contain only lowercase alphabetical characters.

### Hints

- You can use a map to store the anagram groups, where the key is the sorted characters of each word, and the value is an array of words that have the same sorted characters
- You can sort a string by splitting it into an array of chars and calling `.sort()` and then `join()` it back to a string
- You can use `Array.from()` to convert a map to an array

## Solutions

<details>
  <summary>Click For Solution</summary>

```js
function anagramGrouping(words) {
  const anagramGroups = new Map();

  for (const word of words) {
    const sortedChars = word.split('').sort().join('');
    if (anagramGroups.has(sortedChars)) {
      anagramGroups.get(sortedChars).push(word);
    } else {
      anagramGroups.set(sortedChars, [word]);
    }
  }

  return Array.from(anagramGroups.values());
}
```

### Explanation

- Create a new map `anagramGroups` to store the anagram groups.
- Iterate through each word in the input array `words`. For each word, split its characters into an array, sort the array in ascending order, and then join the sorted characters back into a string. This sorted string becomes the key for our `anagramGroups` map.
- Check if the key already exists in the map. If it does, retrieve the corresponding array and add the word to it.
- If the key does not exist in the map, create a new array with the word as the first element and add it to the map with the key.
- After processing all the words, extract the arrays of anagram groups from the `anagramGroups` map using `Array.from(anagramGroups.values())` and return them as the final output.

</details>

### Test Cases

```js
test('Grouping anagrams', () => {
  const result1 = anagramGrouping(['cat', 'act', 'dog', 'god', 'tac']);
  const result2 = anagramGrouping([
    'listen',
    'silent',
    'enlist',
    'hello',
    'world',
  ]);

  expect(result1).toEqual([
    ['cat', 'act', 'tac'],
    ['dog', 'god'],
  ]);
  expect(result2).toEqual([
    ['listen', 'silent', 'enlist'],
    ['hello'],
    ['world'],
  ]);
});
```
