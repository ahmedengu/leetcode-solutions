/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function(root1, root2) {
    const ret = [],
        arr1 = [],
        arr2 = [];

    traverse(root1, arr1);
    traverse(root2, arr2);

    let i = 0,
        j = 0,
        len1 = arr1.length,
        len2 = arr2.length;
    while (i < len1 && j < len2) {
        if (arr1[i] < arr2[j]) {
            ret.push(arr1[i]);
            i += 1;
        } else {
            ret.push(arr2[j]);
            j += 1;
        }
    }

    while (i < len1) {
        ret.push(arr1[i]);
        i++;
    }
    while (j < len2) {
        ret.push(arr2[j]);
        j += 1;
    }

    return ret;

    function traverse(node, arr) {
        if (node == null || node.val == null) return null;

        traverse(node.left, arr);
        arr.push(node.val);
        traverse(node.right, arr);
    }
};
