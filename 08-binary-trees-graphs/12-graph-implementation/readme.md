# Graph Implementation

We are now going to create a graph class in JavaScript. Again, you can do this in any language you want. We will use an adjacency list in the form of an object.

### Constructor

```JavaScript
class Graph {
  constructor() {
    this.adjacencyList = {};
  }
}
```

### `addVertex` Method

We will have a method called `addVertex` that takes a name of a vertex as a parameter. We will set the adjacency list at that vertex to be an empty array.

```JavaScript
addVertex(vertex) {
  this.adjacencyList[vertex] = [];
}
```

### `addEdge` Method

We will also have a method called `addEdge` that takes two vertices as parameters. We will find in the adjacency list the key of vertex1 and push vertex2 to the array. Then we will find in the adjacency list the key of vertex2 and push vertex1 to the array.

```JavaScript
addEdge(vertex1, vertex2) {
  this.adjacencyList[vertex1].push(vertex2);
  this.adjacencyList[vertex2].push(vertex1);
}
```

### `printAdjacencyList` Method

Let's create a method to give us a visual representation of our adjacency list so that we can see all of the vertices and their edges/connections.

```JS
printAdjacencyList() {
    for (const vertex in this.adjacencyList) {
      console.log(`${vertex} -> ${this.adjacencyList[vertex].join(', ')}`);
    }
  }
```

Let's try adding some vertices and edges.

```JS
g.addVertex('Tokyo');
g.addVertex('Dallas');
g.addVertex('Aspen');

g.addEdge('Tokyo', 'Dallas');
g.addEdge('Dallas', 'Aspen');
g.addEdge('Aspen', 'Tokyo');

g.printAdjacencyList();
```

When you run you should see something like this:

```text
Tokyo -> Dallas, Aspen
Dallas -> Tokyo, Aspen
Aspen -> Dallas, Tokyo
```

### `removeEdge` Method

We will also have a method called `removeEdge` that takes two vertices as parameters. We will reassign the key of vertex1 to be an array that does not contain vertex2. We will reassign the key of vertex2 to be an array that does not contain vertex1.

```JavaScript
removeEdge(vertex1, vertex2) {
  this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
    (v) => v !== vertex2
  );
  this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
    (v) => v !== vertex1
  );
}
```

### `removeVertex` Method

We will also have a method called `removeVertex` that takes a vertex as a parameter. We will loop as long as there are any other vertices in the adjacency list for that vertex. Inside the loop, we will call `removeEdge` and pass in the vertex we are removing and any values in the adjacency list for that vertex. Then we will delete the key in the adjacency list for that vertex.

```JavaScript
removeVertex(vertex) {
  while (this.adjacencyList[vertex].length) {
    const adjacentVertex = this.adjacencyList[vertex].pop();
    this.removeEdge(vertex, adjacentVertex);
  }
  delete this.adjacencyList[vertex];
}
```

## Try It Out

Let's test out our graph class.

```JavaScript
g.addVertex('Tokyo');
g.addVertex('Dallas');
g.addVertex('Aspen');
g.addEdge('Tokyo', 'Dallas');
g.addEdge('Dallas', 'Aspen');
g.addEdge('Tokyo', 'Aspen');

g.removeEdge('Dallas', 'Aspen');
g.removeVertex('Aspen');

g.printAdjacencyList();
```

We created a graph with three vertices. We added edges between Tokyo and Dallas, Dallas and Aspen, and Tokyo and Aspen. We removed the edge between Dallas and Aspen. We removed the vertex Aspen.

You should see:

```text
Tokyo -> Dallas
Dallas -> Tokyo
```

## Test Cases

```JavaScript
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
```

In the next lesson, we will look at graph traversal.
