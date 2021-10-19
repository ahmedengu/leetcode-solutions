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

function levelOrder(root: TreeNode | null, lvl = 0, arr = []): number[][] {
    if (!root) return arr;
    (arr[lvl] || (arr[lvl] = [])).push(root.val);
    levelOrder(root.left, lvl + 1, arr);
    levelOrder(root.right, lvl + 1, arr);
    return arr;
};
