const rowAndMaximumOnes = (mat) => {
  let maxOnes = 0;
  let rowIndex = 0;

  mat.forEach((row, i) => {
    let count = 0;

    row.forEach((n) => {
      if (n === 1) count++;
    });

    if (count > maxOnes) {
      maxOnes = count;
      rowIndex = i;
    }
  });

  return [rowIndex, maxOnes];
};

console.log(
  rowAndMaximumOnes([
    [0, 0],
    [1, 1],
    [0, 0],
  ])
); //output [ 1, 2 ]
