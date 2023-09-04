# Challenge: Valid Anagrams

## Instructions

Write a function called `validAnagrams` that takes in two strings and determines whether they are valid anagrams of each other. An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

### Function Signature

```js
/**
 * Determines whether two strings are valid anagrams.
 * @param {string} str1 - The first string.
 * @param {string} str2 - The second string.
 * @returns {boolean} - True if the strings are valid anagrams, false otherwise.
 */
function validAnagrams(str1: string, str2: string): boolean;
```

### Examples

```js
validAnagrams('listen', 'silent'); // true
validAnagrams('hello', 'world'); // false
validAnagrams('astronomer', 'moonstarer'); // true
```

### Hints

- Split the strings into arrays of characters, then reduce each array into an object of character frequencies for the strings
- Compare the frequencies

## Solutions

<details>
  <summary>Click For Solution</summary>

```js
function validAnagrams(str1, str2) {
  const freqCount1 = str1.split('').reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {});

  const freqCount2 = str2.split('').reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {});

  return Object.keys(freqCount1).every(
    (char) => freqCount1[char] === freqCount2[char]
  );
}
```

### Explanation

- Create a variable `freqCount1` and assign it to the result of calling `reduce` on `str1.split('')`. This will create an object that contains the frequency count of each character in `str1`. For example, `validAnagrams('listen', 'silent')` will return `{ l: 1, i: 1, s: 1, t: 1, e: 1, n: 1 }` for `freqCount1`.
- Do the same for `freqCount2` and assign it to the result of calling `reduce` on `str2.split('')`. This will create an object that contains the frequency count of each character in `str2`.
- Object.keys will check if every character in `freqCount1` has the same frequency count in `freqCount2`. If all of the frequency counts are equal, `every` will return `true`. If any of the frequency counts are not equal, `every` will return `false` and we will know that the strings are not valid anagrams.

</details>

### Test Cases

```js
test('Checking for Valid Anagrams', () => {
  expect(validAnagrams('listen', 'silent')).toBe(true);
  expect(validAnagrams('hello', 'world')).toBe(false);
  expect(validAnagrams('astronomer', 'moonstarer')).toBe(true);
  expect(validAnagrams('apple', 'banana')).toBe(false);
});
```
