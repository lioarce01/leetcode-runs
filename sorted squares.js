const sortedSquares = (nums) => {
  const n = nums.length;
  const result = new Array(n);
  let left = 0;
  let right = n - 1;
  let position = n - 1;

  while (left <= right) {
    const leftSquare = nums[left] ** 2;
    const rightSquare = nums[right] ** 2;

    if (leftSquare > rightSquare) {
      result[position] = leftSquare;
      left++;
    } else {
      result[position] = rightSquare;
      right--;
    }
    position--;
  }
  return result;
};

console.log(sortedSquares([-4, -1, 0, 3, 10]));
