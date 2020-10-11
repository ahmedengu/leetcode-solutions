/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    iter(headA);
    return iter(headB);
};

const iter = (head) => {
    while (head) {
        if (head.visited) return head;
        head.visited = true;
        head = head.next;
    }
    return null;
}
