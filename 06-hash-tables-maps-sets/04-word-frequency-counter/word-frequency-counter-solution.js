function wordFrequencyCounter(str) {
  // Convert the string to lowercase and split it into an array of words
  const words = str.toLowerCase().split(/\W+/);

  // Create an empty map to store word frequencies
  const wordFrequency = new Map();

  // Loop through each word in the array
  for (const word of words) {
    // Ignore empty strings (caused by multiple spaces or punctuation marks)
    if (word === '') continue;

    // If the word is already in the map, increment its frequency
    if (wordFrequency.has(word)) {
      wordFrequency.set(word, wordFrequency.get(word) + 1);
    } else {
      // If the word is not in the map, add it with a frequency of 1
      wordFrequency.set(word, 1);
    }
  }

  return wordFrequency;
}

module.exports = wordFrequencyCounter;
