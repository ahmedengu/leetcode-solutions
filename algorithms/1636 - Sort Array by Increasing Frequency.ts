function frequencySort(nums: number[]): number[] {
    const count = _.countBy(nums);
    return nums.sort((a, b) => count[a] - count[b] || b - a);
};
