const Graph = require('./graph');

describe('Graph', () => {
  let g;

  beforeEach(() => {
    g = new Graph();
  });

  test('Should add vertices to the graph', () => {
    g.addVertex('Tokyo');
    g.addVertex('Dallas');
    g.addVertex('Aspen');

    expect(g.adjacencyList).toEqual({
      Tokyo: [],
      Dallas: [],
      Aspen: [],
    });
  });

  test('Should add edges between vertices in the graph', () => {
    g.addVertex('Tokyo');
    g.addVertex('Dallas');
    g.addVertex('Aspen');
    g.addEdge('Tokyo', 'Dallas');
    g.addEdge('Dallas', 'Aspen');

    expect(g.adjacencyList).toEqual({
      Tokyo: ['Dallas'],
      Dallas: ['Tokyo', 'Aspen'],
      Aspen: ['Dallas'],
    });
  });

  test('Should remove edges between vertices in the graph', () => {
    g.addVertex('Tokyo');
    g.addVertex('Dallas');
    g.addVertex('Aspen');
    g.addEdge('Tokyo', 'Dallas');
    g.addEdge('Dallas', 'Aspen');
    g.removeEdge('Dallas', 'Aspen');

    expect(g.adjacencyList).toEqual({
      Tokyo: ['Dallas'],
      Dallas: ['Tokyo'],
      Aspen: [],
    });
  });

  test('Should remove vertices and associated edges from the graph', () => {
    g.addVertex('Tokyo');
    g.addVertex('Dallas');
    g.addVertex('Aspen');
    g.addEdge('Tokyo', 'Dallas');
    g.addEdge('Dallas', 'Aspen');
    g.removeVertex('Aspen');

    expect(g.adjacencyList).toEqual({
      Tokyo: ['Dallas'],
      Dallas: ['Tokyo'],
    });
  });
});
