# Linear Time Complexity `O(n)`

We have established that linear time complexity is when the runtime scales linearly with the input. As the input size increases, the runtime of the algorithm also increases in a linear fashion. This behavior is denoted by Big O notation as O(n), where n represents the size of the input.

Let's look at an example of a linear time O(n) function.

```js
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
```

This function takes in an array and adds the numbers together. For each number in the array, it will run one step. If the array has 2 number, it will run 2 steps. If the array has 1 million numbers, it will run 1 million steps, which obviously takes longer.

Let's try it out.

```js
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

const arr1 = [1, 2, 3, 4, 5];
console.time('Sum Array 1');
sumArray(arr1);
console.timeEnd('Sum Array 1');

const arr2 = Array.from({ length: 10000 }, (_, index) => index + 1);

console.time('Sum Array 2');
sumArray(arr2);
console.timeEnd('Sum Array 2');
```

In `Sum Array 1`, we have an array with 5 numbers. In `Sum Array 2`, we have an array with 10,000 numbers. Let's run this code and see how long it takes.

Your results will be different, but I get the following:

```js
Sum Array 1: 0.039ms
Sum Array 2: 0.152ms
```

Let's increase the size of the array in `Sum Array 2` to 100,000.

```js
const arr2 = Array.from({ length: 100000 }, (_, index) => index + 1);
```

Now, run the code again. I get something pretty similar

```js
Sum Array 1: 0.042ms
Sum Array 2: 1.565ms
```

Let's add two more zeros and make the array 10 million.

Now I get this:

```js
Sum Array 1: 0.039ms
Sum Array 2: 9.09ms
```

So a huge jump there.

This is an example of linear time complexity. The runtime scales linearly with the input.

Most of the challenges that we have done are `O(n)` because they have to iterate over the input.

Even something like this:

```js
function reverseString(str) {
  return str.split('').reverse().join('');
}
```

is `O(n)` because it has to iterate over the string. We did not write a loop, but the `split`, `reverse`, and `join` methods all have to iterate over the string.

There are other complexities that we will look at later, but for now, we will focus on `O(1)` and `O(n)`.

## Dice Game Complexity

Remember the dice game that we made? Let's look at the complexity of that. Here is the function:

```js
function diceGameSimulation() {
  const rollDice = () => Math.floor(Math.random() * 6) + 1;

  const initialSum = rollDice() + rollDice();

  if (initialSum === 7 || initialSum === 11) {
    return 'Win';
  } else if (initialSum === 2 || initialSum === 3 || initialSum === 12) {
    return 'Lose';
  }

  while (true) {
    const newSum = rollDice() + rollDice();
    if (newSum === 7 || newSum === 11) {
      return 'Win';
    } else if (newSum === initialSum) {
      return 'Lose';
    }
  }
}
```

This function has a few different parts. Let's look at each one.

```js
const rollDice = () => Math.floor(Math.random() * 6) + 1;
```

This function is `O(1)` because it does not depend on the input. It will always run in the same amount of time.

```js
const initialSum = rollDice() + rollDice();

if (initialSum === 7 || initialSum === 11) {
  return 'Win';
} else if (initialSum === 2 || initialSum === 3 || initialSum === 12) {
  return 'Lose';
}
```

This part is also `O(1)` because it does not depend on the input. It will always run in the same amount of time.

```js
while (true) {
  const newSum = rollDice() + rollDice();
  if (newSum === 7 || newSum === 11) {
    return 'Win';
  } else if (newSum === initialSum) {
    return 'Lose';
  }
}
```

This part is `O(n)` because it depends on the input. The more times the loop runs, the longer it will take.

So the overall complexity of the function is `O(n)` because the `O(1)` parts are insignificant compared to the `O(n)` part.
