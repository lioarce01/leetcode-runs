function binarySearch(array, target) {
	let left = 0
	let right = array.length - 1

	while (left <= right) {
		let mid = left + Math.floor((right - left) / 2)

		if (array[mid] === target) {
			return mid
		} else if (array[mid] < target) {
			left = mid + 1
		} else {
			right = mid - 1
		}
	}

	return -1
}

// Example usage
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(binarySearch(array, 5))
