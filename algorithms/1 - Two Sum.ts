function twoSum(nums: number[], target: number): number[] {
    const map = nums.reduce((obj, num, i) => {
        obj[num] = i;
        return obj;
    }, {});

    for (let i = 0; i < nums.length; i++)
        if (map[target - nums[i]] > i)
            return [i, map[target - nums[i]]];
};
