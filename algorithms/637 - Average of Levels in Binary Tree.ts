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

function averageOfLevels(root: TreeNode | null): number[] {
    return getLevels(root).map(lvl => _.sum(lvl) / lvl.length);
};

const getLevels = (node: TreeNode | null, lvl = 0, lvls = []): number[][] => {
    if (!node) return lvls;
    (lvls[lvl] || (lvls[lvl] = [])).push(node.val);
    getLevels(node.left, lvl + 1, lvls);
    getLevels(node.right, lvl + 1, lvls);
    return lvls;
}
