const isBipartite = (graph) => {
  const queue = [];
  const colors = new Array(graph.length).fill(0);

  //solve with bfs
  const bfs = (node) => {
    const queue = [node];
    colors[node] = 1;
    while (queue.length) {
      const current = queue.shift();
      for (const neighbor of graph[current]) {
        if (colors[neighbor] === 0) {
          colors[neighbor] = 3 - colors[current];
          queue.push(neighbor);
        } else if (colors[neighbor] === colors[current]) return false;
      }
    }
    return true;
  };

  for (let i = 0; i < graph.length; i++) {
    if (colors[i] === 0) {
      if (!bfs(i)) return false;
    }
  }
  return true;
};

console.log(
  isBipartite([
    [1, 3],
    [0, 2],
    [1, 3],
    [0, 2],
  ])
);
