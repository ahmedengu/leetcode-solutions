/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root, ret = []) {
    if (root == null) return ret;

    ret.push(root.val);
    for (const c of root.children) {
        preorder(c, ret)
    }

    return ret;
};
