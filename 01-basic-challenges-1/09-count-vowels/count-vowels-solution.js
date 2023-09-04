function countVowels(str) {
  // Declare a variable to store the formatted string
  const formattedStr = str.toLowerCase();
  // Declare a variable to store the number of vowels
  let count = 0;

  // Loop through the string
  for (let i = 0; i < formattedStr.length; i++) {
    // Declare a variable to store the current character
    const char = formattedStr[i];

    // If the current character is a vowel, increment the count
    if (
      char === 'a' ||
      char === 'e' ||
      char === 'i' ||
      char === 'o' ||
      char === 'u'
    ) {
      count++;
    }
  }

  // Return the number of vowels
  return count;
}

module.exports = countVowels;
