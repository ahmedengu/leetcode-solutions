/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    if (!nums || !nums.length) return null;

    const mid = Math.floor(nums.length / 2);
    const ret = new TreeNode(nums[mid]);

    ret.left = sortedArrayToBST(nums.slice(0, mid));
    ret.right = sortedArrayToBST(nums.slice(mid + 1));

    return ret;
};
