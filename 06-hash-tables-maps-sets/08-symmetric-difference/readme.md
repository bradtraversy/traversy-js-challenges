# Challenge: Symmetric Difference Challenge

## Instructions

We'll start with a pretty simple challenge. Write a function called `symmetricDifference` that takes in two arrays and returns an array containing the symmetric difference of the two arrays. The symmetric difference of two arrays is a new array containing only the elements that are present in one of the arrays but not both, with no duplicates.

### Function Signature

```js
/**
 * Returns an array containing the symmetric difference of two arrays.
 * @param {number[]} arr1 - The first array of integers.
 * @param {number[]} arr2 - The second array of integers.
 * @returns {number[]} - The array containing the symmetric difference of the two arrays.
 */
function symmetricDifference(arr1: number[], arr2: number[]): number[]
```

### Examples

```js
symmetricDifference([1, 2, 3], [3, 4, 5]);
// Output: [1, 2, 4, 5]

symmetricDifference([1, 2, 2, 3, 4], [2, 3, 3, 4, 5]);
// Output: [1, 5]

symmetricDifference([1, 2, 3, 4, 5], [5, 4, 3, 2, 1]);
// Output: []

symmetricDifference([1, 2, 3], [4, 5, 6]);
// Output: [1, 2, 3, 4, 5, 6]
```

### Hints

- You can use two Sets to keep track of elements in both arrays and then find the elements that are present in only one of the sets.
- Be mindful of duplicate elements and handle them appropriately.

## Solutions

<details>
  <summary>Click For Solution</summary>

```js
function symmetricDifference(arr1, arr2) {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);
  const result = [];

  for (const num of arr1) {
    if (!set2.has(num)) {
      result.push(num);
    }
  }

  for (const num of arr2) {
    if (!set1.has(num)) {
      result.push(num);
    }
  }

  return result;
}
```

### Explanation

- To find the symmetric difference, create two `Set` objects, `set1` and `set2`, from `arr1` and `arr2` respectively. The `Set` data structure allows us to efficiently check for the existence of an element.
- Initialize an empty array called `result` to store the symmetric difference.
- Iterate through each element in `arr1` using a `for...of` loop. For each element in `arr1`, we use the `has()` method of `set2` to check if the element exists in `set2`. If the element is not found in `set2`, it means it is present in `arr1` but not in `arr2`, and push it into the `result` array.
- Similarly, iterate through each element in `arr2` using another `for...of` loop. For each element in `arr2`, we use the `has()` method of `set1` to check if the element exists in `set1`. If the element is not found in `set1`, it means it is present in `arr2` but not in `arr1`, and push it into the `result` array.
- Return the `result` array, which contains the elements that are present in only one of the input arrays, with no duplicates.

</details>

### Test Cases

```js
test('Symmetric Difference of Two Arrays', () => {
  expect(symmetricDifference([1, 2, 3], [3, 4, 5])).toEqual([1, 2, 4, 5]);
  expect(symmetricDifference([1, 2, 2, 3, 4], [2, 3, 3, 4, 5])).toEqual([1, 5]);
  expect(symmetricDifference([1, 2, 3, 4, 5], [5, 4, 3, 2, 1])).toEqual([]);
  expect(symmetricDifference([1, 2, 3], [4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
});
```
