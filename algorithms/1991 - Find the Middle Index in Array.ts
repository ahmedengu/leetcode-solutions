function findMiddleIndex(nums: number[]): number {
    const sum = _.sum(nums);
    for (let i = 0; i < nums.length; i++)
        if (2 * _.sum(nums.slice(0, i)) === sum - nums[i]) return i;
    return -1;
};
