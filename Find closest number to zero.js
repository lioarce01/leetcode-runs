const findClosestNumber = (nums) => {
  let closest = nums[0];

  nums.forEach((num) => {
    if (Math.abs(num) < Math.abs(closest)) {
      closest = num;
    }

    if (Math.abs(num) === Math.abs(closest)) {
      closest = Math.max(num, closest);
    }
  });

  return closest;
};

console.log(findClosestNumber([-4, -2, 1, 4, 8]));
console.log(findClosestNumber([2, -1, 1]));
