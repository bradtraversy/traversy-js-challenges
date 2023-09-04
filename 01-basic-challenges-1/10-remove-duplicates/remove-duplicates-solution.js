// Solution 1
function removeDuplicates(arr) {
  // Declare an empty array to store the unique values
  const uniqueArr = [];

  // Loop through the array that was passed in
  for (let i = 0; i < arr.length; i++) {
    // If the current element is not in the unique array, add it
    if (!uniqueArr.includes(arr[i])) {
      uniqueArr.push(arr[i]);
    }
  }

  // Return the unique array
  return uniqueArr;
}

// Solution 2
function removeDuplicates(arr) {
  // Use the Set object to remove duplicates. This works because Sets only store unique values
  return Array.from(new Set(arr));
}

module.exports = removeDuplicates;
