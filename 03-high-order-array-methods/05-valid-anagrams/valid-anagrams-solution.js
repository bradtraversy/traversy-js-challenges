/**
 * Checks if two strings are valid anagrams of each other.
 *
 * @param {string} str1 - The first input string.
 * @param {string} str2 - The second input string.
 * @returns {boolean} - True if the strings are valid anagrams, false otherwise.
 */
function validAnagrams(str1, str2) {
  // Split the strings into arrays of characters, then reduce each array into an object of character frequencies for the first string
  const freqCount1 = str1.split('').reduce((acc, char) => {
    // Increment the frequency of the character or initialize it to 1 if not present
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {});

  // Split the strings into arrays of characters, then reduce each array into an object of character frequencies for the second string
  const freqCount2 = str2.split('').reduce((acc, char) => {
    // Increment the frequency of the character or initialize it to 1 if not present
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {});

  // Compare the two objects of character frequencies by checking if the frequency of each character in the first object is equal to the frequency of the same character in the second object
  return Object.keys(freqCount1).every(
    (char) => freqCount1[char] === freqCount2[char]
  );
}

// Example usage:
const result = validAnagrams('listen', 'silent');
console.log(result);  // Output: true
