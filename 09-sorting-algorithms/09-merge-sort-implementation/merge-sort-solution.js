function mergeSort(arr) {
  // If the array has 1 or 0 elements, then it is already sorted.
  if (arr.length <= 1) {
    return arr;
  }

  // Otherwise, divide the array into two halves and sort each half.
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid)); // From 0 to mid, not including mid.
  const right = mergeSort(arr.slice(mid)); // From mid to the end.

  // Merge the sorted halves.
  return merge(left, right);
}

function merge(left, right) {
  // Initialize an empty array to store the merged array.
  const merged = [];
  // Initialize two pointers to keep track of the current index of each half.
  let leftIndex = 0;
  let rightIndex = 0;

  // While both pointers are still within their respective halves, compare the elements at 
  // the current indices and push the smaller one to the merged array.
  while (leftIndex < left.length && rightIndex < right.length) {
    // If the element in the left half is smaller, push it to the merged array and increment the left pointer.
    if (left[leftIndex] < right[rightIndex]) {
      merged.push(left[leftIndex]);
      leftIndex++;
    } else {
      // Otherwise, push the element in the right half to the merged array and increment the right pointer.
      merged.push(right[rightIndex]);
      rightIndex++;
    }
  }

  // If there are any remaining elements in the left half, push them to the merged array.
  return merged.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

module.exports = mergeSort;
