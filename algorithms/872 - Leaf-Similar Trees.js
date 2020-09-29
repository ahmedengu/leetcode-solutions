/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    return _.isEqual(getLeaves(root1), getLeaves(root2)); // deep equal check
};

function getLeaves(node, ret = []) {
    if (!node) return ret; // base
    if (!node.left && !node.right) ret.push(node.val);     // if leaf
    
    // traverse
    getLeaves(node.left, ret);
    getLeaves(node.right, ret);
    
    return ret;
}
