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

function sumNumbers(root: TreeNode | null, path = ''): number {
    path += root?.val ?? '';
    if (!root?.left && !root?.right) return Number(path);
    return (root.left ? sumNumbers(root.left, path) : 0) + (root.right ? sumNumbers(root.right, path) : 0);
};
