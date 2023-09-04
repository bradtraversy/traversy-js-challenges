# What Are Sorting Algorithms?

In this section, we're going to get into `sorting algorithms`. This stuff tends to get pretty advanced so I'm going to be teaching as if you've never heard the words `sorting algorithm` before. If you have, that's great, but I want everyone to be able to follow along.

We looked at `Binary search trees` in the last section. So you know that in order to use a `Binary search tree`, you need to insert the data in a sorted order. But how do you sort the data? Well, you use a `sorting algorithm`.

A `sorting algorithm` is an algorithm that puts elements of a list in a certain order. The most frequently used orders are numerical order and lexicographical/alphabetical order. Efficient sorting is important for optimizing the use of other algorithms such as `searching` and `merging`, which require input data to be in sorted lists.

### Efficiency of Sorting Algorithms

There are many different sorting algorithms and each has its own advantages and limitations. As I said, sorting is a basic building block that many other algorithms are built on. Therefore, it is important to know how sorting algorithms work and their relative efficiency.

Efficiency in an algorithm is defined in terms of the `time complexity` and `space complexity`, which we've already talked about. As a reminder, `time complexity` is a measure of the amount of time it takes for the algorithm to run. `Space complexity` is a measure of the amount of memory space it takes for the algorithm to run.

Sorting algorithm performance can be classified by:

- `Best case` complexity: the minimum possible number of operations required to sort the data.
- `Average case` complexity: the average number of operations required to sort the data.
- `Worst case` complexity: the maximum number of operations required to sort the data.
- `Memory usage`: the amount of memory space required to sort the data.

These are expressed using `Big O notation`, which we've also talked about.

### Types of Sorting Algorithms

There are many different types of sorting algorithms. We're going to look at the most common ones in the next few sections. Here is an overview of the ones we'll be looking at:

- `Bubble sort`
- `Selection sort`
- `Insertion sort`
- `Merge sort`
- `Quick sort`
- `Heap sort`
- `Radix sort`

I will go over these in detail in the next few sections.

Strategies for sorting:

- Recursion - Recursion can be used in sorting algorithms. We know that recursion is when a function calls itself with a smaller version of the input. We'll see how this can be used in sorting algorithms.

- Divide and conquer - A divide and conquer algorithm works by recursively breaking down a problem into two or more sub-problems of the same or related type, until these become simple enough to be solved directly. The solutions to the sub-problems are then combined to give a solution to the original problem. This is very similar to recursion. We'll see how this can be used in sorting algorithms.

- In-place sorting - An in-place sorting algorithm uses constant extra space for producing the output (modifies the given array only to produce the sorted array). It sorts the list only by modifying the order of the elements within the list. We'll see how this can be used in sorting algorithms.

Let's jump right in and look at the first sorting algorithm, `Bubble sort` in the next lesson.
