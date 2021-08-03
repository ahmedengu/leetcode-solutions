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

function sumRootToLeaf(root: TreeNode | null): number {
    return traverse(root)
        .reduce((acc, v) => acc += Number(v), 0);
};

function traverse(node, n = '0b', ret = []) {
    if (!node) return ret;
    n += node.val;
    if (!node.left && !node.right) ret.push(n);

    traverse(node.left, n, ret);
    traverse(node.right, n, ret);

    return ret;
}
