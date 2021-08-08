/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function kthSmallest(root: TreeNode | null, k: number): number {
    return getArr(root)[k - 1];
};

const getArr = (node: TreeNode, arr = []) => {
    if (!node) return arr;
    getArr(node.left, arr);
    arr.push(node.val);
    getArr(node.right, arr);
    return arr;
}
