function findUnsortedSubarray(nums: number[]): number {
    const sorted = _.sortBy(nums);
    for (var l = 0; l < nums.length && nums[l] === sorted[l]; l++);
    for (var r = nums.length - 1; r >= l && nums[r] === sorted[r]; r--);
    return r - l + 1;
};
