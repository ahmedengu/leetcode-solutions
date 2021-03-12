/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function deleteDuplicates(head: ListNode | null): ListNode | null {
    const dummy = new ListNode(0, head);
    let last = dummy;

    while (head) {
        if (head.val === head.next?.val) {
            while (head.val === head.next?.val) head = head.next;
            last.next = head.next;
        } else {
            last = head;
        }
        head = head.next;
    }

    return dummy.next;
};
