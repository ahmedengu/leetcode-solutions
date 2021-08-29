function minimumDifference(nums: number[], k: number): number {
    nums.sort((a, b) => a - b);
    let min = nums[k - 1] - nums[0];
    for (let i = 1; i <= nums.length - k; i++)
        min = Math.min(min, nums[i + k - 1] - nums[i]);
    return min;
};
