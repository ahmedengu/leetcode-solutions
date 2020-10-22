/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let ret = -1;
    for (let i = 0, len = nums.length; i < len; i++) {
        if (nums[i] === target) return i;
        if (nums[i] < target) ret = i;
    }
    return ret + 1;
};
