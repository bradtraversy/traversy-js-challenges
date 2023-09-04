# Sets

Now we are going to move on to `sets`. A set is a collection of unique values. A set can contain any data type. You can loop through a set in insertion order. Insertion order is the order in which the values were added to the set. A set is similar to an array, but a set is not indexed and does not contain duplicate values.

## Creating a Set

To create a set, we use the `new` keyword and the `Set()` constructor. Let's create a set called `nameSet`:

```js
const nameSet = new Set();
```

We can also pass an array to the `Set()` constructor. The values in the array will be added to the set. We can create a set with some values like this:

```js
const nameSet = new Set(['John', 'Jane', 'Joe']);
```

Let's log the set:

```js
console.log(nameSet); // Set { 'John', 'Jane', 'Joe' }
```

We can see that the set has three values. Let's create a set with some duplicate values:

```js
const nameSet = new Set(['John', 'Jane', 'Joe', 'Jane', 'Joe']);
```

Let's log the set:

```js
console.log(nameSet); // Set { 'John', 'Jane', 'Joe' }
```

We can see that even though we added duplicate values to the set, the set does not contain any duplicate values. The set only contains unique values, which can be very useful.

## Adding Data

To add data to a set, we use the `add()` method. Let's add some values to the `nameSet` set:

```js
nameSet.add('Jack');
nameSet.add('Jill');
```

Let's log the set:

```js
console.log(nameSet); // Set { 'John', 'Jane', 'Joe', 'Jack', 'Jill' }
```

## Check for a Value

To check for a value in a set, we use the `has()` method. Let's check if the set contains the value `'Jack'`:

```js
console.log(nameSet.has('Jack')); // true
```

## Deleting Data

To delete data from a set, we use the `delete()` method. Let's delete the value `'Jack'` from the set:

```js
nameSet.delete('Jack');
```

Let's log the set:

```js
console.log(nameSet); // Set { 'John', 'Jane', 'Joe', 'Jill' }
```

## Getting the Size of a Set

To get the size of a set, we use the `size` property. Let's log the size of the `nameSet` set:

```js
console.log(nameSet.size); // 4
```

## Getting All Values from a Set

To get all values from a set, we use the `values()` method. Let's log all values from the `nameSet` set:

```js
console.log(nameSet.values()); // [Set Iterator] { 'John', 'Jane', 'Joe', 'Jill' }
```

We can see that the `values()` method returns a set iterator. A set iterator is an object that contains the values from the set. We can use a `for...of` loop to loop through the set iterator and log each value

## Looping Through a Set

To loop through a set, we can use the `for...of` loop. Let's loop through the `nameSet` set and log each value:

```js
for (const value of nameSet) {
  console.log(value);
}
```

## Converting a Set to an Array

To convert a set to an array, we use the `Array.from()` method. Let's convert the `nameSet` set to an array:

```js
const nameArray = Array.from(nameSet);
console.log(nameArray); // [ 'John', 'Jane', 'Joe', 'Jill' ]
```

## Converting an Array to a Set

To convert an array to a set, we use the `Set()` constructor. Let's convert the `nameArray` array to a set:

```js
const nameSet = new Set(nameArray);
console.log(nameSet); // Set { 'John', 'Jane', 'Joe', 'Jill' }
```

## Deleting All Data from a Set

To delete all data from a set, we use the `clear()` method. Let's delete all data from the `nameSet` set:

```js
nameSet.clear();
```

Let's try some challenges using sets.
