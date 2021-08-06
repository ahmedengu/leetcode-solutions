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

function sumEvenGrandparent(root: TreeNode | null): number {
    let sum = 0;

    const traverse = (node: TreeNode | null, p = 1, gp = 1) => {
        if (node) {
            if (gp % 2 === 0) sum += node.val;
            traverse(node.left, node.val, p);
            traverse(node.right, node.val, p);
        }
    }
    traverse(root);

    return sum;
};
