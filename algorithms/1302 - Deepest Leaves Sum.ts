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

function deepestLeavesSum(root: TreeNode | null): number {
    return _.sum(getLvls(root).pop());
};

const getLvls = (node: TreeNode | null, depth = 0, lvls = []) => {
    if (!node) return lvls;
    (lvls[depth] || (lvls[depth] = [])).push(node.val);
    getLvls(node.left, depth + 1, lvls);
    getLvls(node.right, depth + 1, lvls);
    return lvls;
}
