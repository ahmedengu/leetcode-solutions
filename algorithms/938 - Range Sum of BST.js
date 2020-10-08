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
 * @return {number}
 */
var rangeSumBST = function(root, L, R, val = 0) {
    if (root == null || root.val == null) return val;

    if (root.val >= L && root.val <= R) {
        val = root.val;
    }

    return val + rangeSumBST(root.left, L, R) + rangeSumBST(root.right, L, R);
};
