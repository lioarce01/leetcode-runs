var majorityElement = function (nums) {
	if (nums.length === 0) return null
	if (nums.length === 1) return nums[0]

	let count = {}

	for (let num of nums) {
		if (count[num]) {
			count[num]++
		} else {
			count[num] = 1
		}

		if (count[num] > Math.floor(nums.length / 2)) return num
	}

	return null
}

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]))
