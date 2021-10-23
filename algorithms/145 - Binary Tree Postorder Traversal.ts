/**
 * Definition for a binary tree node
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

function postorderTraversal(root: TreeNode | null, ret = []): number[] {
    if (!root) return ret;
    
    postorderTraversal(root.left, ret);
    postorderTraversal(root.right, ret);
    ret.push(root.val);
    
    return ret;
};
