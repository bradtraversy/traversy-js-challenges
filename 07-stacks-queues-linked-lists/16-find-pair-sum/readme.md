## Challenge: Find Pair Sum

You are given an array of integers and a target sum. Implement a function called `findPairSum` that finds and returns a pair of distinct elements from the array whose sum is equal to the target sum. If no such pair exists, return `null`. You should use the `DoublyLinkedList` class/constructor to efficiently implement this function.

### Function Signature

```javascript
/**
 * Finds a pair of distinct elements from the array whose sum is equal to the target sum.
 * @param {number[]} nums - The array of integers.
 * @param {number} targetSum - The target sum to find.
 * @returns {number[] | null} - An array containing the pair of elements whose sum is the target sum, or null if no such pair exists.
 */
function findPairSum(nums: number[], targetSum: number): number[] | null
```

### Example

```javascript
const nums = [2, 6, 3, 8, 10, 5];
const targetSum = 12;

const pair = findPairSum(nums, targetSum);
console.log(pair); // Should print: [2, 10]
```

### Hints

- Create a `DoublyLinkedList` to store the encountered numbers.
- For each number in the array, calculate the difference between the target sum and the current number.
- Check if the calculated difference exists in the `DoublyLinkedList`. If it does, you found a pair.

## Solution

<details>
<summary>Click to reveal solution</summary>

```javascript
function findPairSum(nums, targetSum) {
  const seen = new DoublyLinkedList();

  for (const num of nums) {
    const difference = targetSum - num;
    if (seen.contains(difference)) {
      return [difference, num];
    }
    seen.append(num);
  }

  return null;
}
```

- Instantiate a new `DoublyLinkedList` called `seen` to store the encountered numbers.
- Iterate through the input array `nums` using a `for...of` loop.
- For each number `num` in the array, calculate the difference between the target sum and the current number. Store the difference in a variable called `difference`.
- Check if the `seen` list contains the `difference`. If it does, return an array containing the `difference` and `num`.
- Otherwise, append the `num` to the `seen` list.
- If no such pair exists, return `null`.

</details>

### Test Cases

```javascript
describe('findPair', () => {
  it('should find a pair with the given target sum', () => {
    const nums = [2, 6, 3, 8, 10, 5];
    const targetSum = 12;
    const pair = findPair(nums, targetSum);
    expect(pair).toEqual([2, 10]);
  });

  it('should return null if no such pair exists', () => {
    const nums = [1, 2, 3, 4, 5];
    const targetSum = 10;
    const pair = findPair(nums, targetSum);
    expect(pair).toBeNull();
  });
});
```
