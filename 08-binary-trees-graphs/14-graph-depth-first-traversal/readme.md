# Challenge: Graph Depth-First Traversal

## Instructions

Write a function called `depthFirstTraversal` that performs a Depth First Traversal of a graph starting from a specified vertex and returns an array containing the vertices visited in the order they were traversed. Use the `Graph` class as well as the `Stack` class from the previous lessons.

## Function Signature

```js
/**
 * Returns an array containing the vertices visited in the order they were traversed.
 * @param {Graph} graph - The graph to traverse.
 * @param {string} startingVertex - The vertex to start the traversal from.
 * @returns {string[]} - The vertices visited in the order they were traversed.
 */
function depthFirstTraversal(graph: Graph, startingVertex: string): string[];
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

// Add vertices
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

// Add edges
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'D');
graph.addEdge('C', 'E');
graph.addEdge('D', 'F');
graph.addEdge('E', 'F');

depthFirstTraversal(g, 'A');
// ['A', 'C', 'E', 'F', 'D', 'B'];
```

## Hints

- The `Graph` class has an `adjacencyList` property that stores the vertices and their neighbors.
- The `Stack` class has a `push` method that adds an element to the top of the stack and a `pop` method that removes the top element from the stack.
- Use a results array to store the vertices visited in the order they were traversed

## Solutions

<details>
  <summary>Click For Solution</summary>

#### Using an adjacency list:

```js
function depthFirstTraversal(graph, startingVertex) {
  if (!graph.adjacencyList[startingVertex]) {
    return [];
  }

  const visited = {};
  const stack = [startingVertex];
  const result = [];

  visited[startingVertex] = true;

  while (stack.length) {
    const currentVertex = stack.pop();
    result.push(currentVertex);

    graph.adjacencyList[currentVertex].forEach((neighbor) => {
      if (!visited[neighbor]) {
        visited[neighbor] = true;
        stack.push(neighbor);
      }
    });
  }

  return result;
}
```

### Explanation

- Check if the starting vertex exists in the graph's adjacency list. If it doesn't, return an empty array.
- Initialize an empty object called `visited` to store the vertices visited.
- Initialize a stack with the starting vertex.
- Initialize an empty array called `result` to store the vertices visited in the order they were traversed.
- Mark the starting vertex as visited.
- While the stack is not empty:
  - Pop a vertex from the stack and push it to the `result` array.
  - For each neighbor of the vertex:
    - If the neighbor has not been visited:
      - Mark the neighbor as visited.
      - Push the neighbor to the stack.
- Return the `result` array.

</details>

## Test Cases

```js
describe('Graph Depth-First Traversal', () => {
  test('should perform depth-first traversal correctly', () => {
    const g = new Graph();
    g.addVertex('A');
    g.addVertex('B');
    g.addVertex('C');
    g.addVertex('D');
    g.addVertex('E');
    g.addVertex('F');
    g.addVertex('G');

    g.addEdge('A', 'B');
    g.addEdge('A', 'C');
    g.addEdge('B', 'D');
    g.addEdge('C', 'E');
    g.addEdge('D', 'E');
    g.addEdge('D', 'F');
    g.addEdge('E', 'G');
    g.addEdge('F', 'G');

    const result = depthFirstTraversal(g, 'A').sort();
    const expected = ['A', 'B', 'C', 'D', 'E', 'F', 'G'].sort();
    expect(result).toEqual(expected);
  });

  test('should handle loops correctly', () => {
    const g = new Graph();
    g.addVertex('X');
    g.addVertex('Y');
    g.addVertex('Z');

    g.addEdge('X', 'Y');
    g.addEdge('Y', 'Z');
    g.addEdge('Z', 'X');

    const result = depthFirstTraversal(g, 'X').sort();
    const expected = ['X', 'Y', 'Z'].sort();
    expect(result).toEqual(expected);
  });

  test('should return an empty array for an empty graph', () => {
    const g = new Graph();

    expect(depthFirstTraversal(g, 'A')).toEqual([]);
  });
});
```
