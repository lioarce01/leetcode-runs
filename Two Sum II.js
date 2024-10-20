var twoSum = function (numbers, target) {
  let i = 1;
  let j = numbers.length;

  while (i < j) {
    const sum = numbers[i - 1] + numbers[j - 1];
    if (sum === target) {
      return [i, j];
    } else if (sum < target) {
      i++;
    } else {
      j--;
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
