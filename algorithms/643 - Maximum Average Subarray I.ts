function findMaxAverage(nums: number[], k: number): number {
    let sum = _.sum(nums.slice(0, k));
    let max = sum;
    for (let i = 0; i < nums.length - k; i++) {
        sum -= nums[i];
        sum += nums[i + k];
        max = Math.max(max, sum);
    }
    return max / k;
};
