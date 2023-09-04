# Custom Hash Table (Hash Map)

We looked at the built-in `Map` class, which is a hash table, but now I want to implement our own custom hash table from scratch. This is not going to be a very advanced implementation. It can get much more complex where it can handle collisions better and dynamically resize, but this will be a good starting point.

## Class & constructor

I'll start by creating a `HashTable` class and then I'll add some methods to it.

```js
class HashTable {
  constructor(limit = 14) {
    this.storage = [];
    this.limit = limit;
}
```

The constructor will take in a `limit` parameter, which will be the size of the hash table. I'll set a default value of 14, but we can change that when we create a new instance of the `HashTable` class.

I'll also initialize a `storage` array, which will be the hash table. I'll set it to an empty array for now.

## `_hash` function

Next, I'll create a hash function. This will take in a key and return an index.

The point of hashing is to get a unique index for each key. There are all kinds of hashing algorithms that can be used such as `MD5`, `SHA-1`, `SHA-256`, etc. We are going to use a very simple hashing algorithm that will just add up the character codes of each character in the key and then return the sum modulo the size of the hash table.

This isn't the best hash function because it can cause collisions, which happen when two different keys get the same hash. I just don't want to make this too advanced where it goes over everyone's heads, including my own.

```js
  _hash(key, max) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % max;
  }
```

It takes in a key, which will be the key that we will pass into the `set` function when we create it. It will also take in a max, which will be the size of the hash table.

I'll start by initializing a `hash` variable to 0. Then I'll loop through each character in the key and add the character code to the hash. Each character has a character code. You can get the character code of a character by using the `charCodeAt()` method. I'll add the character code to the hash each time through the loop.

Then I'll return the hash modulo the max, which will be the size of the hash table. The reason for this is that is to make sure that the hash is within the range of the hash table. By using the modulo operator, we can make sure of that because the result will always be less than the max.

I added the underscore to the beginning of the function name because this is a private function. It is not meant to be called outside of the class.

## `print` Method

We will create a very simple method that just logs the table. You probably wouldn't want to do this in a real application, but it will be useful for us to see what is going on.

```js
  printTable() {
    console.log(this.storage);
  }
}
```

If you instantiate a new `HashTable` and call the `print()` method, you will see an empty array. Put this in your run file or under the class definition:

```js
const ht = new HashTable();
ht.printTable(); // []
```

## `set` Method

Let's create a method to add a key-value pair to the hash table. This will take in a key and a value. We will use the `_hash()` function to get the index where we will store the key-value pair.

```js
 set(key, value) {
    const index = this._hash(key, this.limit);
    if (this.storage[index] === undefined) {
      this.storage[index] = [[key, value]];
    } else {
      let inserted = false;

      for (let i = 0; i < this.storage[index].length; i++) {
        if (this.storage[index][i][0] === key) {
          this.storage[index][i][1] = value;
          inserted = true;
        }
      }

      if (inserted === false) {
        this.storage[index].push([key, value]);
      }
    }
  }
```

This method will take in a key and a value.

First, we get the index by passing in the key and the limit to the `_hash()` function.

Next, we do a little collision handling. Instead of just storing the key-value pair, we first check to see if there is already something stored at that index. If there is nothing there, we just store the key-value pair in an array at that index. If it is not empty, we will loop through the array at that index and check if the key already exists. If it does, we will update the value. If it doesn't, we will push the key-value pair to the array.

Let's test it out. Add this to your run file:

```js
const ht = new HashTable(8);
ht.set('john', '555-234-3544');
ht.set('james', '555-384-5523');
ht.set('jack', '555-384-9933');
ht.set('jill', '555-390-0034');
ht.printTable();
```

You should see something like this:

```js
[
  [ [ 'james', '555-384-5523' ] ],
  [ [ 'jack', '555-384-9933' ] ],
  <1 empty item>,
  [ [ 'jill', '555-390-0034' ] ],
  <3 empty items>,
  [ [ 'john', '555-234-3544' ] ]
]
```

Remember this image?

![hash table](../../assets/images/hash-table.png)

It looks very similar to what we have done here. We have an array with 8 items. We have 4 items in the array and 4 empty items. The items in the array are also arrays. Each of those arrays has a key-value pair inside of it. The key is the name and the value is the phone number.

## `get` Method

Now let's create a method to get a value from the hash table. This will take in a key and return the value.

```js
   get(key) {
    const index = this._hash(key, this.limit);
    if (this.storage[index] === undefined) {
      return undefined;
    } else {
      for (let i = 0; i < this.storage[index].length; i++) {
        if (this.storage[index][i][0] === key) {
          return this.storage[index][i][1];
        }
      }
    }
  }
```

First, we get the index by passing in the key and the limit to the `_hash()` function. Then we check if the index is empty. If it is, we will return `undefined`. If it is not empty, we will loop through the array at that index and check if the key exists. If it does, we will return the value.

Let's test it out. Add this to your run file:

```js
const ht = new HashTable(8);
ht.set('john', '555-234-3544');
ht.set('james', '555-384-5523');
ht.set('jack', '555-384-9933');
ht.set('jill', '555-390-0034');
console.log(ht.get('jill')); // 555-390-0034
console.log(ht.get('jack')); // 555-384-9933
console.log(ht.get('james')); // 555-384-5523
console.log(ht.get('john')); // 555-234-3544
```

You should get the following:

```js
555 - 390 - 0034;
555 - 384 - 9933;
555 - 384 - 5523;
555 - 234 - 3544;
```

## `remove` Method

Now let's create a method to remove a key-value pair from the hash table. This will take in a key and remove the key-value pair.

```js
  remove(key) {
    const index = this._hash(key, this.limit);
    if (this.storage[index]) {
      if (
        this.storage[index].length === 1 &&
        this.storage[index][0][0] === key
      ) {
        delete this.storage[index];
      } else {
        for (let i = 0; i < this.storage[index].length; i++) {
          if (this.storage[index][i][0] === key) {
            delete this.storage[index][i];
          }
        }
      }
    }
  }
```

First, we get the index by passing in the key and the limit to the `_hash()` function.

Then we check if the bucket exists

Then we check if the key matches the key at the index and there is only one item in the bucket, delete the bucket, otherwise loop through the bucket and delete the item that matches the key.

You should get something like the following:

```js
[
  [ [ 'james', '555-384-5523' ] ],
  <1 empty item>,
  [ [ 'jill', '555-390-0034' ] ],
  <3 empty items>
]
```

## `getValues` Method

Now let's create a method to get all the values from the hash table. This will return an array of all the values.

```js
 getValues() {
    const values = [];
    for (let i = 0; i < this.storage.length; i++) {
      if (this.storage[i]) {
        for (let j = 0; j < this.storage[i].length; j++) {
          values.push(this.storage[i][j][1]);
        }
      }
    }
    return values;
  }
```

Let's test it out. Add this to your run file:

```js
console.log(ht.getValues()); // [ '555-234-3544', '555-384-5523', '555-384-9933', '555-390-0034' ]
```

## Test Cases

Here is a Jest test that should pass if you have done everything correctly. You do not have to understand this, just run it and make sure it passes.

```js
const HashTable = require('./HashTable');

describe('HashTable', () => {
  let hashTable;

  beforeEach(() => {
    hashTable = new HashTable();
  });

  test('Set and get a key-value pair', () => {
    hashTable.set('firstName', 'John');
    expect(hashTable.get('firstName')).toBe('John');
  });

  test('Set and get multiple key-value pairs', () => {
    hashTable.set('firstName', 'John');
    hashTable.set('lastName', 'Smith');
    hashTable.set('age', 30);

    expect(hashTable.get('firstName')).toBe('John');
    expect(hashTable.get('lastName')).toBe('Smith');
    expect(hashTable.get('age')).toBe(30);
  });

  test('Get a value for a non-existent key', () => {
    expect(hashTable.get('city')).toBeUndefined();
  });

  test('Remove a key-value pair', () => {
    hashTable.set('firstName', 'John');
    hashTable.remove('firstName');

    expect(hashTable.get('firstName')).toBeUndefined();
  });

  test('Remove a non-existent key-value pair', () => {
    hashTable.set('firstName', 'John');
    hashTable.remove('lastName');

    expect(hashTable.get('firstName')).toBe('John');
  });

  test('Print the contents of the hash table', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    hashTable.set('firstName', 'John');
    hashTable.set('lastName', 'Smith');
    hashTable.set('age', 30);

    hashTable.printTable();
    expect(consoleSpy).toHaveBeenCalledWith(expect.any(Array));

    consoleSpy.mockRestore();
  });

  test('Get all values from the hash table', () => {
    hashTable.set('firstName', 'John');
    hashTable.set('lastName', 'Smith');
    hashTable.set('age', 30);

    const values = hashTable.getValues();

    expect(values).toEqual(expect.arrayContaining(['John', 'Smith', 30]));
  });
});
```

## Conclusion

That's it! We have create our own hash table. We can now add, get, and remove key-value pairs from our hash table. We can also print out the hash table to see what it looks like.

Now we will do a couple challenges using this class.
