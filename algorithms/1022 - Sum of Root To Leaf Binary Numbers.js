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
var sumRootToLeaf = function(root) {
    return traverse(root) // get all paths
        .reduce((acc, v) => acc += Number(v), 0); // convert to numver & sum
};

function traverse(node, n = '0b', ret = []) {
    if (!node) return ret; // base
    n += node.val; // shift
    if (!node.left && !node.right) ret.push(n); // if leaf

    // traverse
    traverse(node.left, n, ret);
    traverse(node.right, n, ret);

    return ret;
}
