const findColumnWidth = (grid) => {
  const findlen = (n) => n.toString().length;
  const arr = [];
  for (let i = 0; i < grid[0].length; i++) {
    let max = 0;
    for (let j = 0; j < grid.length; j++) {
      const len = findlen(grid[j][i]);
      if (len > max) max = len;
    }
    arr.push(max);
  }
  return arr;
};

console.log(
  findColumnWidth([
    [-15, 1, 3],
    [15, 7, 12],
    [5, 6, -2],
  ])
);
