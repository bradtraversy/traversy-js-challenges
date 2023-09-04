function longestConsecutiveSequence(nums) {
  // Create new set
  const numSet = new Set(nums);
  // Create longest sequence variable
  let longestSequence = 0;

  // Loop through set
  for (const num of numSet) {
    // If set does not have num - 1. Identify the starting element of a potential consecutive sequence. 
    if (!numSet.has(num - 1)) {
      // Create current num and current sequence variables
      let currentNum = num;
      let currentSequence = 1;

      // While set has current num + 1. Is the next consecutive number in the set?
      while (numSet.has(currentNum + 1)) {
        // Increment current num and current sequence
        currentNum++;
        currentSequence++;
      }

      // Set longest sequence to max of longest sequence and current sequence
      longestSequence = Math.max(longestSequence, currentSequence);
    }
  }

  // Return longest sequence
  return longestSequence;
}

module.exports = longestConsecutiveSequence;
