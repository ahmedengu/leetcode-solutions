/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function(root, l = false) {
    if (!root) return 0;
    if (!root.left && !root.right) return l ? root.val : 0;

    return sumOfLeftLeaves(root.left, true) + sumOfLeftLeaves(root.right);
};
