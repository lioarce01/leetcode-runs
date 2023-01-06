var LookForPairs = function (n, ar) {
	const count = {}

	for (const i of ar) {
		if (count.hasOwnProperty(i)) {
			count[i] += 1
		} else {
			count[i] = 1
		}
	}

	let pairs = 0

	for (const key in count) {
		pairs += Math.floor(count[key] / 2)
	}

	return pairs
}

// var LookForPairs = function (n, ar) {
// 	const count = {}

// 	for (const i of ar) {
// 		if (count.hasOwnProperty(i)) {
// 			count[i] += 1
// 		} else {
// 			count[i] = 1
// 		}
// 	}

// 	let pairs = 0

// 	for (const key in count) {
// 		pairs += Math.floor(count[key] / 2)
// 	}

// 	return pairs
// }

console.log(LookForPairs(5, [1, 2, 3, 1, 3]))
console.log(LookForPairs(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]))
