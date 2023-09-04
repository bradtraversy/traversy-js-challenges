function arraySum(arr) {
  if (arr.length === 0) {
    return 0; // Base case: Empty array, return 0
  } else {
    return arr[0] + arraySum(arr.slice(1)); // Recursive case: Sum the first element and the sum of the rest of the array
  }
}
