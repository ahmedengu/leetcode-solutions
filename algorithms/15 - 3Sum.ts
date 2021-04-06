function threeSum(nums: number[]): number[][] {
    nums.sort((a, b) => a - b);
    const ret = new Set<string>();

    for (let i = nums.length - 1; i >= 0; i--) {
        let j = 0;
        let k = i - 1;
        while (j < k) {
            if (nums[j] + nums[k] + nums[i] === 0) {
                ret.add([nums[j], nums[k], nums[i]].join('_'));
                j++;
                k--;
            } else if (nums[i] + nums[j] + nums[k] < 0) j++;
            else k--;
        }
    }

    return [...ret].map(x => x.split('_').map(Number));
};
