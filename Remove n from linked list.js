function ListNode(val, next) {
	this.val = val === undefined ? 0 : val
	this.next = next === undefined ? null : next

	var removeNthFromEnd = function (head, n) {
		let slow = head
		let fast = head
		let i = 0

		while (i < n) {
			fast = fast.next
			i++
		}

		if (!fast) {
			return head.next
		}

		while (fast.next) {
			slow = slow.next
			fast = fast.next
		}

		slow.next = slow.next.next
		return head
	}
	console.log(removeNthFromEnd([1, 2, 3, 4, 5], 2))
}
