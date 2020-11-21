/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    const ret = Array.from({ length: nums.length + 1 }, (n, i) => i);
    nums.forEach(num => delete ret[num]);
    return ret.filter(n => n);
};
