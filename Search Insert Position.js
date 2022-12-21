var searchInsert = function(nums, target) {

  for (let i = 0; i < nums.length; i++) {
    if(nums[i] === target) return nums.indexOf(nums[i])
    
    if(!nums.includes(target)) {
      nums.push(target)
      nums.sort((a, b) => a - b)
      console.log(nums)
      return nums.indexOf(target)
    }
  }
};

console.log(searchInsert([1,3,5,6], 2))
console.log(searchInsert([1,3,5,6], 7))
console.log(searchInsert([1,3,5,6], 1))
console.log(searchInsert([3,5,7,9,10], 8))