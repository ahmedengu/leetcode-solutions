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
var constructMaximumBinaryTree = function(nums) {
    if (!nums || !nums.length) return null;

    let max = -1, iMax = -1, i = 0, len = nums.length;

    for (; i < len; i += 1) {
        if (nums[i] > max) {
            max = nums[i];
            iMax = i;
        }
    }


    return new TreeNode(max, constructMaximumBinaryTree(nums.slice(0, iMax)), constructMaximumBinaryTree(nums.slice(iMax + 1)));
};
