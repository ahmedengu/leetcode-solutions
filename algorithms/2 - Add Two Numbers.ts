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

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let carry = 0;
    let node = new ListNode();
    const dummy = node;
    while (l1 || l2) {
        const sum = (l1?.val || 0) + (l2?.val || 0) + carry;
        node.next = new ListNode(sum % 10);
        carry = parseInt(sum / 10 + '');
        node = node.next;
        l1 = l1?.next;
        l2 = l2?.next;
    }
    if (carry) node.next = new ListNode(carry);
    return dummy.next;
};
