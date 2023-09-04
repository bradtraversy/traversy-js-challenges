/*
  Example of constant time O(1)

  Constant time means that the time required to complete a function is the same regardless of the size of the input data set.
*/

function accessElement(arr, index) {
  return arr[index];
}

const arr1 = [1, 2, 3, 4, 5];
console.time('Access Element 1');
console.log(accessElement(arr1, 1));
console.timeEnd('Access Element 1');

const arr2 = Array.from({ length: 10000 }, (_, index) => index + 1);

console.time('Access Element 2');
console.log(accessElement(arr2, 1));
console.timeEnd('Access Element 2');
