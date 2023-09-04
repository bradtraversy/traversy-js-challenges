# Challenge: Find Max Number

## Instructions

Write a function called `findMaxNumber` that takes in an array of numbers and returns the largest number in the array.

### Function Signature

```js
/**
 * Returns the largest number in an array.
 * @param {number[]} arr - The array of numbers.
 * @returns {number} - The largest number in the array.
 */
function findMaxNumber(arr: number[]): number;
```

### Examples

```js
findMaxNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); // 10
findMaxNumber([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]); // 10
findMaxNumber([1, 2, 3, 4, 5, 10, 9, 8, 7, 6]); // 10
```

### Hints

- There is a very easy way to do this using a specific built-in method. I would suggest not doing it that way. Try to solve this problem using a `for` loop.

## Solutions

<details>
  <summary>Click For Solution 1</summary>

This is the easy way to do it. There is a method called `Math.max()` that will return the largest number in an array. This is not the way I would suggest doing it, but it is good to know that this method exists.

```js
function findMaxNumber(arr) {
  return Math.max(...arr);
}
```

### Explanation

There is not too much explanation needed here.

</details>

<details>
  <summary>Click For Solution 2</summary>

Here is another way of solving it using a `for` loop.

```js
function findMaxNumber(arr) {
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}
```

### Explanation

- Create a variable called `max` and setting it equal to the first element in the array.
- Loop through the array starting at the second element.
- Check if the current element is greater than the current value of `max`. If it is, we set `max` equal to the current element.
- Return `max` after the loop is finished.

</details>

### Test Cases

```js
test('Finding the maximum number in an array', () => {
  expect(findMaxNumber([1, 5, 3, 9, 2])).toBe(9);
  expect(findMaxNumber([0, -1, -5, 2])).toBe(2);
  expect(findMaxNumber([10, 10, 10, 10])).toBe(10);
});
```
