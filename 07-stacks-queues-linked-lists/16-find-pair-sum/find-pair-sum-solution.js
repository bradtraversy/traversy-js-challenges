const DoublyLinkedList = require('./DoublyLinkedList');

function findPairSum(nums, targetSum) {
  // Init a doubly linked list to keep track of seen numbers
  const seen = new DoublyLinkedList();

  // Loop through nums
  for (const num of nums) {
    // Calculate the difference between the target sum and the current number
    const difference = targetSum - num;
    // If the difference is in the seen list, return the pair
    if (seen.contains(difference)) {
      return [difference, num];
    }
    // Otherwise, add the current number to the seen list
    seen.append(num);
  }

  // If no pair is found, return null
  return null;
}

module.exports = findPairSum;
