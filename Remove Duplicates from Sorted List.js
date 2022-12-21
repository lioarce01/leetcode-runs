class SortedList {
  constructor() {
    head = null;
    val = null;
    next = null;
  }

  deleteDuplicates = function(head) {
    if(head === null || head.next === null) return head;
  
    head.next = deleteDuplicates(head.next)
  
    return head.val === head.next.val ? head.next : head;
  };
}
