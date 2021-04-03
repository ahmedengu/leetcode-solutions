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

function findSecondMinimumValue(root: TreeNode | null): number {
    let min = root.val;
    let min1 = Infinity;

    (function dfs(root: TreeNode | null) {
        if (root?.val === min) {
            dfs(root.left);
            dfs(root.right);
        } else if (root?.val < min1) min1 = root.val;
    })(root);

    return min1 === Infinity ? -1 : min1;
};
