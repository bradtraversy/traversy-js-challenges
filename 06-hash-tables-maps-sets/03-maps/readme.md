# Maps

Maps were added as a data structure to JavaScript in the `ES2015` update. In JavaScript, a `map` is a collection of key-value pairs. Maps are also known as dictionaries, hashmaps, and associative arrays in other programming languages. Maps are used to store data in a way that uniquely identifies each element in the collection. This is done by using a key, which is a unique identifier for each element in the collection. The key is used to retrieve the associated value.

## Maps vs Objects

Maps are similar to objects in that both let you set keys to values, retrieve those values, delete keys, and detect whether something is stored at a key. Objects are used more because they have been around longer, but maps are preferred in certain cases. The biggest difference between maps and objects is that maps allow keys of any type, while objects only allow strings, numbers, and symbols as keys. This means that maps can use functions, objects, and any primitive type as a key.

Maps can also have better performance in scenarios involving frequent additions and removals of key-value pairs. On the other hand, objects have better performance for the case of looking up key-value pairs.

## Creating a Map

To create a map, we use the `new` keyword and the `Map()` constructor. let's create a map called `nameMap`:

```js
const nameMap = new Map();
```

We can also pass an array of arrays to the `Map()` constructor. The first element in each sub-array will be the key, and the second element will be the value. We can create a map with some key-value pairs like this:

```js
const nameMap = new Map([
  [1, 'John'],
  [2, 'Jane'],
  [3, 'Joe'],
]);
```

Let's log the map:

```js
console.log(nameMap);
```

We can see that the map has three key-value pairs. The keys are the numbers 1, 2, and 3, and the values are the strings 'John', 'Jane', and 'Joe'. Notice that I used numbers as keys in this example. We can use any type of data as a key, including objects and functions. Let's create a map with some different types of keys:

```js
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
```

## Retrieving Data

To retrieve data from a map, we use the `get()` method. Let's retrieve the value associated with the key `1` from the `nameMap` map:

```js
console.log(nameMap.get(1)); // John
```

Let's get the function and the object values from the `map2` map:

```js
console.log(map2.get(myFunction));
console.log(map2.get(emptyObj));
```

## Setting Data

To set data in a map, we use the `set()` method. Let's set some new key-value pairs in the `nameMap` map:

```js
nameMap.set(4, 'Jack');
nameMap.set(5, 'Jill');
```

Let's log the map:

```js
console.log(nameMap); // Map(5) { 1 => 'John', 2 => 'Jane', 3 => 'Joe', 4 => 'Jack', 5 => 'Jill' }
```

## Checking if a Key Exists

To check if a key exists in a map, we use the `has()` method. Let's check if the key `1` exists in the `nameMap` map:

```js
console.log(nameMap.has(1)); // true
console.log(nameMap.has(6)); // false
```

## Deleting Data

To delete data from a map, we use the `delete()` method. Let's delete the key-value pair with the key `1` from the `nameMap` map:

```js
nameMap.delete(1);
console.log(nameMap.has(1)); // false
```

## Getting the Size of a Map

To get the size of a map, we use the `size` property. Let's log the size of the `nameMap` map:

```js
console.log(nameMap.size); // 4
```

## Iterating Through a Map

To iterate/loop through a map, we can use the `for...of` loop. Let's loop through the `nameMap` map and log each key-value pair:

```js
for (const [key, value] of nameMap) {
  console.log(key, value);
}
```

You can also use the `forEach()` method to loop through a map. Let's log each key-value pair using the `forEach()` method:

```js
nameMap.forEach((value, key) => {
  console.log(key, value);
});
```

You can also get all of the keys or values from a map using the `keys()` and `values()` methods. Let's log all of the keys and values from the `nameMap` map:

```js
console.log(nameMap.keys()); // MapIterator { 2, 3, 4, 5 }
console.log(nameMap.values()); // MapIterator { 'Jane', 'Joe', 'Jack', 'Jill' }
```

## Clearing a Map

To clear a map, we use the `clear()` method. Let's clear the `nameMap` map:

```js
nameMap.clear();
console.log(nameMap.size);
```

Now let's try some challenges!
