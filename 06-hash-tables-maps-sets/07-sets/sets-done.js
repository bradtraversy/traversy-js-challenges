// Create a set (try adding duplicate Values)
const nameSet = new Set(['John', 'Jane', 'Joe', 'John', 'Joe']);

// Add values to set
nameSet.add('Jack');
nameSet.add('Jill');

console.log(nameSet);

// Check for values
console.log(nameSet.has('Jill'));

// Delete from set
nameSet.delete('Jill');

console.log(nameSet);

// Get size of set
console.log(nameSet.size);

// Get all values from set
console.log(nameSet.values());

// Iterate through set
for (const name of nameSet) {
  console.log(name);
}

// Convert set to array
const nameArray = [...nameSet];
console.log(nameArray);

// Clear set
nameSet.clear();
