# Challenge: Sum of Squares of Even Numbers

## Instructions

Let's start off with a fairly simple challenge, but one that uses a few different array methods. Write a function called `sumOfEvenSquares` that takes an array of numbers and returns the sum of the squares of the even numbers in the array.

### Function Signature

```js
/**
 * Returns the sum of the squares of the even numbers in the array.
 * @param {number[]} numbers - The array of numbers.
 * @returns {number} - The sum of the squares of even numbers.
 */
function sumOfEvenSquares(numbers: number[]): number
```

### Examples

```js
sumOfEvenSquares([1, 2, 3, 4, 5]); // 20 (2^2 + 4^2)
sumOfEvenSquares([-1, 0, 1, 2, 3, 4]); // 20 (0^2 + 2^2 + 4^2)
sumOfEvenSquares([]); // 0
```

### Hints

- Use the `filter` method to select the even numbers from the array.
- Then, use the `map` method to square each even number.
- Finally, use the `reduce` method to sum up the squared even numbers.

## Solutions

<details>
  <summary>Click For Solution</summary>

```js
function sumOfEvenSquares(numbers) {
  const evenSquares = numbers
    .filter((num) => num % 2 === 0)
    .map((num) => num ** 2);

  return evenSquares.reduce((sum, square) => sum + square, 0);
}
```

### Explanation

You can format this so many different ways. This is just one example.

- Create a variable called `evenSquares` and set it equal to the result of calling the `filter` method on the `numbers` array and then calling the `map` method on the result of that.

- For the `filter` method, pass in a callback function that takes in a number and returns `true` if the number is even and `false` otherwise. We used the modulo operator (`%`) to check if the number is even.

- For the `map` method, pass in a callback function that takes in a number and returns the square of that number. Now we have an array of the squares of the even numbers.

- Finally, call the `reduce` method on the `evenSquares` array and pass in a callback function that takes in a sum and a square and returns the sum plus the square. We set the initial value of the sum to `0`.

We could even shorten this by chaining the methods together and using an arrow function:

```js
const sumOfEvenSquares = (numbers) =>
  numbers
    .filter((num) => num % 2 === 0)
    .map((num) => num ** 2)
    .reduce((sum, square) => sum + square, 0);
```

</details>

### Test Cases

```js
test('Sum of even squares', () => {
  expect(sumOfEvenSquares([1, 2, 3, 4, 5])).toBe(20);
  expect(sumOfEvenSquares([-1, 0, 1, 2, 3, 4])).toBe(20);
  expect(sumOfEvenSquares([])).toBe(0);
});
```
