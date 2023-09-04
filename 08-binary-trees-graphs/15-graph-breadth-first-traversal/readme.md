# Challenge: Graph Breadth First Traversal

## Instructions

Write a function called `breadthFirstTraversal` that performs a Breadth First Traversal of a graph starting from a specified vertex and returns an array containing the vertices visited in the order they were traversed. Use the `Queue` class from the previous lessons.

## Function Signature

```js
/**
 * Performs a Breadth First Traversal of a graph.
 * @param {Graph} graph - The graph to traverse.
 * @param {string} startingVertex - The vertex to start the traversal from.
 * @returns {string[]} - The vertices visited in the order they were traversed.
 */
function breadthFirstTraversal(graph: Graph, startingVertex: string): string[];
```

## Example

```js
// Example Graph
// A --- B
// |     |
// |     |
// C --- D
// |     |
// |     |
// E --- F

const graph = new Graph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'D');
graph.addEdge('C', 'E');
graph.addEdge('D', 'F');
graph.addEdge('E', 'F');

const result = breadthFirstTraversal(graph, 'A');

console.log(result);
// [ 'A', 'B', 'C', 'D', 'E', 'F' ]
```

## Hints

- You can use the provided `Queue` class to keep track of the vertices to be visited in a breadth-first order.
- Start by enqueuing the `startingVertex` onto the queue and mark it as visited.
- Use a visited set to keep track of the visited vertices to avoid enqueuing the same vertex multiple times.
- In the traversal loop, dequeue a vertex from the queue, add it to the result array, and enqueue all its neighbors that have not been visited yet.

## Solutions

<details>
  <summary>Click For Solution</summary>

```js
function breadthFirstTraversal(graph, startingVertex) {
  const visited = new Set();
  const result = [];
  const queue = new Queue();

  queue.enqueue(startingVertex);
  visited.add(startingVertex);

  while (!queue.isEmpty()) {
    const currentVertex = queue.dequeue();
    result.push(currentVertex);

    for (const neighbor of graph.adjacencyList[currentVertex]) {
      if (!visited.has(neighbor)) {
        queue.enqueue(neighbor);
        visited.add(neighbor);
      }
    }
  }

  return result;
}
```

### Explanation

- Create a `visited` set to keep track of the visited vertices, a `result` array to store the vertices visited in the order they were traversed, and a `queue` to keep track of the vertices to be visited in a breadth-first order.
- Enqueue the `startingVertex` onto the queue and mark it as visited.
- In a loop, dequeue a vertex from the queue, add it to the result array, and enqueue all its neighbors that have not been visited yet.
- Continue this process until the queue becomes empty.
- Return the result array.

</details>

## Test

```js
const Graph = require('./graph');
const Queue = require('./queue');
const breadthFirstTraversal = require('./graph-breadth-first');

describe('Breadth First Traversal', () => {
  it('should traverse a graph in breadth-first order', () => {
    const graph = new Graph();

    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addVertex('D');
    graph.addVertex('E');
    graph.addVertex('F');
    graph.addVertex('G');

    graph.addEdge('A', 'B');
    graph.addEdge('A', 'C');
    graph.addEdge('B', 'D');
    graph.addEdge('B', 'E');
    graph.addEdge('C', 'F');
    graph.addEdge('C', 'G');

    const result = breadthFirstTraversal(graph, 'A');
    expect(result).toEqual(['A', 'B', 'C', 'D', 'E', 'F', 'G']);
  });

  it('should handle disconnected components in the graph', () => {
    const graph = new Graph();

    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addVertex('D');

    graph.addEdge('A', 'B');
    graph.addEdge('C', 'D');

    const result = breadthFirstTraversal(graph, 'A');
    expect(result).toEqual(['A', 'B']);
  });
});

```
