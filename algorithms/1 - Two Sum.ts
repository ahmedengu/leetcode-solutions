function twoSum(nums: number[], target: number): number[] {
    const map = nums.reduce((acc, v, i) => {
        acc[v] = i;
        return acc;
    }, {});
    for (let i = 0; i < nums.length; i++) {
        const idx = map[target - nums[i]];
        if (idx >= 0 && idx !== i)
            return [i, idx];
    }
};
