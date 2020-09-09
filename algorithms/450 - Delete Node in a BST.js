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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
    if (!root || root.val == null) return root;
    if (root.val === key) {
        if (!root.right || !root.left) {
            return root.right || root.left;
        }

        let current = root.right;
        while (current.left) {
            current = current.left;
        }

        root.val = current.val;
        root.right = deleteNode(root.right, current.val);
        return root;
    }

    root.right = deleteNode(root.right, key)
    root.left = deleteNode(root.left, key)

    return root;
};
