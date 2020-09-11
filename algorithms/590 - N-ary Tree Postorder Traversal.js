/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var postorder = function(root, ret = []) {
    if (root == null) return ret;

    for (const child of root.children) {
        postorder(child, ret);
    }
    ret.push(root.val);

    return ret;
};
