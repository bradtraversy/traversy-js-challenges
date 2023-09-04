const Graph = require('./graph');
const depthFirstTraversal = require('./graph-depth-first');

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
