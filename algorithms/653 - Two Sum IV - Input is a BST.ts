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

function findTarget(root: TreeNode | null, k: number): boolean {
    const set = getSet(root);
    for (const n of set)
        if (k - n !== n && set.has(k - n)) return true;
    return false;
};

const getSet = (node: TreeNode, set = new Set<number>()): Set<number> => {
    if (!node) return set;
    getSet(node.left, set);
    set.add(node.val);
    getSet(node.right, set);
    return set;
}
