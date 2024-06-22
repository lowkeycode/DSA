class AdjacentGraph {
  constructor() {
    this.numNodes = 0;
    this.adjacentList = {}
  }

  /**
   * 
   * @param {number} node 
   */
  addVertex(node) {
    if (this.adjacentList[node]) return;

    this.adjacentList[node] = [];
    this.showConnections();
  }

  /**
   * 
   * @param {number} node1 
   * @param {number} node2 
   */
  addEdge(node1, node2) {
    if (!this.adjacentList[node1] || !this.adjacentList[node2]) return;

    if (this.adjacentList[node1].includes(node2)) return;

    this.adjacentList[node1] = [...this.adjacentList[node1], node2].sort((a, b) => a > b);

    this.adjacentList[node2] = [...this.adjacentList[node2], node1].sort((a, b) => a > b);

    this.showConnections();
  }

  showConnections() {
    console.log(this.adjacentList);
  }
}

const adjacentGraph = new AdjacentGraph();


adjacentGraph.addVertex(5);
adjacentGraph.addVertex(20);
adjacentGraph.addVertex(66);
adjacentGraph.addVertex(32);
adjacentGraph.addVertex(78);

adjacentGraph.addEdge(5, 20);
adjacentGraph.addEdge(20, 66);
adjacentGraph.addEdge(66, 32);
adjacentGraph.addEdge(32, 78);
adjacentGraph.addEdge(78, 20);