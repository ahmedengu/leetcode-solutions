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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
    const newNode = new TreeNode(val);
    let node = root;

    while (node) {
        if (val >= node.val) {
            if (!node.right) {
                node.right = newNode;
                break;
            }
            
            node = node.right;
        } else {
            if (!node.left) {
                node.left = newNode;
                break;
            }
            
            node = node.left;
        }
    }


    return root && root.val ? root : newNode;
};
