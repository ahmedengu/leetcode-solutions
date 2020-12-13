/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
    const ret = [],
        len = nums.length;
    let i = 0;

    for (; i < len; i += 1) {
        ret.push(..._.times(nums[i], _.constant(nums[++i])));
    }

    return ret;
};
