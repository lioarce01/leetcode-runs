var isPalindrome = function (s) {
	const clean = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()

	return clean === clean.split("").reverse().join("")
}

console.log(isPalindrome("A man, a plan, a canal: Panama"))
console.log(isPalindrome("race a car"))
console.log(isPalindrome(""))
