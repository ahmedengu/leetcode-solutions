/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function(preorder) {
    if (!preorder.length) return null;

    const [root, ...rest] = preorder;

    const rootNode = new TreeNode(root);

    rootNode.left = bstFromPreorder(rest.filter(x => x < root));
    rootNode.right = bstFromPreorder(rest.filter(x => x > root));

    return rootNode;
};
