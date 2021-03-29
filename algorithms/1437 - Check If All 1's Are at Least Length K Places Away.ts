function kLengthApart(nums: number[], k: number): boolean {
    let last;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i]) {
            if (i - last < k) return false;
            last = i + 1;
        }
    }
    return true;
};
