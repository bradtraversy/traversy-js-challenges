/*
Space Complexity: O(1)
Time Complexity: O(1)
*/

function add(num1, num2) {
  return num1 + num2;
}

/*
Space Complexity: O(n)
Time Complexity: O(n)
*/

function createArray(num) {
  const arr = [];

  for (let i = 0; i < num; i++) {
    arr.push(i);
  }

  return arr;
}

/*
Space Complexity: O(n^2)
Time Complexity: O(n^2)
*/

function createMatrix(num) {
  const matrix = [];

  for (let i = 0; i < num; i++) {
    matrix[i] = [];

    for (let j = 0; j < num; j++) {
      matrix[i][j] = i + j;
    }
  }

  return matrix;
}

/*
Space Complexity: O(log n)
Time Complexity: O(log n)
*/

function findPower(base, exponent) {
  if (exponent === 0) {
    return 1;
  }

  if (exponent % 2 === 0) {
    const halfPower = findPower(base, exponent / 2);
    return halfPower * halfPower;
  } else {
    const halfPower = findPower(base, (exponent - 1) / 2);
    return base * halfPower * halfPower;
  }
}

/*
Space Complexity: O(1)
Time Complexity: O(n)
*/

function findSum(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}
