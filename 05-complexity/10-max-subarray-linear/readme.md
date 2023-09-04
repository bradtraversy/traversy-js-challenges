# Challenge: Maximum Subarray Sum - O(n) Solution

## Instructions

Write a function called `maxSubarraySum` that takes an array of integers and a positive integer `k` as input. The function should find the maximum sum of any subarray of length `k` using an O(n) solution by using the sliding window technique.

### Function Signature

```javascript
/**
 * Finds the maximum sum of any subarray of length k in the input array using an O(n^2) solution.
 * @param {number[]} arr - The input array of integers.
 * @param {number} k - The length of the subarray.
 * @returns {number} - The maximum sum of any subarray of length k.
 */
function maxSubarraySum(arr: number[], k: number): number
```

### Examples

```javascript
const arr1 = [2, 5, 3, 1, 11, 7, 6, 4];
const k1 = 3;
console.log(maxSubarraySum(arr1, k1)); // Output: 24

const arr2 = [-2, -5, -3, -1, -11, -7, -6, -4];
const k2 = 4;
console.log(maxSubarraySum(arr2, k2)); // Output: -9
```

### Constraints

- The input integer `k` will be between 1 and the length of the array.

### Hints

- You can use the sliding window technique to efficiently track the sum of subarrays of length k as you iterate through the array.

### Solutions

<details>
  <summary>Click For Solution</summary>

```javascript
function maxSubarraySum(arr, k) {
  let maxSum = 0;
  let currentSum = 0;

  for (let i = 0; i < k; i++) {
    maxSum += arr[i];
  }

  currentSum = maxSum;

  for (let i = k; i < arr.length; i++) {
    currentSum = currentSum - arr[i - k] + arr[i];
    console.log(`${currentSum} - ${arr[i - k]} + ${arr[i]}`); // Optional
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}
```

### Explanation

- maxSum and currentSum are initialized to 0. These variables will be used to track the maximum sum and the sum of the current sliding window, respectively.

- The first loop (for loop) calculates the sum of the first k elements in the array arr and assigns it to maxSum. This initializes the currentSum and maxSum for the first sliding window.

- currentSum is then set to the value of maxSum. This sets the initial sum of the current sliding window.

- The second loop (for loop) starts at index k and iterates through the array arr. This loop implements the sliding window technique.

- Within the second loop, currentSum is updated using the sliding window concept. The element that leaves the window (at index i - k) is subtracted, and the new element entering the window (at index i) is added.

- An optional console.log statement logs the update of currentSum for visualization purposes, showing how the window slides and how the current sum changes.

- maxSum is updated using the Math.max function to keep track of the maximum sum encountered during the sliding window traversal.

- Finally, the function returns the maxSum, which represents the maximum sum of any subarray of length k in the input array.

</details>

### Test Cases

```javascript
test('Finding maximum subarray sum using O(n^2) solution', () => {
  const arr1 = [2, 5, 3, 1, 11, 7, 6, 4];
  const k1 = 3;
  expect(maxSubarraySum(arr1, k1)).toBe(24);

  const arr2 = [-2, -5, -3, -1, -11, -7, -6, -4];
  const k2 = 4;
  expect(maxSubarraySum(arr2, k2)).toBe(-9);
});
```

---

Please note that the provided solution has a time complexity of O(n^2) due to the nested loops.
