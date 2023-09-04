// Solution 1 - Simplest solution
function findMaxNumber(arr) {
  // Math.max() can take any number of arguments, so we can use the spread operator
  return Math.max(...arr);
}

// Solution 2
function findMaxNumber(arr) {
  // Declare a variable to store the maximum number. We can initialize it to the first element in the array
  let max = arr[0];

  // Loop through the array starting at the second element. We start at the second element because we already set the maximum number to the first element
  for (let i = 1; i < arr.length; i++) {
    // If the current element is greater than the maximum number, set the maximum number to the current element
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  // Return the maximum number
  return max;
}

module.exports = findMaxNumber;
