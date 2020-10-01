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
var increasingBST = function(root) {
    const arr = traverse(root);
    const ret = new TreeNode(arr.pop());
    let node = ret;
    
    while (arr.length) {
        node.right = new TreeNode(arr.pop());
        node = node.right;
    }

    return ret;
};

function traverse(node, ret = []) {
    if (!node || node.val == null) return ret;

    traverse(node.right, ret);
    ret.push(node.val);
    traverse(node.left, ret);

    return ret;
}
