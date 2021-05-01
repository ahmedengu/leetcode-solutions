function runningSum(nums: number[]): number[] {
    return nums.map((sum => x => sum += x)(0));
};
