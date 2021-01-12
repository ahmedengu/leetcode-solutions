/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    const sorted = _.sortBy(nums);

    return nums.map(v => sorted.indexOf(v));
};
