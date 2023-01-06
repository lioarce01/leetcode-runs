var LookUpIsolated = function (numbers) {
	const oddIsolated = numbers.slice(0, 3).filter((n) => n % 2 === 0).length > 1

	return numbers.find((num) => (oddIsolated ? num % 2 === 0 : num % 2))
}

console.log(LookUpIsolated([1, 2, 3]))
console.log(LookUpIsolated([1, 7, 3, 5, 9, 11, 33, 44, 45]))
console.log(LookUpIsolated([2, 4, 6, 8, 10, 12, 14, 1]))
