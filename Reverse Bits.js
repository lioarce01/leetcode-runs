var reverseBits = function (n) {
	let res = n.toString(2).split("")

	while (res.length < 32) res.unshift("0")

	return parseInt(res.reverse().join(""), 2)
}

console.log(reverseBits("00000010100101000001111010011100"))
