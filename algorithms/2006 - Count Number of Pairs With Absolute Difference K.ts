function countKDifference(nums: number[], k: number): number {
    let ret = 0;
    for (let i = 0; i < nums.length; i++)
        for (let j = i + 1; j < nums.length; j++)
            if (Math.abs(nums[i] - nums[j]) === k)
                ret++;
    return ret;
};
