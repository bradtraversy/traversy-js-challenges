# What Are High Order Array Methods?

Most of the challenges that we have done so far have used loops. Loops are one of the biggest fundamentals in computer science in general. It's important that you know how to use them. For the next batch of challenges, I want to utilize some of the high order array methods in JavaScript, such as `map` and `filter`. These methods are very useful and can help you write cleaner code. Using loops is usually a bit more efficient, but the difference is negligible unless you are dealing with a very very large data set. In everyday code, it's better to write clean code that is easy to read and understand.

Most of you probably know what high order array methods are, but I just want to quickly go over some of the common ones before we jump into the challenges.

A high order array method is a method that takes in a function as an argument or returns a function as a result. The most common high order array methods are `map`, `filter`, and `reduce`. There are a few others, but these are the ones that I use the most. They allow us to iterate over an array and perform some sort of operation on each element.

Let's use the following array for our examples:

```js
const numbers = [1, 2, 3, 4, 5];
```

## Map

The `map` method takes in a function as an argument and returns a new array with the result of calling the function on each element in the array. Here is an example:

```js

const doubledNumbers = numbers.map((num) => {
  return num * 2;
});

console.log(doubledNumbers);

// Output: [2, 4, 6, 8, 10]
```

In the example above, we have an array of numbers. We call the `map` method on the array and pass in a function as an argument. The function takes in a number as an argument and returns the number multiplied by 2. The `map` method then returns a new array with the result of calling the function on each element in the array.

In this example I multiplied each number by 2, but you can do whatever you want in the function.

## Filter

The `filter` method takes in a function as an argument and returns a new array with all the elements that pass the test implemented by the function. Here is an example:

```js
const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.filter((num) => {
  return num % 2 === 0;
});

console.log(evenNumbers);

// Output: [2, 4]
```

In the example above, we have an array of numbers. We call the `filter` method on the array and pass in a function as an argument. The function takes in a number as an argument and returns `true` if the number is even and `false` if the number is odd. The `filter` method then returns a new array with all the elements that pass the test implemented by the function.

Again, in this example I filtered out all the odd numbers, but you can do whatever you want in the function.

## Reduce

The `reduce` method takes in a function as an argument and returns a single value. Here is an example:

```js
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((total, num) => {
  return total + num;
}, 0);

console.log(sum);

// Output: 15
```

In the example above, we have an array of numbers. We call the `reduce` method on the array and pass in a function as an argument. The function takes in two arguments, `total` and `num`. The `total` argument is the value that we are accumulating. The `num` argument is the current value in the array. The function returns the sum of the `total` and `num`. The `reduce` method then returns a single value.

## forEach

The `forEach` method takes in a function as an argument and executes the function on each element in the array. Here is an example:

```js
const numbers = [1, 2, 3, 4, 5];

numbers.forEach((num) => {
  console.log(num);
});

// Output: 1 2 3 4 5
```

In the example above, we have an array of numbers. We call the `forEach` method on the array and pass in a function as an argument. The function takes in a number as an argument and logs the number to the console. The `forEach` method then executes the function on each element in the array.

Here are some other high order array methods that you might see:

- `some` - returns `true` if at least one element in the array passes the test implemented by the function
- `every` - returns `true` if all elements in the array pass the test implemented by the function
- `find` - returns the value of the first element in the array that passes the test implemented by the function
- `findIndex` - returns the index of the first element in the array that passes the test implemented by the function
- `sort` - sorts the elements in the array
- `reverse` - reverses the order of the elements in the array
- `includes` - returns `true` if the array contains a certain element
