# Logarithmic Time Complexity `O(log n)`

Logarithmic time complexity is when the runtime grows logarithmically with the input size. As the input size increases, the runtime of the algorithm increases, but at a much slower rate compared to linear or quadratic time complexities. In a logarithmic time algorithm, the number of operations scales logarithmically with the input size.

Logarithmic time complexity is denoted by Big O notation as O(log n) or "O of log n", where n represents the size of the input.

## Example: Logarithmic Time Complexity Function

Consider a function called `findPower` that calculates the power of a number using recursion. The function takes two parameters:

- `base` - the base number.
- `exponent` - the exponent to which the base is raised.

We will be using recursion in this example, which we learned about in the last section.

```js
function findPower(base, exponent) {
  if (exponent === 0) {
    return 1;
  }

  if (exponent % 2 === 0) {
    const halfPower = findPower(base, exponent / 2);
    return halfPower * halfPower;
  } else {
    const halfPower = findPower(base, (exponent - 1) / 2);
    return base * halfPower * halfPower;
  }
}
```

In the `findPower` function, we use recursion to efficiently calculate the power of a number. The function exploits the property that any number raised to an even exponent can be split into two halves, and the result is the square of the number raised to half the exponent. For odd exponents, the function reduces the exponent by 1 and repeats the process.

## Efficiency and Best Use Cases

Logarithmic time complexity is highly efficient and desirable for large datasets or problems that can be divided into smaller sub-problems. It is often encountered in algorithms that utilize divide-and-conquer strategies or binary search, which we will talk about soon when we get to data structures and algorithms.

In the example of `findPower`, the algorithm efficiently computes the power of a number by reducing the number of multiplications required, making it ideal for calculations with large exponents.

## Testing the Runtime

Testing the runtime of logarithmic time algorithms can be done with larger input sizes and observing the relatively slow growth of runtime compared to linear or quadratic algorithms. However, keep in mind that logarithmic time algorithms are already highly efficient, and the difference in runtime for moderately large input sizes may not be significant.

Try running this code:

```js
console.time('Find Power 1');
findPower(2, 100);
console.timeEnd('Find Power 1');

console.time('Find Power 2');
findPower(2, 1000000000);
console.timeEnd('Find Power 2');
```

The result that I got is:

```sh
Find Power 1: 0.048ms
Find Power 2: 0.005ms
```

The runtime for `findPower` with an exponent of 1 billion is slightly faster than the runtime for an exponent of 100. This is because the algorithm is already highly efficient, and the difference in runtime is not significant. Remember, there are many other factors that can affect the runtime of an algorithm, such as the hardware and software environment.
