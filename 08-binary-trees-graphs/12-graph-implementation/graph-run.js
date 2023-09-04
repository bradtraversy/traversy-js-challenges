const Graph = require('./graph');

// Create a graph:
//    Tokyo
//    /   \
// Dallas - Aspen

const g = new Graph();
g.addVertex('Tokyo');
g.addVertex('Dallas');
g.addVertex('Aspen');
g.addEdge('Tokyo', 'Dallas');
g.addEdge('Dallas', 'Aspen');
g.addEdge('Aspen', 'Tokyo');

console.log(g);
