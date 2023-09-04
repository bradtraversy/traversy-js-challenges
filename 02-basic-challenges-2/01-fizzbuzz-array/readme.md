# Challenge: FizzBuzz Array

## Instructions

FizzBuzz is probably the most common interview question for entry level developers. At least, it used to be. It may not be used as much because of how common it was. It's a simple problem that tests your ability to think logically and write clean code.

Traditionally, you loop from 1 to 100 and print out each number. However, if the number is divisible by 3, you print out "Fizz" instead. If the number is divisible by 5, you print out "Buzz" instead. If the number is divisible by both 3 and 5, you print out "FizzBuzz" instead.

In this challenge, you will write a function called `fizzBuzzArray` that takes in a number and returns an array. The array should contain all the numbers from 1 to the number passed in. However, if the number is divisible by 3, you should replace the number with "Fizz". If the number is divisible by 5, you should replace the number with "Buzz". If the number is divisible by both 3 and 5, you should replace the number with "FizzBuzz".

### Function Signature

```js
/**
 * Returns an array of numbers from 1 to the number passed in.
 * @param {number} num - The number to loop up to.
 * @returns {any[]} - The array of numbers.
 */
function fizzBuzzArray(num: number): any[];
```

### Examples

```js
fizzBuzzArray(5); // [1, 2, "Fizz", 4, "Buzz"]
fizzBuzzArray(15); // [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]
```

### Constraints

- The number passed in will always be greater than 0
- The number passed in will always be an integer

### Hints

- Instead of console logging each number, you will need to push each number into an array.

## Solutions

<details>
  <summary>Click For Solution</summary>

```js
function fizzBuzz(num) {
  const arr = [];

  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      arr.push('FizzBuzz');
    } else if (i % 3 === 0) {
      arr.push('Fizz');
    } else if (i % 5 === 0) {
      arr.push('Buzz');
    } else {
      arr.push(i);
    }
  }

  return arr;
}
```

### Explanation

- Create an empty array to store our results.
- Loop from 1 to the number passed in.
- Check if the number is divisible by both 3 and 5 first. If it is, we push "FizzBuzz" into the array.
- If it's not, we check if the number is divisible by 3. If it is, we push "Fizz" into the array.
- If it's not, we check if the number is divisible by 5. If it is, we push "Buzz" into the array.
- If it's not, we push the number into the array.
- Return the array.

</details>

### Test Cases

```js
test('FizzBuzz Array', () => {
  expect(fizzBuzzArray(15)).toEqual([
    1,
    2,
    'Fizz',
    4,
    'Buzz',
    'Fizz',
    7,
    8,
    'Fizz',
    'Buzz',
    11,
    'Fizz',
    13,
    14,
    'FizzBuzz',
  ]);
});
```
