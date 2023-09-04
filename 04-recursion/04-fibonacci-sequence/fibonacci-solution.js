function fibonacci(num) {
  // Base case - if num is less than 2, return num
  if (num < 2) return num;

  // Recursive case - return the sum of the previous two numbers
  return fibonacci(num - 1) + fibonacci(num - 2);
}

// Shorter version
const fibonacci = (num) =>
  num < 2 ? num : fibonacci(num - 1) + fibonacci(num - 2);

module.exports = fibonacci;
