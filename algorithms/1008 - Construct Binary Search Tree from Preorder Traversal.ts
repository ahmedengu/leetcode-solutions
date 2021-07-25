/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function bstFromPreorder(preorder: number[]): TreeNode | null {
    return traverse(-Infinity, Infinity);

    function traverse(lower, upper) {
        if (!preorder.length || preorder[0] < lower || preorder[0] > upper) return null;

        const node = new TreeNode(preorder.shift());

        node.left = traverse(lower, node.val)
        node.right = traverse(node.val, upper);

        return node;
    }
};
