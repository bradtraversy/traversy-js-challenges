# Challenge: Array Intersection

## Instructions

Write a function called `arrayIntersection` that takes in two arrays and returns an array containing the intersection of the two input arrays (i.e., the common elements that appear in both arrays).

### Function Signature

```js
/**
 * Returns the intersection of two arrays.
 * @param {number[]} arr1 - The first array.
 * @param {number[]} arr2 - The second array.
 * @returns {number[]} - The intersection of the two arrays.
 */
function arrayIntersection(arr1: number[], arr2: number[]): number[];
```

### Examples

```js
arrayIntersection([1, 2, 3, 4, 5], [1, 3, 5, 7, 9]); // should return [1, 3, 5]
arrayIntersection([1, 1, 1, 1, 1], [2, 2, 2, 2, 2]); // should return []
arrayIntersection([1, 2, 3, 4, 5], [5, 4, 3, 2, 1]); // should return [1, 2, 3, 4, 5]
```

### Constraints

- The input arrays can contain any number of elements
- The input arrays can contain any positive integer

### Hints

- You could use a for loop to iterate through the first array and check if each element is in the second array using the `includes` method.
- You could also take the approach of using a Set to store the elements of the first array and then iterate through the second array and check if each element is in the Set using the `has` method.

## Solutions

<details>
  <summary>Click For Solution 1</summary>

```js
function arrayIntersection(arr1, arr2) {
  const intersection = [];

  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i]) && !intersection.includes(arr1[i])) {
      intersection.push(arr1[i]);
    }
  }

  return intersection;
}
```

### Explanation

- Iterate through the first array
- For each element, check if it is in the second array using the `includes` method
- If it is, check if it is already in the intersection array using the `includes` method
- If it is not, push it into the intersection array
- Return the intersection array

</details>

<details>
  <summary>Click For Solution 2</summary>

In this solution, we will use a Set. A Set is a data structure that stores unique values. We will have a section on maps, sets later. If you are not familiar with sets, that is fine. You can still follow along with this solution.

```js
function arrayIntersection(arr1, arr2) {
  const set1 = new Set(arr1);
  const intersection = [];

  for (let num of arr2) {
    if (set1.has(num)) {
      intersection.push(num);
    }
  }

  return intersection;
}
```

### Explanation

- Create a new Set from the first array
- Iterate through the second array and check if each element is in the set using the `has` method
- If it is, push it into the intersection array
- Return the intersection array

</details>

### Test Cases

```js
test('Finding array intersection', () => {
  expect(arrayIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7])).toEqual([
    3, 4, 5,
  ]);
  expect(arrayIntersection([10, 20, 30], [30, 40, 50])).toEqual([30]);
  expect(arrayIntersection([1, 2, 3], [4, 5, 6])).toEqual([]);
});
```
