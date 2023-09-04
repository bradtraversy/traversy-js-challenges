function insertionSort(arr) {
  // Loop through the array starting from the second element. 
  // We start from the second element because we assume the first element is already sorted.
  for (let i = 1; i < arr.length; i++) {
    // Store the current element in a variable
    const currentElement = arr[i];
    // This is the index of the last element in the current "sorted" portion
    let j = i - 1;

    // Loop through the sorted part of the array (the left side) and find the correct index of the current element
    // As the algorithm moves through the sorted portion to find the correct position for the current element, 
    // it compares the currentElement with each element in the sorted portion. If the currentElement is smaller 
    // than the element being compared, the algorithm shifts that element one position to the right to make space 
    // for the currentElement.
    while (j >= 0 && arr[j] > currentElement) {
      // Shift the elements to the right
      arr[j + 1] = arr[j];
      // Decrement the index
      j--;
    }

    // Insert the current element
    arr[j + 1] = currentElement;
  }

  // Return the sorted arra
  return arr;
}

module.exports = insertionSort;
