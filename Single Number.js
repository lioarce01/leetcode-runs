var singleNumber = function (nums) {
	nums.sort()

	for (let i = 0; i < nums.length; i++) {
		if (nums[i] !== nums[i + 1] && nums[i] !== nums[i - 1]) {
			return nums[i]
		}
	}
	return null
}

console.log(singleNumber([4, 1, 2, 1, 2]))
