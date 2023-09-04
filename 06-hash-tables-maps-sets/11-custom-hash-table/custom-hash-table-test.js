const HashTable = require('./custom-hash-table');

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
});
