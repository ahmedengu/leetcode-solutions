function findMiddleIndex(nums: number[]): number {
    const sum = _.sum(nums);
    for (let i = 0; i < nums.length; i++) {
        const s = _.sum(nums.slice(0, i));
        if (s === sum - s - nums[i]) return i;
    }
    return -1;
};
