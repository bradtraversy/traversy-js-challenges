function symmetricDifference(arr1, arr2) {
  // Create a set from arr1 and arr2
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);
  // Create a result array
  const result = [];

  // Iterate through arr1 and check if the current number is not in set2
  for (const num of arr1) {
    if (!set2.has(num)) {
      // If it is not in set2, push it to the result array
      result.push(num);
    }
  }

  // Iterate through arr2 and check if the current number is not in set1
  for (const num of arr2) {
    // If it is not in set1, push it to the result array
    if (!set1.has(num)) {
      result.push(num);
    }
  }

  // Return the result array
  return result;
}

module.exports = symmetricDifference;
