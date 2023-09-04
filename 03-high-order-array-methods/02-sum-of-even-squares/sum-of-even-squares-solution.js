function sumOfEvenSquares(numbers) {
  // Filter out the even numbers from the input array.
  const evenSquares = numbers
    .filter((num) => num % 2 === 0)
    // Square each even number.
    .map((num) => num ** 2)
    // Accumulate the squared numbers to compute the sum.
    .reduce((sum, square) => sum + square, 0);

  // Return the sum of squares of even numbers.
  return evenSquares;
}