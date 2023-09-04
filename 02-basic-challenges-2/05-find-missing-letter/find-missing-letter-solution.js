// Solution 1
function findMissingLetter(arr) {
  // Create a string of the alphabet
  const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  // Find the index of the first letter in the array in the alphabet string
  const startIndex = alphabet.indexOf(arr[0]);

  // Loop through the array
  for (let i = 0; i < arr.length; i++) {
    // If the current letter in the array is not the same as the current letter in the alphabet string, return the current letter in the alphabet string
    if (arr[i] !== alphabet[startIndex + i]) {
      return alphabet[startIndex + i];
    }
  }

  // If no letter is missing, return an empty string
  return '';
}

// Solution 2
function findMissingLetter(arr) {
  // Find the char code of the first letter in the array
  let start = arr[0].charCodeAt(0);
  // Loop through the array
  for (let i = 1; i < arr.length; i++) {
    // Find the char code of the current letter in the array
    const current = arr[i].charCodeAt(0);
    // If the difference between the current char code and the start char code is greater than 1, return the letter that is missing
    if (current - start > 1) {
      // Convert the char code to a letter
      return String.fromCharCode(start + 1);
    }
    // Update the start char code
    start = current;
  }
  // If no letter is missing, return an empty string
  return '';
}

module.exports = findMissingLetter;
