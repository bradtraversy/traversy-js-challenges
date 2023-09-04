const HashTable = require('./HashTable');

const myHashTable = new HashTable();

myHashTable.set('a', 1);
myHashTable.set('b', 2);
myHashTable.set('c', 3);
myHashTable.set('d', 4);

console.log(myHashTable.getValues());
