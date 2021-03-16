function findShortestSubArray(nums: number[]): number {
    const l = {};
    const r = {};
    const c = {};
    let ret = nums.length;
    let d = 0;

    for (let i = 0; i < nums.length; i++) {
        if (typeof l[nums[i]] === 'undefined') l[nums[i]] = i;
        r[nums[i]] = i;
        c[nums[i]] = (c[nums[i]] || 0) + 1;
        if (c[nums[i]] > d) d = c[nums[i]];
    }

    for (const [k, v] of Object.entries(c)) {
        if (v === d) ret = Math.min(ret, r[k] - l[k] + 1);
    }

    return ret;
};
