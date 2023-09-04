# Traversy JS Challenges, Data Structures, and Algorithms

This is a sandbox for my upcoming `JavaScript challenges, data structures, and algorithms` course. Just about all of the concepts that are included, also exist in other languages. So, if you are not a JavaScript developer, you can still follow along and learn from this course/repo.

This course/repo goes over everything from basic loop challenges, recursion, complexity, data structures, and algorithms. It is meant to be a complete course on the subject. It is not meant to be a course on JavaScript fundamentals. You should already know the basics of JavaScript.

## File Structure

Each folder includes:

- `readme.md` - The challenge/code instructions. This also includes hints, tests and a dropdown with the solution code as well as the explanation of the solution code.
- `[name].js` - This is your working file. It has the name of the function and the function is exported. No parameters are passed to the function. That is up to you to add.
- `[name]-run.js` - File to run the code manually. The function is already imported and called with expected parameters.
- `[name]-solution.js` The solution code with heavy commenting. Some challenges have multiple solutions. If you want the solution without comments, look in the `readme.md` file.
- `[name]-test.js` - Jest tests for the solution code. You will need to rename this file to `[name].test.js` to run the tests.

## Learning Modules/Lessons

Some lessons/modules are not challenges, they are more like mini-lessons. I don't just throw you a challenge using a new concept (Trees, Stacks, Bubble Sorts, etc) without explaining it first. I try to explain the concept and then give you a challenge to practice or implement it. So some folders will not have a challenge, just a readme file.

## Running Tests

In order for the Jest tests to run, you need to rename the test file to `[name].test.js`. For example, if you are working on the `hello-world` challenge, you need to rename the `hello-world-test.js` file to `hello-world.test.js`. This is because Jest looks for files with the `.test.js` extension.

Run the command `npm run test` from the root directory and it will run all the tests.

## These Don't Have to be "Challenges"

Some people, such as myself are not great at doing this stuff off the top of their head. Even though most of the code is setup as a challenge, you can certainly just follow along with the course and/or just study the solutions and learn from them.

You can use the tests to see if your code passes, but use the `run` files to run the code manually. This is so that you can experiment, console.log, etc.

## Getting Started

1. Clone the repo
2. Run `npm install`
3. Run `npm run test` to run the tests. Again, you will need to rename the test files and replace the `-test` with `.test` to run the tests.

## Index of Challenges/Lessons

#### 01. Basic Challenges 1

These are mostly challenges that have to do with loops, conditionals, and string manipulation. I do not go over fundamentals like "what is a for loop". You should already know the basics of JavaScript.

1. [Hello World Test Challenge](./01-basic-challenges-1/01-hello-world/readme.md)
2. [Get Sum Test Challenge](./01-basic-challenges-1/02-get-sum/readme.md)
3. [Calculator](./01-basic-challenges-1/03-calculator/readme.md)
4. [Count Occurrences](./01-basic-challenges-1/04-count-occurrences/readme.md)
5. [Find Max Number](./01-basic-challenges-1/05-find-max-number/readme.md)
6. [Title Case](./01-basic-challenges-1/06-title-case/readme.md)
7. [Reverse String](./01-basic-challenges-1/07-reverse-string/readme.md)
8. [Palindrome](./01-basic-challenges-1/08-palindrome/readme.md)
9. [Count Vowels](./01-basic-challenges-1/09-count-vowels/readme.md)
10. [Remove Duplicates](./01-basic-challenges-1/10-remove-duplicates/readme.md)

#### 02. Basic Challenges 2

These are more challenges that have to do with iteration. They are slightly harder than the first set of challenges.

1. [FizzBuzz Array](./02-basic-challenges-2/01-fizzbuzz-array/readme.md)
2. [Array Intersection](./02-basic-challenges-2/02-array-intersection/readme.md)
3. [Display Likes](./02-basic-challenges-2/03-display-likes/readme.md)
4. [Find Missing Number](./02-basic-challenges-2/04-find-missing-number/readme.md)
5. [Find Missing Letter](./02-basic-challenges-2/05-find-missing-letter/readme.md)
6. [Are All Characters Unique](./02-basic-challenges-2/06-are-all-chars-unique/readme.md)
7. [First Non-Repeating Character](./02-basic-challenges-2/07-first-non-repeating/readme.md)
8. [Dice Game Simulation](./02-basic-challenges-2/08-dice-game/readme.md)
9. [Format Phone Number](./02-basic-challenges-2/09-format-phone-number/readme.md)
10. [Validate Email](./02-basic-challenges-2/10-validate-email/readme.md)

#### 03. High Order Array Methods

The next set of challenges/lessons will have to do with high order array methods such as `map`, `filter`, `reduce`, `sort`, etc. Even though most of these can be done with a for loop, I want you to practice using these methods.

1. [Simple Examples](./03-high-order-array-methods/01-simple-examples/readme.md)
2. [Sum Of Even Squares](./03-high-order-array-methods/02-sum-of-even-squares/readme.md)
3. [Calculate Total Sales](./03-high-order-array-methods/03-calculate-total-sales/readme.md)
4. [Highest Scoring Word](./03-high-order-array-methods/04-highest-scoring-word/readme.md)
5. [Valid Anagrams](./03-high-order-array-methods/05-valid-anagrams/readme.md)
6. [HashTag Generator](./03-high-order-array-methods/06-hashtag-generator/readme.md)
7. [Valid IPv4 Address](./03-high-order-array-methods/07-valid-ipv4/readme.md)
8. [Analyze Car Milage](./03-high-order-array-methods/08-analyze-car-milage/readme.md)
9. [Password Validator](./03-high-order-array-methods/09-password-validator/readme.md)
10. [Find Missing Letter Refactor](./03-high-order-array-methods/10-find-missing-letter-refactor/readme.md)

#### 04. Recursion

The next batch of challenges/lessons will have to do with recursion. We will first talk about what recursion is and then we can look at some challenges.

1. [Recursion Intro (Count Down)](./04-recursion/01-count-down/readme.md)
2. [Unwinding (Sum Up To)](./04-recursion/02-unwinding/readme.md)
3. [Reverse String Recursion](./04-recursion/03-reverse-string-recursion/readme.md)
4. [Fibonacci Sequence](./04-recursion/04-fibonacci-sequence/readme.md)
5. [Factorial](./04-recursion/05-factorial/readme.md)
6. [Power](./04-recursion/06-power/readme.md)
7. [Array Sum](./04-recursion/07-array-sum/readme.md)
8. [Number Range](./04-recursion/08-number-range/readme.md)
9. [Flatten Array](./04-recursion/09-flatten-array/readme.md)
10. [Permutations](./04-recursion/10-permutations/readme.md)

#### 05. Complexity

This is more of a learning section than a challenge section. We will talk about Big O notation and how to calculate the time complexity of an algorithm. We will also talk about space complexity and how to calculate that as well. We will talk about the different types of complexity such as constant, linear, quadratic, etc.

1. [What Is Time Complexity?](./05-complexity/01-what-is-time-complexity/readme.md)
2. [Big O Notation](./05-complexity/02-big-o-notation/readme.md)
3. [Constant Time Complexity](./05-complexity/03-constant-time-complexity/readme.md)
4. [Linear Time Complexity](./05-complexity/04-linear-time-complexity/readme.md)
5. [Quadratic Time Complexity](./05-complexity/05-quadratic-time-complexity/readme.md)
6. [Logarithmic Time Complexity](./05-complexity/06-logarithmic-time-complexity/readme.md)
7. [Space Complexity](./05-complexity/07-space-complexity/readme.md)
8. [Max Subarray Quadratic](./05-complexity/08-max-subarray-quadratic/readme.md)
9. [Sliding Window Technique](./05-complexity/09-sliding-window-technique/readme.md)
10. [Space Complexity](./05-complexity/10-max-subarray-linear/readme.md)

#### 06. Hash Tables, Maps & Sets

In this section, we will start to look at `data structures`. We will start with a data structure called a `hash table`. This will include `maps` and `sets`, which are built-in JavaScript data structures that are similar to hash tables. We will also create a custom hash table class and use it in a couple challenges.

1. [What Are Data Structures?](./06-hash-tables-maps-sets/01-what-are-data-structures/readme.md)
2. [Hash Table Intro](./06-hash-tables-maps-sets/02-hash-table-intro/readme.md)
3. [Maps](./06-hash-tables-maps-sets/03-maps/readme.md)
4. [Word Frequency Counter](./06-hash-tables-maps-sets/04-word-frequency-counter/readme.md)
5. [Phone Number Directory](./06-hash-tables-maps-sets/05-phone-number-directory/readme.md)
6. [Anagram Grouping](./06-hash-tables-maps-sets/06-anagram-grouping/readme.md)
7. [Sets](./06-hash-tables-maps-sets/07-sets/readme.md)
8. [Symmetric Difference](./06-hash-tables-maps-sets/08-symmetric-difference/readme.md)
9. [Two Sum](./06-hash-tables-maps-sets/09-two-sum/readme.md)
10. [Longest Consecutive](./06-hash-tables-maps-sets/10-longest-consecutive/readme.md)
11. [Custom Hash Table](./06-hash-tables-maps-sets/11-custom-hash-table/readme.md)
12. [Word Instance Counter](./06-hash-tables-maps-sets/12-word-instance-counter/readme.md)
13. [Add getValues() Method](./06-hash-tables-maps-sets/13-add-get-values-method/readme.md)
14. [Add getValues() Method](./06-hash-tables-maps-sets/14-custom-anagram-grouping/readme.md)

#### 07. Stacks, Queues & Linked Lists

In this section, we will look at working with data structures such as `stacks`, `queues`, and `linked lists`. We will also look at `fast` and `slow` pointers.

1. [What Is A Stack?](./07-stacks-queues-linked-lists/01-what-is-a-stack/readme.md)
2. [Stack Implementation](./07-stacks-queues-linked-lists/02-stack-implementation/readme.md)
3. [Reverse String With Stack](./07-stacks-queues-linked-lists/03-reverse-string-stack/readme.md)
4. [Balanced Parentheses](./07-stacks-queues-linked-lists/04-balanced-parenthesis/readme.md)
5. [What Is A Queue?](./07-stacks-queues-linked-lists/05-what-is-a-queue/readme.md)
6. [Queue Implementation](./07-stacks-queues-linked-lists/06-queue-implementation/readme.md)
7. [Reverse String With Queue](./07-stacks-queues-linked-lists/07-reverse-string-queue/readme.md)
8. [Palindrome With Queue & Stack](./07-stacks-queues-linked-lists/08-palindrome-queue-stack/readme.md)
9. [What Is A Linked List?](./07-stacks-queues-linked-lists/09-what-is-a-linked-list/readme.md)
10. [Linked List Implementation](./07-stacks-queues-linked-lists/10-linked-list-implementation/readme.md)
11. [Reverse String With Linked List](./07-stacks-queues-linked-lists/11-reverse-string-linked-list/readme.md)
12. [Fast & Slow Pointers](./07-stacks-queues-linked-lists/12-fast-slow-pointers/readme.md)
13. [Find Middle](./07-stacks-queues-linked-lists/13-find-middle/readme.md)
14. [What Is A Doubly Linked List?](./07-stacks-queues-linked-lists/14-what-is-a-doubly-linked-list/readme.md)
15. [Doubly Linked List Implementation](./07-stacks-queues-linked-lists/15-doubly-linked-list-implementation/readme.md)
16. [Find Pair Sum](./07-stacks-queues-linked-lists/16-find-pair-sum/readme.md)

#### 08. Binary Trees & Binary Search Trees & Graphs

In this section, we will look at `trees` and `graphs`. We will start with `binary trees` and `binary search trees`. We will also look at `graphs` and `graph traversal`.

1. [What Is A Tree?](./08-binary-trees-graphs/01-what-is-a-tree/readme.md)
2. [Tree Node Class](./08-binary-trees-graphs/02-tree-node-class/readme.md)
3. [Depth First Traversal](./08-binary-trees-graphs/03-depth-first-traversal/readme.md)
4. [Depth First Traversal Recursive](./08-binary-trees-graphs/04-depth-first-traversal-recursive/readme.md)
5. [Breadth First Traversal](./08-binary-trees-graphs/05-breadth-first-traversal/readme.md)
6. [Maximum Depth](./08-binary-trees-graphs/06-maximum-depth/readme.md)
7. [What Is A Binary Search Tree?](./08-binary-trees-graphs/07-what-is-a-binary-search-tree/readme.md)
8. [Binary Search Tree Implementation](./08-binary-trees-graphs/08-binary-search-tree-implementation/readme.md)
9. [Validate BST](./08-binary-trees-graphs/09-validate-bst/readme.md)
10. [What is a Graph?](./08-binary-trees-graphs/10-what-is-a-graph/readme.md)
11. [Adjacency Matrix & Adjacency List](./08-binary-trees-graphs/11-adjacency-matrix-adjacency-list/readme.md)
12. [Graph Implementation](./08-binary-trees-graphs/12-graph-implementation/readme.md)
13. [Graph Traversal](./08-binary-trees-graphs/13-graph-traversal/readme.md)
14. [Graph Depth First Traversal](./08-binary-trees-graphs/14-graph-depth-first-traversal/readme.md)
15. [Graph Breadth First Traversal](./08-binary-trees-graphs/15-graph-breadth-first-traversal/readme.md)

#### 09. Sorting Algorithms

In this section, we will get into sorting algorithms. We will start with `bubble sort`, which is very popular in interviews. We will also look at `selection sort`, `insertion sort`, `merge sort`, and `quick sort`.

1. [What Are Sorting Algorithms?](./09-sorting-algorithms/01-what-are-sorting-algorithms/readme.md)
2. [Bubble Sort Algorithm](./09-sorting-algorithms/02-bubble-sort-algorithm/readme.md)
3. [Bubble Sort Implementation](./09-sorting-algorithms/03-bubble-sort-implementation/readme.md)
4. [Insertion Sort Algorithm](./09-sorting-algorithms/04-insertion-sort-algorithm/readme.md)
5. [Insertion Sort Implementation](./09-sorting-algorithms/05-insertion-sort-implementation/readme.md)
6. [Selection Sort Algorithm](./09-sorting-algorithms/06-selection-sort-algorithm/readme.md)
7. [Selection Sort Implementation](./09-sorting-algorithms/07-selection-sort-implementation/readme.md)
8. [Merge Sort Algorithm](./09-sorting-algorithms/08-merge-sort-algorithm/readme.md)
9. [Merge Sort Implementation](./09-sorting-algorithms/09-merge-sort-implementation/readme.md)
10. [Quick Sort Algorithm](./09-sorting-algorithms/10-quick-sort-algorithm/readme.md)
11. [Quick Sort Implementation](./09-sorting-algorithms/11-quick-sort-implementation/readme.md)
