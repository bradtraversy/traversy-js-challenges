# Challenge: Selection Sort Implementation

You've learned about the Selection Sort algorithm. Now it's time to put your knowledge into practice and implement the Selection Sort algorithm in JavaScript.

## Instructions

Implement a function called `selectionSort` that takes an array of numbers as an argument and returns a sorted array using the Selection Sort algorithm.

### Function Signature

```js
/**
 * Sorts an array using the Selection Sort algorithm.
 * @param {number[]} array - The array to be sorted.
 * @returns {number[]} - The sorted array.
 */
function selectionSort(array: number[]): number[]
```

### Examples

```js
console.log(selectionSort([5, 4, 3, 2, 1])); // Output: [1, 2, 3, 4, 5]
console.log(selectionSort([64, 34, 25, 12, 22, 11, 90])); // Output: [11, 12, 22, 25, 34, 64, 90]
```

### Constraints

- The input array can contain any number of elements.
- The elements in the input array are unique and positive integers.

### Notes

- The Selection Sort algorithm works by repeatedly finding the minimum element from the unsorted part of the array and putting it at the beginning. This process continues until the whole array is sorted.

### Hints

- Outer Loop: The main idea of this algorithm is to divide the array into two parts: the "sorted" part and the "unsorted" part. The outer loop will iterate through the unsorted part and select the minimum element in each iteration.
- Inner Loop: The inner loop will find the minimum element in the unsorted part and swap it with the first element in the unsorted part. This effectively moves the minimum element to the sorted part.
- Current Minimum: Keep track of the index of the current minimum element found in the inner loop. You will need this index to perform the swap.

## Solutions

<details>
  <summary>Click For Solution</summary>

```js
function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }

  return arr;
}
```

### Explanation

- Start a `for` loop. The condition of the `for` loop is `i < arr.length - 1`. This will loop through the entire array, except for the last element (since the last element will be sorted automatically).
- Inside the outer `for` loop, declare a variable called `minIndex` and set it to `i`. This will keep track of the index of the minimum element found in the inner loop.
- Start an inner `for` loop. The condition of the inner `for` loop is `j = i + 1` and `j < arr.length`. This will loop through the unsorted part of the array.
- Inside the inner `for` loop, check if the element at index `j` is less than the element at index `minIndex`. If it is, update `minIndex` to `j`.
- After the inner `for` loop, check if `minIndex` is not equal to `i`. If it's not equal, swap the elements at indices `i` and `minIndex`.
- Outside of both loops, return the sorted array.

</details>

### Test Cases

```js
test('Sort an array in ascending order', () => {
  const unsortedArray = [5, 2, 8, 1, 3];
  const sortedArray = [1, 2, 3, 5, 8];
  expect(selectionSort(unsortedArray)).toEqual(sortedArray);
});

test('Sort an array with repeated values', () => {
  const unsortedArray = [4, 1, 3, 4, 2, 2];
  const sortedArray = [1, 2, 2, 3, 4, 4];
  expect(selectionSort(unsortedArray)).toEqual(sortedArray);
});

test('Sort an already sorted array', () => {
  const sortedArray = [1, 2, 3, 4, 5];
  expect(selectionSort(sortedArray)).toEqual(sortedArray);
});

test('Sort an array with one element', () => {
  const singleElementArray = [42];
  expect(selectionSort(singleElementArray)).toEqual(singleElementArray);
});

test('Sort an empty array', () => {
  const emptyArray = [];
  expect(selectionSort(emptyArray)).toEqual(emptyArray);
});
```

Feel free to customize the test cases according to your needs!
