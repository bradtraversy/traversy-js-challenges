# Challenge: Get Sum

This is another very basic practice challenge just to get you into the hang of things.

## Instructions

Write a function called `getSum` that takes in two numbers and returns the sum of those two numbers.

### Function Signature

```js
/**
 * Returns the sum of two numbers.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} - The sum of the two numbers.
 */
function getSum(a: number, b: number): number;
```

### Examples

```JS
getSum(1, 2) // 3
getSum(10, 5) // 15
getSum(2, 2) // 4
getSum(10, 5) // 15
```

### Constraints

- The function must return a number

### Hints

- You can use the `+` operator to add two numbers together.

## Solutions

<details>
  <summary>Click For Solution</summary>

```JS
function getSum(a, b) {
  return a + b;
}
```

### Explanation

This is a pretty simple challenge. We created a function that takes in two values and we added those two values together. We then returned the sum of those two values.

</details>

### Test Cases

```JS
test('Calculating the sum of two numbers', () => {
  // Test case inputs
  const num1 = 5;
  const num2 = 7;

  // Call the function
  const result = getSum(num1, num2);

  // Check if the result is equal to the expected sum
  expect(result).toBe(12);
});
```
