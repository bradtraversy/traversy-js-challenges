class Graph {
  constructor() {
    // The adjacency list.
    this.adjacencyList = {};
  }

  // Add a vertex to the graph.
  addVertex(vertex) {
    // Add the vertex to the adjacency list.
    this.adjacencyList[vertex] = [];
  }

  // Add an edge between vertex1 and vertex2.
  addEdge(vertex1, vertex2) {
    // Push vertex2 to the adjacency list of vertex1.
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  // Remove an edge between vertex1 and vertex2.
  removeEdge(vertex1, vertex2) {
    // Filter out vertex2 from the adjacency list of vertex1.
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v !== vertex2
    );
    // Filter out vertex1 from the adjacency list of vertex2.
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v !== vertex1
    );
  }

  // Remove a vertex from the graph.
  removeVertex(vertex) {
    // While the adjacency list of vertex is not empty:
    while (this.adjacencyList[vertex].length) {
      // Pop the last element from the adjacency list of vertex.
      const adjacentVertex = this.adjacencyList[vertex].pop();
      // Remove the edge between vertex and adjacentVertex.
      this.removeEdge(vertex, adjacentVertex);
    }
    // Delete the adjacency list of vertex.
    delete this.adjacencyList[vertex];
  }

  // Print the adjacency list
  printAdjacencyList() {
    for (const vertex in this.adjacencyList) {
      console.log(`${vertex} -> ${this.adjacencyList[vertex].join(', ')}`);
    }
  }
}


module.exports = Graph;
