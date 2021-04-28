function findUnsortedSubarray(nums: number[]): number {
    return _.sortBy(nums)
        .reduce((acc, num, i) => acc + (num === nums[i] ? ' ' : '*'), '')
        .trim()
        .length;
};
