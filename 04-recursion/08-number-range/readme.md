# Challenge: Number Range Using Recursion

## Instructions

Write a function called `numberRange` that takes in a `startNum` and an `endNum` and returns an array of numbers from `startNum` to `endNum`, inclusive. Be sure to use recursion in your solution.

### Function Signature

```js
/**
 * Returns an array of numbers from startNum to endNum, inclusive.
 * @param {number} startNum - The starting number.
 * @param {number} endNum - The ending number.
 * @returns {number[]} - An array of numbers.
 */
function numberRange(startNum: number, endNum: number): number[];
```

### Examples

```js
numberRange(1, 5); // should return [1, 2, 3, 4, 5]
numberRange(3, 10); // should return [3, 4, 5, 6, 7, 8, 9, 10]
numberRange(7, 7); // should return [7] (only one number)
```

### Hints

- You can construct the array by first calling `numberRange` on a smaller range and then adding the `endNum` to the array.

## Solutions

<details>
  <summary>Click For Solution</summary>

```js
function numberRange(startNum, endNum) {
  if (startNum === endNum) {
    return [startNum];
  }

  const numbers = numberRange(startNum, endNum - 1);
  numbers.push(endNum);
  return numbers;
}
```

### Explanation

- We first add our base case and check if the `startNum` is equal to the `endNum`. If so, we return the `startNum` in an array.
- For the recursive case, we set the variable `numbers` to the function with the startNum and one less than the `endNum`.
- Then we add the `endNum` to the `numbers` array and return it.

That is the gist of it, but let's go step by step for `numberRange(1, 5)`

Step 1: Since `startNum(1)` is not equal to `endNum(5)`, we move to the recursive block.

Step 2: We make a recursive call to `numberRange(1, 4)`, which will further call `numberRange(1, 3)` and so on, until we reach the base case.

Step 3: The base case is reached when `startNum(1)` becomes equal to endNum (1). At this point, the function returns an array containing just the number 1.

Step 4: The unwinding begins. The result of `numberRange(1, 2)` is now an array `[1, 2]`. Then, the result of `numberRange(1, 3)` is `[1, 2, 3]`, and so on, until we finally get the result of `numberRange(1, 5)` as `[1, 2, 3, 4, 5]`.

The function follows the same recursive process to build the array of numbers, starting with the base case and adding numbers one by one as it unwinds the recursive calls.

</details>

### Test Cases

```js
test('Calculating the range of numbers', () => {
  expect(numberRange(1, 5)).toEqual([1, 2, 3, 4, 5]);
  expect(numberRange(3, 10)).toEqual([3, 4, 5, 6, 7, 8, 9, 10]);
  expect(numberRange(7, 7)).toEqual([7]);
});
```
