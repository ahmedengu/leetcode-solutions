/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let i = 0,
        l = 0,
        r = nums.length - 1;

    while (i <= r) {
        if (nums[i] === 0) [nums[i++], nums[l++]] = [nums[l], nums[i]];
        else if (nums[i] === 2) [nums[i], nums[r--]] = [nums[r], nums[i]];
        else i++;
    }
};
