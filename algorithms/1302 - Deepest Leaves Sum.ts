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
    const maxDepth = getMaxDepth(root);
    return getSum(root, maxDepth);
};

const getMaxDepth = (node: TreeNode | null, depth = 0) => {
    if (!node) return depth;
    return Math.max(getMaxDepth(node.left, depth + 1), getMaxDepth(node.right, depth + 1));
}

const getSum = (node: TreeNode | null, maxDepth, depth = 0) => {
    if (!node) return 0;
    return getSum(node.left, maxDepth, depth + 1) + getSum(node.right, maxDepth, depth + 1) + (depth + 1 === maxDepth ? node.val : 0);
}
