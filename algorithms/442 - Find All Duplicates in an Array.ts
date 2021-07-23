function findDuplicates(nums: number[]): number[] {
    const ret = [];
    for (let i = 0; i < nums.length; i++) {
        const num = Math.abs(nums[i]);
        if (nums[num - 1] < 0) ret.push(num);
        else nums[num - 1] *= -1;
    }
    return ret;
};
