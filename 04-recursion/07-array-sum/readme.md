# Challenge: Array Sum Using Recursion

## Description

Let's practice using recursion by creating a function that calculates the sum of an array of numbers. Write a function called `arraySum` that takes in an array of numbers and returns their sum using recursion.

## Instructions

Write a function called `arraySum` that takes in an array of numbers and returns their sum using recursion.

### Function Signature

```js
/**
 * Calculates the sum of an array of numbers using recursion.
 * @param {Array} arr - The array of numbers.
 * @returns {number} - The sum of the numbers.
 */
function arraySum(arr: Array): number;
```

### Constraints

- The input array can contain positive and/or negative integers.

### Hints

- Think about what your base case might be with an array
- Think about how you can break down the problem of calculating the sum of an array into smaller sub-problems.
- You can use `arr.slice(1)` to create a new array excluding the first element.

### Examples

```js
arraySum([1, 2, 3, 4, 5]); // should return 15 (1 + 2 + 3 + 4 + 5 = 15)
arraySum([-1, -2, -3, -4, -5]); // should return -15 (-1 + -2 + -3 + -4 + -5 = -15)
arraySum([]); // should return 0 (empty array)
```

## Solutions

<details>
  <summary>Click For Solution</summary>

```js
function arraySum(arr) {
  if (arr.length === 0) {
    return 0;
  } else {
    return arr[0] + arraySum(arr.slice(1));
  }
}
```

### Explanation

- The `arraySum` function uses a recursive approach to calculate the sum of an array of numbers.
- The base case is when the array is empty. In this case, the function returns 0, as the sum of an empty array is 0.
- In the recursive case, the function adds the first element of the array (`arr[0]`) to the sum of the rest of the array (`arraySum(arr.slice(1))`).
- The recursion continues until the array becomes empty and the base case is reached.

Here's a breakdown of how the recursion progresses when calculating the sum of [1, 2, 3, 4, 5]:

- `arraySum([1, 2, 3, 4, 5])` returns 1 + arraySum([2, 3, 4, 5])
- `arraySum([2, 3, 4, 5])` returns 2 + arraySum([3, 4, 5])
- `arraySum([3, 4, 5])` returns 3 + arraySum([4, 5])
- `arraySum([4, 5])` returns 4 + arraySum([5])
- `arraySum([5])` returns 5 + arraySum([])
- `arraySum([])` reaches the base case and returns 0
- At this point, the recursive calls start "unwinding," and the values are added up:

- 5 + 0 = 5 Returned from arraySum([5])
- 4 + 5 = 9 Returned from arraySum([4, 5])
- 3 + 9 = 12 Returned from arraySum([3, 4, 5])
- 2 + 12 = 14 Returned from arraySum([2, 3, 4, 5])
- 1 + 14 = 15 Returned from arraySum[1, 2, 3, 4, 5]

So, the final result is 15, which is the sum of all the numbers in the original array [1, 2, 3, 4, 5].

</details>

### Test Cases

```js
test('Calculate Sum of Array Using Recursion', () => {
  expect(arraySum([1, 2, 3, 4, 5])).toEqual(15);
  expect(arraySum([-1, -2, -3, -4, -5])).toEqual(-15);
  expect(arraySum([])).toEqual(0);
});
```
