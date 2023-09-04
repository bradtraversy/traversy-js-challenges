// Solution 1
function countOccurrences(str, char) {
  // Declare a variable to store the number of occurrences
  let count = 0;

  // Loop through the string
  for (let i = 0; i < str.length; i++) {
    // If the current character is the same as the character we're looking for, increment the count
    if (str[i] === char) {
      count++;
    }
  }

  // Return the number of occurrences
  return count;
}

// Solution 2
const countOccurrences = (str, char) => str.split(char).length - 1; // Split the string on the character and return the length of the resulting array minus 1

module.exports = countOccurrences;
