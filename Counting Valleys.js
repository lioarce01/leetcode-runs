var CountingValleys = function (steps, path) {
	let seaLevel = 0
	let valley = 0

	for (let i = 0; i < path.length; i++) {
		if (path[i] === "U") {
			seaLevel++
		} else {
			seaLevel--
		}
		console.log(seaLevel)

		// si acaba de cambiar el sealevel a -1 y el path[i] fue D, quiere decir que bajo recien de un valle y se suma +1 al contador
		if (seaLevel === -1 && path[i] === "D") {
			valley++
		}
	}

	return valley
}

// console.log(CountingValleys(8, "UDDDUDUU"))
console.log(CountingValleys(12, "DDUUDDUDUUUD"))

// _    _      _/\
//  \  / \    /
//   \/   \/\/
