var productExceptSelf = function (nums) {
	let output = []
	let prefix = 1
	let postfix = 1

	for (let i = nums.length - 1; i >= 0; i--) {
		output[i] = postfix
		postfix *= nums[i]
	}

	for (let j = 0; j < nums.length; j++) {
		output[j] *= prefix
		prefix *= nums[j]
	}

	return output
}

console.log(productExceptSelf([1, 2, 3, 4]))
