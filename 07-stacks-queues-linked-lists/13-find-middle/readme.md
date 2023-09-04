# Challenge: Find Middle

In the last lesson, we looked at pointers and the fast and slow pattern. This is when you use two pointers to traverse an iterable data structure at different speeds. We want to do this to find the middle node of a linked list.

## Instructions

Write a function called `findMiddle` that takes in a linked list.

The function should return the middle node of the linked list. If the list has an even number of nodes, return the second middle node in the list.

There are a number of ways we could have formatted this. You could add `findMiddle` as a method on the `LinkedList` class, or you could write it as a standalone function. We chose to write it as a standalone function because it's easier to test this way. The function will take in the list instance.

### Function Signature

```js
/**
 * Returns the middle node of the linked list.
 * @param {LinkedList} list - The linked list.
 * @returns {(Node|null)} - The middle node of the linked list.
 */
function findMiddle(list: LinkedList): Node;
```

### Examples

```js
const list = new LinkedList();
list.add(1);
list.add(2);
list.add(3); // Middle node
list.add(4);
list.add(5);

findMiddle(list); // returns 3
```

```js
const list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.add(4); // Second middle node
list.add(5);
list.add(6);

findMiddle(list); // returns 4
```

### Hints

- Use two pointers to solve this problem
- One pointer should move at twice the speed of the other pointer
- When the faster pointer reaches the end of the list, the slower pointer will be at the middle node

## Solutions

<details>
  <summary>Click For Solution</summary>


```js
function findMiddle(list) {
  let slow = list.head;
  let fast = list.head;
  let prev = null;

  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    prev = slow;
    slow = slow.next;
  }

  if (fast === null) {
    // Even number of nodes
    return prev.next;
  } else {
    // Odd number of nodes
    return slow;
  }
}
```

<details>
  <summary>Click For Solution</summary>

### Explanation

We will use the `fast and slow pointer pattern` to find the middle node of the linked list.

- Set both pointers to the head of the list.
- Run a while loop to traverse the list. The loop condition is that the fast pointer is not null and the next node of the fast pointer is not null. This ensures that the fast pointer is always ahead of the slow pointer.
- Inside the loop, move the fast pointer two nodes at a time by assigning `fast = fast.next.next`. Then move the slow pointer one node at a time by assigning `slow = slow.next`.
- After the loop, check if the fast pointer is null. If it is null, then the list has an even number of nodes. In this case, return the second middle node, which is the next node of the slow pointer. If the fast pointer is not null, then the list has an odd number of nodes. In this case, return the slow pointer.

### Time & Space Complexity

The time complexity of the function `findMiddle(list)` is `O(n)`, where n is the number of nodes in the linked list. This is because the function uses a two-pointer approach to find the middle node of the linked list. The fast pointer moves twice as fast as the slow pointer, effectively iterating through the entire linked list once.

The space complexity of the function is `O(1)`. Regardless of the size of the linked list, the function only uses a constant amount of additional space to store the slow, fast, and prev pointers. It doesn't use any additional data structures or recursion, so the space complexity remains constant.

</details>

## Test Cases

```js
describe('findMiddle', () => {
  test('should return the middle node for a linked list with an odd number of nodes', () => {
    const list = new LinkedList();
    list.add(1);
    list.add(2);
    list.add(3);
    list.add(4);
    list.add(5);

    const middleNode = findMiddle(list);
    expect(middleNode.data).toBe(3);
  });

  test('should return the second middle node for a linked list with an even number of nodes', () => {
    const list = new LinkedList();
    list.add(1);
    list.add(2);
    list.add(3);
    list.add(4);
    list.add(5);
    list.add(6);

    const middleNode = findMiddle(list);
    expect(middleNode.data).toBe(4);
  });
});
```
