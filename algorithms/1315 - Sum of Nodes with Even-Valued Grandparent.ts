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

function sumEvenGrandparent(root: TreeNode | null, p = 1, gp = 1): number {
    if (!root) return 0;
    const val = (gp % 2 === 0) ? root.val : 0;
    return val + sumEvenGrandparent(root.left, root.val, p) + sumEvenGrandparent(root.right, root.val, p);
};
