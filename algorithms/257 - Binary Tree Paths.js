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
 * @return {string[]}
 */
var binaryTreePaths = function(root, path = '', ret = []) {
    if (!root) return ret;
    if (!root.left && !root.right) {
        ret.push(path + root.val);
        return ret;
    }

    path += root.val + '->';
    binaryTreePaths(root.left, path, ret);
    binaryTreePaths(root.right, path, ret);
    return ret;
};
