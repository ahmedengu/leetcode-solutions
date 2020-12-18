/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    const count = _.countBy(nums2);
    return nums1.filter(num => count[num] && count[num]--);
};
