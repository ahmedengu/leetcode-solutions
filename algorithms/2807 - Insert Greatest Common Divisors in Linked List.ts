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

function insertGreatestCommonDivisors(head: ListNode | null): ListNode | null {
    const list = head;
    let next = head.next;
    while (next) {
        const gcd = getGCD(head.val, next.val);
        head.next = new ListNode(gcd, next);
        head = next;
        next = next.next;
    }
    return list;
};

const getGCD = (num1: number, num2: number): number => {
    for (let i = Math.min(num1, num2); i > 0; i--)
        if (num1 % i === 0 && num2 % i === 0) return i;
}
