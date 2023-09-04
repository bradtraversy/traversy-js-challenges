# Challenge: Longest Consecutive Sequence

## Instructions

Write a function called `longestConsecutiveSequence` that takes an array of integers as input and returns the length of the longest consecutive sequence of integers in the array.

A consecutive sequence is a sequence of consecutive integers, meaning each integer in the sequence is exactly one more than the previous integer.

### Function Signature

```js
/**
 * Returns the length of the longest consecutive sequence in the array.
 * @param {number[]} nums - An array of integers.
 * @returns {number} - The length of the longest consecutive sequence.
 */
function longestConsecutiveSequence(nums: number[]): number
```

### Examples

```js
longestConsecutiveSequence([100, 4, 200, 1, 3, 2]); // Output: 4 (The longest consecutive sequence is [1, 2, 3, 4])
longestConsecutiveSequence([0, 3, 7, 2, 5, 8, 4, 6, 9, 1]); // Output: 10 (The longest consecutive sequence is [0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
```

### Constraints

- The input array will contain only integers
- The input array may contain duplicate integers

### Hints

- You can use a Set to efficiently find consecutive sequences in the array.

## Solutions

<details>
  <summary>Click For Solution</summary>

```js
function longestConsecutiveSequence(nums) {
  const numSet = new Set(nums);
  let longestSequence = 0;

  for (const num of numSet) {
    if (!numSet.has(num - 1)) {
      let currentNum = num;
      let currentSequence = 1;

      while (numSet.has(currentNum + 1)) {
        currentNum++;
        currentSequence++;
      }

      longestSequence = Math.max(longestSequence, currentSequence);
    }
  }

  return longestSequence;
}
```

### Explanation

- Create a Set called `numSet` from the input array `nums`. The Set will allow us to efficiently check if an integer exists in the array in constant time.
- Initialize a variable `longestSequence` to 0, which will store the length of the longest consecutive sequence found so far.
- Iterate through each integer `num` in the `numSet` using a `for...of` loop. For each integer, check if its previous integer `num - 1` exists in the `numSet`. If `num - 1` is not present, it means that `num` is the starting element of a consecutive sequence.
- Initialize two variables `currentNum` and `currentSequence`. `currentNum` is set to the current integer `num`, and `currentSequence` is set to 1, as we have found the first element of a consecutive sequence.
- Use a `while` loop to iterate as long as the next integer `currentNum + 1` exists in the `numSet`. For each iteration, increment `currentNum` and `currentSequence` to extend the consecutive sequence.
- After the `while` loop ends, update `longestSequence` to the maximum value between the current `longestSequence` and `currentSequence`. This way, we keep track of the longest consecutive sequence found so far.
- After the loop finishes, return `longestSequence` as the final output, which represents the length of the longest consecutive sequence in the input array.

</details>

### Test Cases

```js
test('Longest Consecutive Sequence', () => {
  expect(longestConsecutiveSequence([100, 4, 200, 1, 3, 2])).toBe(4);
  expect(longestConsecutiveSequence([0, 3, 7, 2, 5, 8, 4, 6, 9, 1])).toBe(10);
});
```

**Note**: You need to define the `longestConsecutiveSequence` function as shown in the example. The test cases verify that the function correctly returns the length of the longest consecutive sequence in the input array.
