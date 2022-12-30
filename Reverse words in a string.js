var reverseWords = function (s) {
	return s
		.split(" ")
		.map((w) => w.split("").reverse().join(""))
		.join(" ")
}

console.log(reverseWords("Let's take LeetCode contest"))
