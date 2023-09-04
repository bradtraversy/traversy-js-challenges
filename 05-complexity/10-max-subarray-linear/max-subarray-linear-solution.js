function maxSubarraySum(arr, k) {
  // Initialize variables to track maximum sum and current sum
  let maxSum = 0;
  let currentSum = 0;

  // Calculate the sum of the first k elements
  for (let i = 0; i < k; i++) {
    maxSum += arr[i];
  }

  // Set the initial value of currentSum as maxSum
  currentSum = maxSum;

  // Slide the window and calculate maximum sum
  for (let i = k; i < arr.length; i++) {
    // Update currentSum by subtracting the element that left the window and adding the new element
    currentSum = currentSum - arr[i - k] + arr[i];

    // Log the update for visualization (optional)
    console.log(`${currentSum} - ${arr[i - k]} + ${arr[i]}`);

    // Update maxSum with the maximum value between maxSum and currentSum
    maxSum = Math.max(maxSum, currentSum);
  }

  // Return the maximum sum
  return maxSum;
}
