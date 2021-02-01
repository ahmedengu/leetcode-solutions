/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minSubsequence = function(nums) {
    nums.sort((a, b) => b - a);
    const sum = _.sum(nums);
    let runningSum = 0;

    return nums.filter(n => {
        if (runningSum <= sum - runningSum) {
            runningSum += n;
            return true;
        }
        return false;
    });
};
