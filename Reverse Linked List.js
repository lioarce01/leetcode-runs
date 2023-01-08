function ListNode(val, next) {
	this.val = val === undefined ? 0 : val
	this.next = next === undefined ? null : next
}

var reverseList = function (head) {
	let cur = head

	let next = null

	let prev = null

	while (cur) {
		next = cur.next
		cur.next = prev
		prev = cur
		cur = next
	}
	return prev
}

console.log(reverseList([1, 2, 3, 4, 5]))
