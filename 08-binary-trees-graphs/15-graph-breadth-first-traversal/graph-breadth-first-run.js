const Graph = require('./graph');
const breadthFirstTraversal = require('./graph-breadth-first');

const g = new Graph();
g.addVertex('Tokyo');
g.addVertex('Dallas');
g.addVertex('Aspen');
g.addEdge('Tokyo', 'Dallas');
g.addEdge('Dallas', 'Aspen');
g.addEdge('Tokyo', 'Aspen');
// g.removeEdge('Dallas', 'Aspen');
// g.removeVertex('Aspen');

console.log(breadthFirstTraversal(g, 'Tokyo'));
