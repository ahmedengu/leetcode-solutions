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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
    const { depth: depthX, parent: parentX } = getNode(root, x);
    const { depth: depthY, parent: parentY } = getNode(root, y);

    return parentX !== parentY && depthX === depthY;
};

const getNode = (node, val, depth = 0, parent) => {
    if (!node) return 0;
    if (node.val === val) return { depth, parent };

    return getNode(node.right, val, depth + 1, node) || getNode(node.left, val, depth + 1, node);
}
