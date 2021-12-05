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

function deleteMiddle(head: ListNode | null): ListNode | null {
    let length = 0;
    let node = head;
    while (node) {
        node = node.next;
        length++;
    }
    if (length === 1) return null;
    node = head;
    length = Math.floor(length / 2);
    while (--length) node = node.next;
    node.next = node.next.next;
    return head;
};
