# Big O Notation

We talked about time complexity in the last lesson. Time complexity represents how the runtime changes as the input grows.

`Big O notation` is a way to describe the time complexity of an algorithm. More specifically, it is a way to describe the upper bound or worst-case scenario of how the runtime or space requirements of an algorithm grow in relation to the size of its input. 

Big O uses mathematical expressions to represent the relationship between the input size (often denoted as "n") and the algorithm's performance. The "O" in Big O stands for "order of" and indicates the rate at which the algorithm's performance grows relative to the input size. We talked about this in the last lesson.

I'm not going to get deep into the math here. I just want you to be able to recognize the different types of time complexity and how to describe them in Big O notation.

### Constant Time Complexity - O(1)

Constant time is when the runtime is always the same, no matter how big the input is.

`0(1)` is the notation for constant time. It's pronounced "O of 1" or "big O of 1".

### Linear Time Complexity - O(n)

Linear time is when the runtime scales linearly as the input grows.

`O(n)` is the notation for linear time. It's pronounced "O of n" or "big O of n".

### Quadratic Time Complexity - O(n^2)

Quadratic time is when the runtime scales quadratically as the input grows.

`O(n^2)` is the notation for quadratic time. It's pronounced "O of n squared" or "big O of n squared".

### Logarithmic Time Complexity - O(log n)

Logarithmic time is when the runtime scales logarithmically as the input grows.

`O(log n)` is the notation for logarithmic time. It's pronounced "O of log n" or "big O of log n".

### Exponential Time Complexity - O(2^n)

Exponential time is when the runtime scales exponentially as the input grows.

`O(2^n)` is the notation for exponential time. It's pronounced "O of 2 to the n" or "big O of 2 to the n".

### Factorial Time Complexity - O(n!)

Factorial time is when the runtime scales factorially as the input grows.

`O(n!)` is the notation for factorial time. It's pronounced "O of n factorial" or "big O of n factorial".

## Array operations and time complexity

Just about every operation in your code has some kind of time complexity, not just entire functions or algorithms. Time complexity refers to how the execution time of an operation scales as the size of the data it operates on increases. This concept doesn't only apply to complete functions with input parameters but also to the individual actions performed on data structures like arrays. So I want to go over the different operations of an array and their time complexity. 

- Accessing elements by index (read): O(1) - Accessing an element by its index is a constant-time operation because arrays use contiguous memory blocks, allowing direct access to elements. So no matter how big the array is, it will always take the same amount of time to access an element by its index. The input doesn't always have to be just a function argument. In this case, the input is the index.

- Insertion and deletion at the end: O(1) - If you add or remove elements at the end of the array, it is usually a constant-time operation because there is no need to shift or reorganize other elements. in this case the input is the array size and the specific element being inserted or deleted.

- Insertion and deletion at the beginning: O(n) - Adding or removing elements at the beginning of the array requires shifting all existing elements to make space for the new element, which takes linear time.

- Insertion and deletion in the middle: O(n) - Similarly, adding or removing elements in the middle of the array requires shifting elements, resulting in a linear time complexity.

- Searching for an element: O(n) - In the worst case, searching for an element in an unsorted array requires checking each element, which takes linear time. You basically are searching one by one.

- Searching for an element with binary search (only applicable to sorted arrays): O(log n) - If the array is sorted, you can perform binary search, which has a logarithmic time complexity. This is very efficient. We'll talk more about binary search in a later lesson. You basically split the sorted array in half and eliminate the half that doesn't include the element you're looking for. Then You split in half again and eliminate until you find the element. Again, the array has to be sorted for this.

So now that you know about the main time complexities and Big O notation, in the next lesson, I want to give you can example of `constant` time.
