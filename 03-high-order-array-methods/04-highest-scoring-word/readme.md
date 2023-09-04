# Challenge: Highest Scoring Word

## Instructions

Given a string of words, you need to find the highest scoring word. Each letter of a word scores points according to its position in the alphabet: `a` = 1, `b` = 2, `c` = 3, and so on.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.

### Function Signature

```js
/**
 * Returns the highest scoring word from a string.
 * @param {string} str - The input string.
 * @returns {string} - The highest scoring word.
 */
function highestScoringWord(str: string): string;
```

### Examples

```js
highestScoringWord('man i need a taxi up to ubud'); // 'taxi'
highestScoringWord('what time are we climbing up the volcano'); // 'volcano'
highestScoringWord('take me to semynak'); // 'semynak'
```

### Constraints

- The input string will only contain lowercase letters and spaces. It can not include numbers, special characters, or punctuation.

### Hints

- You can use the `split` method to separate the words.
- You can use the `map` method to calculate the score for each word.
- You can use the `reduce` method to find the word with the highest score.

## Solutions

<details>
  <summary>Click For Solution 1</summary>

```js
function highestScoringWord(str) {
  const words = str.split(' ');

  const scores = words.map((word) => {
    let score = 0;
    for (const letter of word) {
      score += letter.charCodeAt(0) - 96;
    }
    return score;
  });

  let highestScore = 0;
  let highestIndex = 0;

  for (let i = 0; i < scores.length; i++) {
    if (scores[i] > highestScore) {
      highestScore = scores[i];
      highestIndex = i;
    }
  }

  return words[highestIndex];
}
```

## Explanation

- Split the input string into an array of words using the `split` method.
- Use the `map` method to calculate the score for each word. For each letter in a word, we get its character code using `charCodeAt(0)` and subtract 96 to get its position in the alphabet (e.g., `a` becomes 1, `b` becomes 2, and so on). We sum these positions to get the score for the word.
- Find the index of the word with the highest score using a loop. If the current score is greater than the highest score found so far, we update the `highestScore` and `highestIndex` variables.
- Return the word with the highest score using the `highestIndex`.

</details>

<details>
  <summary>Click For Solution 2</summary>

This solution looks a bit cleaner than the previous one, but it's not as efficient (difference is negligible). It uses the `reduce` method to calculate the score for each word, and the `Math.max` method to find the highest score.

```js
function highestScoringWord(str) {
  const words = str.split(' ');

  const scores = words.map((word) =>
    Array.from(word).reduce(
      (score, letter) => score + letter.charCodeAt(0) - 96,
      0
    )
  );

  const highestScore = Math.max(...scores);
  const highestIndex = scores.indexOf(highestScore);

  return words[highestIndex];
}
```

## Explanation

- Split the input string into an array of words using the `split` method.
- Use the `map` method to calculate the score for each word.
- Use the `reduce` method to sum the scores for each letter in a word. For each letter in a word, we get its character code using `charCodeAt(0)` and subtract 96 to get its position in the alphabet (e.g., `a` becomes 1, `b` becomes 2, and so on). We sum these positions to get the score for the word.
- Find the highest score using the `Math.max` method.
- Find the index of the word with the highest score using the `indexOf` method.
- Return the word with the highest score using the `highestIndex`.

</details>

### Test Cases

```js
test('Finding the highest scoring word', () => {
  expect(highestScoringWord('hello my name is xavier')).toBe('xavier');
  expect(highestScoringWord('what time are we climbing up the volcano')).toBe(
    'volcano'
  );
  expect(highestScoringWord('take me to semynak')).toBe('semynak');
});
```

Remember to use the provided test cases to verify your solution
