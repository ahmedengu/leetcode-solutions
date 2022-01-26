function rearrangeArray(nums: number[]): number[] {
    const positives = nums.filter(n => n > 0);
    const negatives = nums.filter(n => n < 0);
    const ret = [];
    for (let i = 0; i < positives.length; i++)
        ret.push(positives[i], negatives[i]);
    return ret;
};
