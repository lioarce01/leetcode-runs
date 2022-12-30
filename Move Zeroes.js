var moveZeroes = function (nums) {
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] === 0) {
			let temp = nums[i]
			nums.splice(nums.indexOf(temp), 1)
			nums.push(temp)
		}
	}

	return nums
}

console.log(moveZeroes([1, 0, 2, 4, 0, 3, 0, 6]))
