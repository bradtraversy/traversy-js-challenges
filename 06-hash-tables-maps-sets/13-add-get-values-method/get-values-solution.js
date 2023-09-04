class HashTable {
  // Rest of the class

  // Get an array of all values in the hash table
  getValues() {
    // Create an empty array to store the values
    const values = [];

    // Loop through each bucket in the storage
    for (let i = 0; i < this.storage.length; i++) {
      // Check if the bucket is not empty
      if (this.storage[i]) {
        // Iterate through each key-value pair in the bucket
        for (const [key, value] of this.storage[i]) {
          // Push the value to the values array
          values.push(value);
        }
      }
    }

    // Return the array of values
    return values;
  }
}

module.exports = HashTable;
