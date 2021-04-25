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

function findMode(root: TreeNode | null): number[] {
    const count = {};
    let max = -Infinity;
    let ret = [];
    (function traverse(root: TreeNode | null) {
        if (root) {
            count[root.val] = (count[root.val] || 0) + 1;
            if (count[root.val] > max) {
                ret = [root.val];
                max = count[root.val];
            } else if (count[root.val] === max) {
                ret.push(root.val);
            }
            traverse(root.left);
            traverse(root.right);
        }
    })(root);
    return ret;
};
