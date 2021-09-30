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

function largestValues(root: TreeNode | null, d = 0, arr = []): number[] {
    if (!root) return arr;
    arr[d] = arr[d] > root.val ? arr[d] : root.val;
    largestValues(root.left, d + 1, arr);
    largestValues(root.right, d + 1, arr);
    return arr;
};
