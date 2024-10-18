const validPath = (n, edges, source, destination) => {
  const graph = new Map();

  for (const [a, b] of edges) {
    if (!graph.has(a)) graph.set(a, []);
    if (!graph.has(b)) graph.set(b, []);
    graph.get(a).push(b);
    graph.get(b).push(a);
  }

  const visited = new Set();

  const dfs = (node) => {
    if (node === destination) return true;
    if (visited.has(node)) return false;
    visited.add(node);
    for (const neighbor of graph.get(node)) {
      if (dfs(neighbor)) return true;
    }
    return false;
  };

  return dfs(source);
};

console.log(
  validPath(
    6,
    [
      [0, 1],
      [0, 2],
      [3, 5],
      [5, 4],
      [4, 3],
    ],
    0,
    5
  )
);

console.log(
  validPath(
    3,
    [
      [0, 1],
      [1, 2],
      [2, 0],
    ],
    0,
    2
  )
);
