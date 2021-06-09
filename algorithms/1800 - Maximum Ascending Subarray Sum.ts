function maxAscendingSum(nums: number[]): number {
    let sum = nums[0];
    let max = sum;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) sum += nums[i];
        else sum = nums[i];
        max = Math.max(max, sum);
    }

    return max;
};
