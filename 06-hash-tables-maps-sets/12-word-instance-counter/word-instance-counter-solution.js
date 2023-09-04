const HashTable = require('./HashTable');

function wordInstanceCounter(str, word) {
  // Convert the input string to lowercase and split it into an array of words
  const words = str.toLowerCase().split(/\W+/);

  // Create a new instance of the HashTable class to store word frequencies
  const wordFrequency = new HashTable();

  // Convert the target word to lowercase for case-insensitive comparison
  const targetWord = word.toLowerCase();

  // Initialize a count variable to store the number of instances of the target word
  let count = 0;

  // Loop through each word in the array of words
  for (const currentWord of words) {
    // Ignore empty strings (caused by multiple spaces or punctuation marks)
    if (currentWord === '') continue;

    // Check if the current word already exists in the HashTable
    if (wordFrequency.has(currentWord)) {
      // If the word exists, increment its frequency by 1
      wordFrequency.set(currentWord, wordFrequency.get(currentWord) + 1);
    } else {
      // If the word doesn't exist, add it to the HashTable with a frequency of 1
      wordFrequency.set(currentWord, 1);
    }

    // Check if the current word is the target word
    if (currentWord === targetWord) {
      // Get the frequency of the target word from the HashTable
      count = wordFrequency.get(currentWord);
    }
  }

  // Return the count of instances of the target word
  return count;
}

module.exports = wordInstanceCounter;
