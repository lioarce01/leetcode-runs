var containsDuplicate = function(nums) {
  let arr = []
  let twice = false

  for(let i = 0; i < nums.length; i++) {
      if(!arr.includes(nums[i])) {
          arr.push(nums[i])
      }
  }

  return nums.length !== arr.length 
};

console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]))