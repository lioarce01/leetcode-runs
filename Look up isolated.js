var LookUpIsolated = function (numbers) {
	if (!numbers.length) return -1
	if (numbers.length === 1) return numbers[0]

	const oddIsolated = numbers.slice(0, 3).filter((n) => n % 2 === 0).length > 1

	return numbers.find((num) => (oddIsolated ? num % 2 === 0 : num % 2))
}

console.log(LookUpIsolated([1, 2, 3]))
console.log(LookUpIsolated([]))
console.log(LookUpIsolated([1, 2, 3]))
console.log(LookUpIsolated([1]))