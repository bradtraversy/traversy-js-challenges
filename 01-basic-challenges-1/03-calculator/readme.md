# Challenge: Calculator

## Instructions

Write a function called `calculator` that takes in 2 numbers and an operator and returns the result of the calculation.

### Function Signature

```js
/**
 * Returns the result of a calculation.
 * @param {number} num1 - The first number.
 * @param {number} num2 - The second number.
 * @param {string} operator - The operator to use in the calculation.
 * @returns {number} - The result of the calculation.
 */
function calculator(num1: number, num2: number, operator: string): number;
```

### Examples

```JS
calculator(1, 2, '+') // 3
calculator(10, 5, '-') // 5
calculator(2, 2, '*') // 4
calculator(10, 5, '/') // 2
```

### Constraints

- The function must return a number
- The function must throw or log an error if an invalid operator is given

### Hints

- You can use `if` statements or `switch` statements to determine which operator was given.

## Solutions

<details>
  <summary>Click For Solution 1</summary>

#### Using a switch:

```js
function calculator(num1, num2, operator) {
  let result;

  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
    default:
      throw new Error('Invalid operator');
  }

  return result;
}
```

### Explanation

- Created a function called `calculator` that takes in three arguments: `num1`, `num2`, and `operator`.
- Create a variable called `result` to store the result of the calculation.
- Used a `switch` statement to determine which operator was given. If it was +, -, \* or /, we did the calculation. If the operator is anything else, we throw an error.

</details>

<details>
 <summary>Click For Solution 2</summary>

#### Using an if statement:

```js
function calculator(num1, num2, operator) {
  let result;

  if (operator === '+') {
    result = num1 + num2;
  } else if (operator === '-') {
    result = num1 - num2;
  } else if (operator === '*') {
    result = num1 * num2;
  } else if (operator === '/') {
    result = num1 / num2;
  } else {
    throw new Error('Invalid operator');
  }

  return result;
}
```

### Explanation

- Create a function called `calculator` that takes in three arguments: `num1`, `num2`, and `operator`.
- Create a variable called `result` to store the result of the calculation.
- Use an `if` statement to determine which operator was given. If it was +, -, \* or /, we did the calculation. If the operator is anything else, we throw an error.

 </details>

### Test Cases

```js
test('Performing arithmetic operations using the calculator function', () => {
  // Test case inputs
  const num1 = 5;
  const num2 = 7;

  // Addition
  expect(calculator(num1, num2, '+')).toBe(12);

  // Subtraction
  expect(calculator(num1, num2, '-')).toBe(-2);

  // Multiplication
  expect(calculator(num1, num2, '*')).toBe(35);

  // Division
  expect(calculator(num1, num2, '/')).toBeCloseTo(0.7143, 4);

  // Invalid operator
  expect(() => calculator(num1, num2, '^')).toThrow('Invalid operator');
});
```
