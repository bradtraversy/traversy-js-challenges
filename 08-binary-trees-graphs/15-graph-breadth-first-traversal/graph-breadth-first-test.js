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
