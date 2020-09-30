/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let single = head, double = head;
    while (double && double.next) {
        single = single.next;
        double = double.next;
        double = double.next;
    }

    return single;
};
