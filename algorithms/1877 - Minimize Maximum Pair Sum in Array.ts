function minPairSum(nums: number[]): number {
    nums.sort((a, b) => a - b);
    let sum = 0;
    for (let i = 0, len = nums.length, half = len / 2; i < len; i++)
        sum = Math.max(sum, nums[i] + nums[len - i - 1]);
    return sum;
};
