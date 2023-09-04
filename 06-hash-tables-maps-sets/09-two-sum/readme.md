# Challenge: Two Sum

## Instructions

Write a function called `twoSum` that takes an array of integers and a target integer as input and returns an array of indices of the two numbers that add up to the target.

### Function Signature

```javascript
/**
 * Returns an array of indices of two numbers that add up to the target.
 * @param {number[]} nums - The input array of integers.
 * @param {number} target - The target sum.
 * @returns {number[]} - An array of indices of the two numbers.
 */
function twoSum(nums: number[], target: number): number[]
```

### Examples

```javascript
console.log(twoSum([2, 7, 11, 15], 9));
// Output: [0, 1] (2 + 7 = 9)

console.log(twoSum([3, 2, 4], 6));
// Output: [1, 2] (2 + 4 = 6)

console.log(twoSum([3, 3], 6));
// Output: [0, 1] (3 + 3 = 6)
```

### Constraints

- Each input integer is unique.

### Hints

- You can use a Set to keep track of numbers you've seen so far while iterating through the array.

### Solution

<details>
  <summary>Click to reveal solution</summary>

```javascript
function twoSum(nums, target) {
  const numSet = new Set();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (numSet.has(complement)) {
      return [nums.indexOf(complement), i];
    }
    numSet.add(nums[i]);
  }

  return [];
}
```

### Explanation

- Create a `Set` called `numSet` to store numbers that have been seen while iterating through the array.
- Iterate through the input array `nums`. For each number, calculate its complement (the number needed to reach the target) as `target - nums[i]`.
- If the complement is already in `numSet`, return an array containing the indices of the complement and the current number.
- If the complement is not in `numSet`, add the current number to the set.
- If no solution is found, return an empty array.

</details>

### Test Cases

```javascript
const twoSum = require('./twoSum');

describe('Two Sum', () => {
  test('Test 1', () => {
    const nums = [2, 7, 11, 15];
    const target = 9;
    const result = twoSum(nums, target);
    expect(result).toEqual(expect.arrayContaining([0, 1]));
  });

  test('Test 2', () => {
    const nums = [3, 2, 4];
    const target = 6;
    const result = twoSum(nums, target);
    expect(result).toEqual(expect.arrayContaining([1, 2]));
  });

  test('Test 3', () => {
    const nums = [3, 3];
    const target = 6;
    const result = twoSum(nums, target);
    expect(result).toEqual(expect.arrayContaining([0, 1]));
  });
});
```
