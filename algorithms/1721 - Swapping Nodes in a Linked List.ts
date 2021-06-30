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

function swapNodes(head: ListNode | null, k: number): ListNode | null {
    const arr = getArr(head);
    ([arr[arr.length - k], arr[k - 1]] = [arr[k - 1], arr[arr.length - k]]);
    return getList(arr);
};

const getArr = (head: ListNode): number[] => {
    const arr = [];
    for (; head;) {
        arr.push(head.val);
        head = head.next;
    }
    return arr;
};

const getList = (arr: number[]): ListNode => {
    const head = new ListNode();
    let node = head;

    for (const num of arr) {
        node.next = new ListNode(num);
        node = node.next;
    }

    return head.next;
};
