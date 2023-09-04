# Challenge: HashTable getValues Method

## Instructions

Extend the existing `HashTable` class with a new method called `getValues()`. This method should return an array containing all the values stored in the hash table, irrespective of the keys.

Add the `getValues()` method to the `HashTable.js` file.

### Examples

```javascript
const myHashTable = new HashTable();

myHashTable.set('name', 'Alice');
myHashTable.set('age', 30);
myHashTable.set('city', 'New York');

console.log(myHashTable.getValues()); // Expected output: ['Alice', 30, 'New York']
```

### Hints

- You need to iterate through all buckets in the storage array and all key-value pairs within each bucket.
- Create an array to store the values, iterate through each bucket, and then iterate through each key-value pair. Push each value to the array.
- After iterating through all the key-value pairs, return the array of values.

### Solutions

<details>
  <summary>Click For Solution</summary>

```js
 getValues() {
    const values = [];

    for (let i = 0; i < this.storage.length; i++) {
      if (this.storage[i]) {
        for (const [key, value] of this.storage[i]) {
          values.push(value);
        }
      }
    }

    return values;
  }
```

</details>

### Test Cases

```js
const HashTable = require('./HashTable');

describe('HashTable', () => {
  let hashTable;

  beforeEach(() => {
    hashTable = new HashTable();
  });

  test('Get values from hash table', () => {
    hashTable.set('name', 'Alice');
    hashTable.set('age', 30);
    hashTable.set('city', 'New York');

    const values = hashTable.getValues();
    expect(values).toEqual(expect.arrayContaining(['Alice', 30, 'New York']));
    expect(values).toHaveLength(3);
  });

  test('Get values from an empty hash table', () => {
    const values = hashTable.getValues();
    expect(values).toEqual([]);
  });
});
```
