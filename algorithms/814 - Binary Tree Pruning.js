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
 * @return {TreeNode}
 */
var pruneTree = function(root) {
    if (!prune(root)) return null;
    return root;
};

const prune = (root) => {
    if (!root) return 0;

    const left = prune(root.left);
    const right = prune(root.right);
    if (!left) root.left = null;
    if (!right) root.right = null;

    return left || right || root.val;
}
