# Challenge: Fibonacci Sequence Using Recursion

We looked at a very simple example of recursion in the last lesson. Now I want to look at a very popular example that is often used with recursion: the Fibonacci sequence. This could very well be a question you get asked in an interview, so it's important to understand how it works. You can also use loops to solve this problem, but recursion is a more elegant solution. Later we will also look at using a binary tree to solve this problem.

## What is the Fibonacci sequence?

The Fibonacci sequence is a series of numbers where the sequence starts with 0 and 1, and then each number is the sum of the previous two numbers. So the sequence would look like this:

`0, 1, 1, 2, 3, 5, 8, 13, 21, 34...`

`F(n) = F(n-1) + F(n-2)` is the formula for the Fibonacci sequence.

- F(n) is the number in the sequence.
- F(n-1) is the number before it.
- F(n-2) is the number before that.

So if we wanted to find the 5th number in the sequence, we would do this:

`F(5) = F(4) + F(3)`
`F(4) = F(3) + F(2)`
`F(3) = F(2) + F(1)`
`F(2) = F(1) + F(0)`
`F(1) = 1`
`F(0) = 0`

So we can see that `F(2) = 1 + 0 = 1`, `F(3) = 1 + 1 = 2`, `F(4) = 2 + 1 = 3`, and `F(5) = 3 + 2 = 5`. So the 5th number in the sequence is 5.

## Instructions

Write a function called `fibonacci` that takes in a number and returns the number at that index of the Fibonacci sequence.

### Function Signature

```js
/**
 * Returns the number at the given index of the Fibonacci sequence.
 * @param {number} num - The index of the Fibonacci sequence.
 * @returns {number} - The number at the given index of the Fibonacci sequence.
 */
function fibonacci(num: number): number;
```

### Examples

```js
fibonacci(4); // 3
fibonacci(6); // 8
fibonacci(10); // 55
```

### Constraints

- The input number will always be a positive integer

### Hints

- You know that the formula is `F(n) = F(n-1) + F(n-2)`. ` F`` is the function, and  `n` is the number in the sequence.
- You know that the first two numbers in the sequence are `0` and `1`. So if the number is less than 2, you can return the number.

## Solutions

<details>
  <summary>Click For Solution</summary>

```js
function fibonacci(num) {
  // Base case
  if (num < 2) return num;

  // Recursive case
  return fibonacci(num - 1) + fibonacci(num - 2);
}
```

### Explanation

- We have what we call the `base case`, which is when the number is less than 2.
- If this is true, we return the number.
- If it is not true, we run the `recursive case`, which will return the sum of the previous two numbers. This will continue until the number is less than 2.

Let's look at this step by step using an example where input num is 5:

1. Initial Call: `fibonacci(5)` is called.
2. Recursive Call 1: `fibonacci(5)` calls `fibonacci(4) + fibonacci(3)`.
3. Recursive Call 2: `fibonacci(4)` calls `fibonacci(3) + fibonacci(2)`.
4. Recursive Call 3: `fibonacci(3)` calls `fibonacci(2) + fibonacci(1)`.
5. Base Case 1: `fibonacci(2)` returns 1.
6. Base Case 2: `fibonacci(1)` returns 1.
7. Unwinding Process: As the recursive calls return, the function accumulates the results:

- `fibonacci(1)` returns 1.
- `fibonacci(2)` returns 1.
- `fibonacci(3)` returns `fibonacci(2) + fibonacci(1)` = 1 + 1 = `2`.
- `fibonacci(4)` returns `fibonacci(3) + fibonacci(2)` = 2 + 1 = `3`.
- `fibonacci(5)` returns `fibonacci(4) + fibonacci(3)` = 3 + 2 = `5`.

So, `fibonacci(5)` returns `5`, which is the fifth number in the Fibonacci sequence.

We could make this a one liner by using the ternary operator:

```js
const fibonacci = (num) =>
  num < 2 ? num : fibonacci(num - 1) + fibonacci(num - 2);
```

</details>

### Test Cases

```js
describe('fibonacci', () => {
  it('should return the correct Fibonacci number', () => {
    expect(fibonacci(0)).toBe(0); // The 0th Fibonacci number is 0
    expect(fibonacci(1)).toBe(1); // The 1st Fibonacci number is 1
    expect(fibonacci(2)).toBe(1); // The 2nd Fibonacci number is 1 (0 + 1)
    expect(fibonacci(3)).toBe(2); // The 3rd Fibonacci number is 2 (1 + 1)
    expect(fibonacci(4)).toBe(3); // The 4th Fibonacci number is 3 (1 + 2)
    expect(fibonacci(5)).toBe(5); // The 5th Fibonacci number is 5 (2 + 3)
    expect(fibonacci(6)).toBe(8); // The 6th Fibonacci number is 8 (3 + 5)
    expect(fibonacci(7)).toBe(13); // The 7th Fibonacci number is 13 (5 + 8)
  });
});
```
