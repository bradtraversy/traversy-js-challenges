function quickSort(arr) {
  // Base case: If the array has 1 or fewer elements, it's already sorted
  if (arr.length <= 1) {
    return arr;
  }

  // Choose the pivot as the last element of the array
  const pivot = arr[arr.length - 1];

  // Create empty arrays to hold elements less than and greater than the pivot
  const left = [];
  const right = [];

  // Iterate through the array (except for the pivot)
  for (let i = 0; i < arr.length - 1; i++) {
    // Compare each element with the pivot
    if (arr[i] < pivot) {
      // If it's less than the pivot, push it to the left array
      left.push(arr[i]);
    } else {
      // Otherwise, push it to the right array
      right.push(arr[i]);
    }
  }

  // Recursively apply quickSort to the left and right arrays, and combine them with the pivot
  return [...quickSort(left), pivot, ...quickSort(right)];
}
