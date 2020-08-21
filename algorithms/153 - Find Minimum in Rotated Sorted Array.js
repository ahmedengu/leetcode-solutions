/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let l = 0,
        r = nums.length - 1,
        m;

    while (l < r) {
        m = Math.floor((l + r) / 2);
        if (nums[m] > nums[r]) l = m + 1;
        else r = m;
    }

    return nums[l];
};
