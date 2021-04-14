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

function sortList(head: ListNode | null): ListNode | null {
    if (!head || !head.next) return head;
    const mid = getMid(head);
    return merge(sortList(head), sortList(mid));
};

const getMid = (head: ListNode | null) => {
    let mid;
    while (head?.next) {
        mid = mid?.next || head;
        head = head.next.next;
    }
    const ret = mid.next;
    mid.next = null;
    return ret;
}

const merge = (left: ListNode | null, right: ListNode | null) => {
    const dummy = new ListNode();
    let head = dummy;
    while (left && right)
        if (left.val < right.val) {
            head.next = left;
            left = left.next;
            head = head.next;
        } else {
            head.next = right;
            right = right.next;
            head = head.next;

        }

    head.next = left || right;
    return dummy.next;
}
