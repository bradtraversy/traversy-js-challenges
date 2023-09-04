// Solution 1
function bubbleSort(arr) {
  // Outer loop
  for (let i = 0; i < arr.length; i++) {
    // Inner loop
    for (let j = 0; j < arr.length - i - 1; j++) {
      console.log(arr[j], arr[j + 1]); // Display every comparison
      // Check if the current element is greater than the next element
      if (arr[j] > arr[j + 1]) {
        // Swap the elements
        // Assign the current element to a temporary variable
        const temp = arr[j];
        // Assign the next element to the current element (swap)
        arr[j] = arr[j + 1];
        // Assign the temporary variable to the next element
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// Solution 2
function bubbleSort(arr) {
  // Create a variable to track if any swaps have been made
  let swapped = false;

  // Loop until no swaps have been made
  while (!swapped) {
    // Set swapped to true
    swapped = true;

    // Loop through the array
    for (let i = 0; i < arr.length; i++) {
      // Check if the current element is greater than the next element
      if (arr[i] > arr[i + 1]) {
        // Swap the elements just like we did in solution 1
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        // Set swapped to false
        swapped = false;
      }
    }
  }

  return arr;
}

module.exports = bubbleSort;
