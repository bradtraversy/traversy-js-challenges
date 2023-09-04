const Stack = require('./stack');

function depthFirstTraversal(graph, startingVertex) {
  // If the starting vertex is not in the graph, return an empty array.
  if (!graph.adjacencyList[startingVertex]) {
    return [];
  }

  //  Create an empty object to store visited vertices.
  const visited = {};
  // Create a new Stack instance.
  const stack = new Stack();
  // Create an empty array to store the result.
  const result = [];

  // Push the starting vertex onto the stack.
  stack.push(startingVertex);

  // Mark the starting vertex as visited.
  visited[startingVertex] = true;

  // While the stack is not empty:
  while (!stack.isEmpty()) {
    // Pop a vertex from the stack.
    const currentVertex = stack.pop();
    // Add the vertex to the result.
    result.push(currentVertex);

    // For each neighbor of the vertex:
    graph.adjacencyList[currentVertex].forEach((neighbor) => {
      // If the neighbor has not been visited:
      if (!visited[neighbor]) {
        // Mark it as visited.
        visited[neighbor] = true;
        // Push it onto the stack.
        stack.push(neighbor);
      }
    });
  }

  // Return the result.
  return result;
}

module.exports = depthFirstTraversal;
