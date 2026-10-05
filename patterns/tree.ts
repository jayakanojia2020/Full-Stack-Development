// its basically a map of string and array of string
const graph: Map<string, string[]> = new Map();
graph.set('A', ['B','C']);
graph.set('B', ['A','D']);
graph.set('C', ['A','D']);
graph.set('D', ['B','C']);
console.log(graph);