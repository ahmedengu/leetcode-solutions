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

/**
 Do not return anything, modify root in-place instead.
 */
function flatten(root: TreeNode | null) {
    const arr = getArr(root);
    let node = root;
    for (let i = 0; i < arr.length; i++) {
        node.val = arr[i];
        node.left = null;
        if (!node.right && i < arr.length - 1) node.right = new TreeNode();
        node = node.right;
    }
};

const getArr = (node: TreeNode, arr = []) => {
    if (!node) return arr;
    arr.push(node.val);
    getArr(node.left, arr);
    getArr(node.right, arr);
    return arr;
}
