function countElements(nums: number[]): number {
    const count = _.countBy(nums);
    const min = _.min(nums);
    const max = _.max(nums);
    if (min === max) return 0;
    return nums.length - count[min] - count[max];
};
