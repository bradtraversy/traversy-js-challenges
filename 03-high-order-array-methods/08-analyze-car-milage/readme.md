# Challenge: Car Mileage Analysis

## Instructions

You are given an array of car objects, each containing information about a car's make, model, year, and mileage. Your goal is to perform some analysis on the car mileage data using high order array methods.

Implement a function called `analyzeCarMileage` which takes in an array of car objects and performs the following tasks:

1. Calculate the average mileage of all cars.
2. Find the car with the highest mileage.
3. Find the car with the lowest mileage.
4. Calculate the total mileage of all cars combined.

The function should return an object containing the calculated values as properties.

Here is an object that you can use to test your function in the run file:

```js
const cars = [
  { make: 'Toyota', model: 'Camry', year: 2020, mileage: 30800 },
  { make: 'Honda', model: 'Civic', year: 2019, mileage: 32000 },
  { make: 'Chevrolet', model: 'Impala', year: 2021, mileage: 17500 },
  { make: 'Audi', model: 'R8', year: 2020, mileage: 13000 },
  { make: 'Tesla', model: 'Model 3', year: 2018, mileage: 50000 },
];
```

### Function Signature

```js
/**
 * Analyzes car mileage data using high order array methods.
 * @param {Array} cars - An array of car objects.
 * @returns {Object} - An object containing calculated values.
 */
function analyzeCarMileage(cars: object[]): object;
```

Each car object will have the following properties:

- `make`: The make of the car (string).
- `model`: The model of the car (string).
- `year`: The year the car was manufactured (number).
- `mileage`: The mileage of the car (number).

### Examples

```js
const cars = [
  { make: 'Toyota', model: 'Corolla', year: 2020, mileage: 25000 },
  { make: 'Honda', model: 'Civic', year: 2019, mileage: 30000 },
  { make: 'Ford', model: 'Mustang', year: 2021, mileage: 15000 },
];

const analysis = analyzeCarMileage(cars);
console.log(analysis);
// Output:
// {
//   averageMileage: 23333.33,
//   highestMileageCar: { make: "Honda", model: "Civic", year: 2019, mileage: 30000 },
//   lowestMileageCar: { make: "Ford", model: "Mustang", year: 2021, mileage: 15000 },
//   totalMileage: 70000
// }
```

### Constraints

- The input array `cars` will contain at most 100 car objects.
- Each car object's `mileage` property will be a positive integer.
- Result should be rounded to 2 decimal places.

### Hints

- You can use the `reduce` method for most of the calculations.

## Solution

<details>
  <summary>Click to view solution</summary>

```js
function analyzeCarMileage(cars) {
  const totalMileage = cars.reduce((sum, car) => sum + car.mileage, 0);
  const averageMileage = totalMileage / cars.length;
  const highestMileageCar = cars.reduce(
    (highest, car) => (car.mileage > highest.mileage ? car : highest),
    cars[0]
  );
  const lowestMileageCar = cars.reduce(
    (lowest, car) => (car.mileage < lowest.mileage ? car : lowest),
    cars[0]
  );

  return {
    averageMileage: parseFloat(averageMileage.toFixed(2)),
    highestMileageCar,
    lowestMileageCar,
    totalMileage,
  };
}
```

### Explanation

- Create a variable `totalMileage` and initialize it to the result of calling the `reduce` method on the `cars` array. The accumulator should be the sum of the accumulator and the car's mileage. The initial value of `0` will be used as the initial value of the accumulator.
- Create a variable `averageMileage` and initialize it to the result of dividing `totalMileage` by the length of the `cars` array.
- Create a variable `highestMileageCar` and initialize it to the result of calling the `reduce` method on the `cars` array. The accumulator should be the car with the highest mileage. The initial value of `cars[0]` will be used as the initial value of the accumulator.
- Create a variable `lowestMileageCar` and initialize it to the result of calling the `reduce` method on the `cars` array. The accumulator should be the car with the lowest mileage. The initial value of `cars[0]` will be used as the initial value of the accumulator.
- Return an object containing the calculated values. Round the `averageMileage` to 2 decimal places using the `toFixed` method and convert it to a number using the `parseFloat` method.

I know that `reduce` can be a little tough to understand, so let's really break it down for the `highestMileageCar` variable. Here is the code again for reference:

```js
const highestMileageCar = cars.reduce(
  (highest, car) => (car.mileage > highest.mileage ? car : highest),
  cars[0]
);
```

1. `reduce` takes two main arguments: a function and an initial value. The initial value is set to `cars[0]`, which is the first car in the list.
2. The function takes two parameters: `highest` and `car`. `highest` initially holds the first car, and car is the next car in the list.
3. For each car, the function compares the mileage of the current car `car.mileage` with the mileage of the car that was thought to be the highest so far `highest.mileage`.
4. If the current car's mileage is greater, we replace the value of `highest` with the current car.
5. If the current car's mileage is not greater, we stick with the car we thought was the best so far (highest).
6. This process repeats for each car in the list.

Whatever we return from the callback for the `reduce` method will be the new value of the accumulator.

</details>

### Test Cases

```js
test('Analyzing Car Mileage Data', () => {
  const cars = [
    { make: 'Toyota', model: 'Corolla', year: 2020, mileage: 25000 },
    { make: 'Honda', model: 'Civic', year: 2019, mileage: 30000 },
    { make: 'Ford', model: 'Mustang', year: 2021, mileage: 15000 },
  ];

  const analysis = analyzeCarMileage(cars);

  expect(analysis.averageMileage).toBeCloseTo(23333.33);
  expect(analysis.highestMileageCar).toEqual({
    make: 'Honda',
    model: 'Civic',
    year: 2019,
    mileage: 30000,
  });
  expect(analysis.lowestMileageCar).toEqual({
    make: 'Ford',
    model: 'Mustang',
    year: 2021,
    mileage: 15000,
  });
  expect(analysis.totalMileage).toBe(70000);
});
```

Feel free to add more test cases to verify the correctness of your `analyzeCarMileage` function.
