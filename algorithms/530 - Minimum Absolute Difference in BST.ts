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

function getMinimumDifference(root: TreeNode | null): number {
    const arr = getArr(root);
    let min = Infinity;
    for (let i = 1; i < arr.length; i++) {
        min = Math.min(min, arr[i] - arr[i - 1]);
    }
    return min;
};

const getArr = (root: TreeNode | null, ret = []): number[] => {
    if (!root) return ret;

    getArr(root.left, ret);
    ret.push(root.val);
    getArr(root.right, ret);
    return ret;
}
