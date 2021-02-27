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
function isSymmetric(t1: TreeNode | null, t2 = t1): boolean {
    if (!t1 || !t2) return t1 === t2;
    return t1.val === t2.val && isSymmetric(t1.right, t2.left) && isSymmetric(t1.left, t2.right);
};
