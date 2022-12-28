var rotate = function (nums, k) {
	let tmp = 0
	const len = nums.length
	k %= len

	for (let i = 0; i < k; i++) {
		tmp = nums.pop()
		nums.unshift(tmp)
	}
	return nums
}

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3))
