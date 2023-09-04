# Challenge: Find The Missing Number

## Instructions

Write a function called `findMissingNumber` that takes in an array of unique numbers from 1 to n (inclusive), where one number is missing. It should return the missing number.

### Function Signature

```js
/**
 * Returns the missing number in an array of unique numbers from 1 to n (inclusive).
 * @param {number[]} arr - The array of numbers.
 * @returns {number} - The missing number.
 */
function findMissingNumber(arr: number[]): number;
```

### Examples

```js
findMissingNumber([1, 2, 3, 4, 6, 7, 8, 9, 10]); // 5
findMissingNumber([10, 8, 6, 7, 5, 4, 2, 3, 1]); // 9
findMissingNumber([10, 5, 1, 2, 4, 6, 8, 3, 9]); // 7
```

### Constraints

- If an empty array is passed in, it should return `1`
- If nothing is passed in, it should return `undefined`

### Hints

- Calculate the sum of the numbers from 1 to n (inclusive). The formula for this is `n * (n + 1) / 2`. `n` is the length of the array plus 1.
- Calculate the sum of the numbers in the array.
- Subtract the sum of the numbers in the array from the sum of the numbers from 1 to n (inclusive).
- You could use a for loop or the reduce method to calculate the sum of the numbers in the array. We will be focusing on methods like reduce in the next section, but I will still show you both ways.

## Solutions

<details>
  <summary>Click For Solution</summary>

```js
function findMissingNumber(arr) {
  if (!arr || arr.length === 0) {
    return undefined;
  }

  const n = arr.length + 1;
  const expectedSum = (n * (n + 1)) / 2;

  let actualSum = 0;
  for (let i = 0; i < arr.length; i++) {
    actualSum += arr[i];
  }

  return expectedSum - actualSum;
}

// Using reduce
function findMissingNumber(arr) {
  if (!arr || arr.length === 0) {
    return undefined;
  }

  const n = arr.length + 1;
  const expectedSum = (n * (n + 1)) / 2;

  const actualSum = arr.reduce((sum, num) => sum + num, 0);

  return expectedSum - actualSum;
}
```

### Explanation

The `findMissingNumber` function takes in an array of unique numbers from 1 to n (inclusive), where one number is missing, and returns the missing number.

We first calculate the sum of the numbers from 1 to n (inclusive) using the formula `n * (n + 1) / 2`. This is called the gauss formula. We store this value in a variable called `expectedSum`.

To be more clear, let's look at an example. If we have an array of numbers from 1 to 10, the sum of those numbers is 55. We can calculate this using the gauss formula. `10 * (10 + 1) / 2 = 55`. We can also calculate this using a for loop or the reduce method.

Next, we calculate the sum of the numbers in the array. We store this value in a variable called `actualSum`.

We then return the difference between the expected sum and the actual sum. This will be the missing number.

Again, you can use a for loop or the reduce method to calculate the sum of the numbers in the array.

</details>

### Test Cases

```js
test('Finding the missing number', () => {
  expect(findMissingNumber([1, 2, 3, 5])).toBe(4);
  expect(findMissingNumber([10, 8, 6, 7, 5, 4, 2, 3, 1])).toBe(9);
  expect(findMissingNumber([1, 3, 4, 5, 6])).toBe(2);
});
```
