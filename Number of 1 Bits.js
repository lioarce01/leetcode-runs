var hammingWeight = function (n) {

  return n
		.toString(2)
		.split("")
		.filter((num) => num != 0).length
}

console.log(hammingWeight(00000000000000000000000000001011))
