function twoSum(nums, target) {
  // Create a Set to store numbers that have been seen
  const numSet = new Set();

  // Iterate through the input array
  for (let i = 0; i < nums.length; i++) {
    // Calculate the complement needed to reach the target sum
    // nums[i] represents the current number being iterated in the array.
    // target is the desired sum we're trying to achieve with two numbers.
    // target - nums[i] calculates the difference between the target sum and the current number. This value is the complement.
    const complement = target - nums[i];

    // If the complement is found in the numSet, return the indices of the two numbers
    if (numSet.has(complement)) {
      return [nums.indexOf(complement), i];
    }

    // Add the current number to the numSet
    numSet.add(nums[i]);
  }

  // If no solution is found, return an empty array
  return [];
}

module.exports = twoSum;
