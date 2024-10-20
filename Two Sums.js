var twoSum = function (nums, target) {
  let map = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    let diff = target - num;

    if (map.hasOwnProperty(diff)) {
      return [i, map[diff]];
    }
    map[num] = i;
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
// console.log(twoSum([3, 2, 4], 6));
// console.log(twoSum([3, 3], 6));
