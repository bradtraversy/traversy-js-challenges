const nameMap = new Map([
  [1, 'John'],
  [2, 'Jane'],
  [3, 'Joe'],
]);

const myFunction = () => {};
const emptyObj = {};

const map2 = new Map([
  ['name', 'John'],
  [1, 'number one'],
  [true, 'really true'],
  [null, 'null'],
  [myFunction, 'empty function'],
  [emptyObj, 'empty object'],
]);

// Getting values
console.log(nameMap.get(1));
console.log(map2.get(myFunction));
console.log(map2.get(emptyObj));

// Setting values
nameMap.set(4, 'Jack');
nameMap.set(5, 'Jill');

// Checking values
console.log(nameMap.has(1));
console.log(nameMap.has(6));

// Deleting values
nameMap.delete(1);
console.log(nameMap.has(1));

// Get Size
console.log(nameMap.size);

// Iterating (for...of)
for (let [key, value] of nameMap) {
  console.log(key, value);
}

// Using forEach
nameMap.forEach((value, key) => {
  console.log(key, value);
});

// Looping keys and values
console.log(nameMap.keys());
console.log(nameMap.values());

// Clearing
nameMap.clear();
console.log(nameMap.size);

// console.log(nameMap);
