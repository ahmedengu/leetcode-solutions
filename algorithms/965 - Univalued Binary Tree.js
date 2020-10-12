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
 * @return {boolean}
 */
var isUnivalTree = function(node, val = node.val) {
    if (node == null) return true;
    if (val !== node.val) return false;

    return isUnivalTree(node.left, val) && isUnivalTree(node.right, val);
};
