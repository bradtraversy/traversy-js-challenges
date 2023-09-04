// Define a function called maxSubarraySum which takes an array 'arr' and a positive integer 'k' as input
function maxSubarraySum(arr, k) {
  // Initialize a variable 'maxSum' to store the maximum sum of subarrays
  let maxSum = 0;

  // Iterate through the array from index 0 to (length - k)
  // We only need to consider subarrays of length 'k', so we stop when there's not enough elements left
  for (let i = 0; i <= arr.length - k; i++) {
    // Initialize a variable 'currentSum' to store the sum of the current subarray
    let currentSum = 0;

    // Nested loop: Iterate through the subarray of length 'k' starting from index 'i'. This will loop through the current windows
    for (let j = i; j < i + k; j++) {
      // Add the value at index 'j' to 'currentSum'
      currentSum += arr[j];
    }

    // Update 'maxSum' to be the maximum value between 'maxSum' and 'currentSum'
    maxSum = Math.max(maxSum, currentSum);
  }

  // Return the maximum sum of any subarray of length 'k'
  return maxSum;
}
