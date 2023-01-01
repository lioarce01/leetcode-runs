function ListNode(val, next) {
	this.val = val === undefined ? 0 : val
	this.next = next === undefined ? null : next

	var removeNthFromEnd = function (head, n) {
		let slow = head //slow pointer to loop over elements
		let fast = head //fast pointer to loop over elements + 1
		let i = 0

		while (i < n) {
			//while i < n (removed element)
			fast = fast.next //fast pointer go to next element
			i++
		}

		if (!fast) {
			//if there is no fast pointer just return next element
			return head.next
		}

		while (fast.next) {
			slow = slow.next //while we have a fast pointer, slow pointer goes to next element
			fast = fast.next //fast pointer goes to the next element of slow
		}

		slow.next = slow.next.next //skip the nth element from the list

		return head //return the list without the skipped element
	}
	console.log(removeNthFromEnd([1, 2, 3, 4, 5], 2))
}
