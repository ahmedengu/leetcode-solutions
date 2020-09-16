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
 * @param {number} L
 * @param {number} R
 * @return {TreeNode}
 */
var trimBST = function(root, L, R) {
    if (root == null) return null;

    root.left = trimBST(root.left, L, R);
    root.right = trimBST(root.right, L, R);

    if (root.val >= L && root.val <= R) return root;
    return root.left || root.right;
};
