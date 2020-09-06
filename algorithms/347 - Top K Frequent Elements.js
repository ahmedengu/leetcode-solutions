/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const counts = _.countBy(nums);
    return Object.entries(counts).sort((a, b) => b[1] - a[1]).slice(0, k).map(v => v[0]);
};
