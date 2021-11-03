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

function findBottomLeftValue(root: TreeNode | null, d = 0, lefts = [root.val]): number {
    if (!root) return lefts[lefts.length - 1];
    findBottomLeftValue(root.left, d + 1, lefts);
    if (d >= lefts.length) lefts[d] = root.val;
    findBottomLeftValue(root.right, d + 1, lefts);
    return lefts[lefts.length - 1];
};
