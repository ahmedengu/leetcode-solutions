function maxSubsequence(nums: number[], k: number): number[] {
    return nums
        .map((v, i) => [v, i])
        .sort(([a], [b]) => b - a)
        .slice(0, k)
        .sort(([, a], [, b]) => a - b)
        .map(([v]) => v);
};
