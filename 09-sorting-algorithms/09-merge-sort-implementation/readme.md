## Challenge: Merge Sort Implementation

Now that you're familiar with the Merge Sort algorithm, it's time to implement it in JavaScript. This algorithm is particularly efficient for large datasets, as it employs a divide-and-conquer strategy.

## Instructions

Implement a function called `mergeSort` that takes an array of numbers as an argument and returns a sorted array using the Merge Sort algorithm.

### Function Signature

```js
/**
 * Sorts an array using the Merge Sort algorithm.
 * @param {number[]} array - The array to be sorted.
 * @returns {number[]} - The sorted array.
 */
function mergeSort(array: number[]): number[]
```

### Examples

```js
console.log(mergeSort([5, 4, 3, 2, 1])); // Output: [1, 2, 3, 4, 5]
console.log(mergeSort([64, 34, 25, 12, 22, 11, 90])); // Output: [11, 12, 22, 25, 34, 64, 90]
```

### Constraints

- The input array can contain any number of elements.
- The elements in the input array are unique and positive integers.

### Notes

- The Merge Sort algorithm divides the input array into smaller sub-arrays, sorts them separately, and then merges them back together in the correct order.

### Hints

- Divide & Conquer: The key idea behind this algorithm is to recursively divide the array into two halves until the base case is reached (when the array has only one or zero elements). Then, merge the smaller arrays back together while sorting them.
- Merge Function: Implement a helper function called `merge` that takes two sorted arrays and merges them into a single sorted array. This function is crucial for the merge step of the algorithm.
- Recursive Sorting: In the main `mergeSort` function, divide the array into two halves and recursively sort each half. Then, use the `merge` function to merge the sorted halves.

## Solutions

<details>
  <summary>Click For Solution</summary>

```js
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  const merged = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      merged.push(left[leftIndex]);
      leftIndex++;
    } else {
      merged.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return merged.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}
```

### Explanation

- The `mergeSort` function is the main sorting function that implements the merge sort algorithm.
- If the length of the array is 1 or less, it is already sorted, so we return the array as is.
- Otherwise, we calculate the midpoint of the array using `Math.floor(arr.length / 2)`.
- We recursively call `mergeSort` on the left half and the right half of the array.
- Finally, we merge the sorted left and right halves using the `merge` function.

- The `merge` function takes two sorted arrays as input and merges them into a single sorted array.
- We initialize an empty array called `merged` to store the merged elements.
- We also initialize two indices: `leftIndex` for the left array and `rightIndex` for the right array.
- We iterate through both arrays while comparing the elements at the current indices.
- If the element from the left array is smaller, we push it into the `merged` array and increment `leftIndex`.
- If the element from the right array is smaller, we push it into the `merged` array and increment `rightIndex`.
- After the loop, we concatenate any remaining elements from both arrays (if any).
- We return the merged array.

### Test Cases

```js
test('Sort an array in ascending order', () => {
  const unsortedArray = [5, 2, 8, 1, 3];
  const sortedArray = [1, 2, 3, 5, 8];
  expect(mergeSort(unsortedArray)).toEqual(sortedArray);
});

test('Sort an array with repeated values', () => {
  const unsortedArray = [4, 1, 3, 4, 2, 2];
  const sortedArray = [1, 2, 2, 3, 4, 4];
  expect(mergeSort(unsortedArray)).toEqual(sortedArray);
});

test('Sort an already sorted array', () => {
  const sortedArray = [1, 2, 3, 4, 5];
  expect(mergeSort(sortedArray)).toEqual(sortedArray);
});

test('Sort an array with one element', () => {
  const singleElementArray = [42];
  expect(mergeSort(singleElementArray)).toEqual(singleElementArray);
});

test('Sort an empty array', () => {
  const emptyArray = [];
  expect(mergeSort(emptyArray)).toEqual(emptyArray);
});
```

Feel free to customize the test cases according to your needs!
