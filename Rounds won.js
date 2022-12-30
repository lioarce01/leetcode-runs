export function rounds_won(results) {
	//Insert your code here
	let playerOne = 0
	let playerTwo = 0

	results.forEach((result) => {
		if (result === 1) playerOne++
		else playerTwo++
	})

	return playerOne > playerTwo ? playerOne : playerTwo
}

console.log(rounds_won([2, 1, 2]))
