function maxSlidingWindow(nums: number[], k: number): number[] {
    let max = getMax(nums, 0, k - 1);
    const ret = [];
    for (let i = k - 1; i < nums.length; i++) {
        if (nums[i] > max) max = nums[i];
        else if (nums[i - k] >= max) max = getMax(nums, i - k + 1, i);
        ret.push(max)
    }
    return ret;
};

const getMax = (nums: number[], start: number, end: number): number => {
    let max = -Infinity;
    while (start <= end) max = Math.max(max, nums[start++]);
    return max;
}
