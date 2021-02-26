function summaryRanges(nums: number[]): string[] {
    const ret = [];
    let a = nums[0];

    for (let i = 1; i < nums.length + 1; i++) {
        if (nums[i - 1] + 1 !== nums[i]) {
            if (nums[i - 1] === a) ret.push(a.toString());
            else ret.push(`${a}->${nums[i-1]}`);
            a = nums[i];
        }
    }

    return ret;
};
