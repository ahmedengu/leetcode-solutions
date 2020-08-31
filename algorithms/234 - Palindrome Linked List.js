/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    const stack = [];
    let s = head,
        f = head;

    while (f && f.next) {
        stack.push(s.val);
        s = s.next;
        f = f.next.next;
    }

    if (f) stack.push(s.val)

    while (s) {
        if (s.val !== stack.pop()) return false;
        s = s.next;
    }

    return true;
};
