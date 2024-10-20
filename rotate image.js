const rotate = (matrix) => {
  const edgeLength = matrix.length;

  let top = 0;
  let bottom = edgeLength - 1;

  while (top < bottom) {
    for (let col = 0; col < edgeLength; col++) {
      let temp = matrix[top][col];
      matrix[top][col] = matrix[bottom][col];
      matrix[bottom][col] = temp;
    }
    top++;
    bottom--;
  }

  for (let row = 0; row < edgeLength; row++) {
    for (let col = row + 1; col < edgeLength; col++) {
      let temp = matrix[row][col];
      matrix[row][col] = matrix[col][row];
      matrix[col][row] = temp;
    }
  }
};

console.log(
  rotate([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
