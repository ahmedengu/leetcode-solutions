function minStartValue(nums: number[]): number {
    for (let i = 1; i < nums.length; i++) nums[i] += nums[i - 1];

    return Math.max(1, -Math.min.apply(Math, nums) + 1);
};
