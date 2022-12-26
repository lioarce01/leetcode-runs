var groupAnagrams = function (strs) {
	const groups = {}
	for (let s of strs) {
		let key = s.split("").sort().join("")
		groups[key] = [...(groups[key] || []), s]
	}
	return Object.values(groups)
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))
