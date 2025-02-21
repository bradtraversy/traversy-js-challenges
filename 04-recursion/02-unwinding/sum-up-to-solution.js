function sumUpTo(n) {
  // Base case - when n is 1, we return 1
  // if n is 0 or negative, we handle that case otherwise infinite recursion
  if (n <= 1) {
    return n;
  }

  // Recursive case - when n is greater than 1, we return the sum of n and sumUpTo(n - 1)
  return n + sumUpTo(n - 1);
}
