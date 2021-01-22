/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
    return index.reduce((acc, v, i) => acc.splice(v, 0, nums[i]) && acc, []);
};
