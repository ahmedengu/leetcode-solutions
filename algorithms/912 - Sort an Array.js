/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    if (nums.length <= 1) return nums;
    const pivot = nums.pop();
    const less = sortArray(nums.filter(n => n <= pivot));
    const more = sortArray(nums.filter(n => n > pivot));
    return less.concat(pivot, more);
};
