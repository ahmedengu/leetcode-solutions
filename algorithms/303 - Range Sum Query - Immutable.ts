class NumArray {
    dp: number[];
    constructor(nums: number[]) {
        this.dp = _.times(nums.length + 1, () => 0);
        for (let i = 0; i < nums.length; i++)
            this.dp[i + 1] = this.dp[i] + nums[i];
    }

    sumRange(i: number, j: number): number {
        return this.dp[j + 1] - this.dp[i];
    }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */
