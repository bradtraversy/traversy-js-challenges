# Challenge: Remove Duplicates

## Instructions

Write a function called `removeDuplicates` that takes in an array and returns a new array with duplicates removed.

### Function Signature

```js
/**
 * Returns a new array with duplicates removed.
 * @param {any[]} arr - The array to remove duplicates from.
 * @returns {any[]} - The new array with duplicates removed.
 */
function removeDuplicates(arr: any[]): any[];
```

### Examples

```js
removeDuplicates([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
removeDuplicates([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]); // [1]
removeDuplicates([1, 2, 3, 4, 5, true, 1, 'hello' 2, 3, 'hello', true]); // [1, 2, 3, 4, 5, true, 'hello']
```

### Constraints

- The array can contain any data type

### Hints

- You can do this with a traditional 'for' loop, but if you are familiar with the `Set` object, you can use that to solve this problem. Maybe try both ways!

## Solutions

<details>
  <summary>Click For Solution 1</summary>

Using a for loop

```js
function removeDuplicates(arr) {
  const uniqueArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (!uniqueArr.includes(arr[i])) {
      uniqueArr.push(arr[i]);
    }
  }

  return uniqueArr;
}
```

### Explanation

- Create a new array called `uniqueArr`.
- Create a `for` loop that will loop through each element in the array and check if the current element is in `uniqueArr`.
- If it is not, we push it into `uniqueArr`.
- Once we have looped through the entire array, we return `uniqueArr`.

</details>

<details>
  <summary>Click For Solution 2</summary>

Using a Set

```js
function removeDuplicates(arr) {
  return Array.from(new Set(arr));
}
```

### Explanation

This solution is extremely simple. We take in an array with duplicates and we create a new `Set` from that array. We then convert that `Set` back into an array and return it.

The reason that this works is because a `Set` can only contain unique values. So when we create a `Set` from an array, it will remove all the duplicates automatically.

</details>

### Test Cases

```js
test('Removing duplicates from an array', () => {
  expect(removeDuplicates([1, 2, 3, 2, 4, 1, 5])).toEqual([1, 2, 3, 4, 5]);
  expect(
    removeDuplicates(['apple', 'banana', 'orange', 'banana', 'kiwi'])
  ).toEqual(['apple', 'banana', 'orange', 'kiwi']);
  expect(removeDuplicates([true, true, false, true, false])).toEqual([
    true,
    false,
  ]);
});
```
