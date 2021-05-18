function minOperations(nums: number[]): number {
    return nums.reduce((acc, v, i) => {
        if (nums[i] <= nums[i - 1]) {
            acc += nums[i - 1] - nums[i] + 1;
            nums[i] += nums[i - 1] - nums[i] + 1;
        }
        return acc;
    }, 0);
};
