function sumUpTo(n) {
  // Base case - when n is 1, we return 1
  // Test case - when n is 0, we return 0
  if (n === 1 || n === 0) {
    return n;
  }
  
  // Recursive case - when n is greater than 1, we return the sum of n and sumUpTo(n - 1)
  return n + sumUpTo(n - 1);
}
