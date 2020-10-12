/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const count = _.countBy(nums),
        mid = Math.floor(nums.length / 2);
    for (const [k, v] of Object.entries(count)) {
        if (v > mid) return k;
    }
};
