function minOperations(nums: number[]): number {
    let ret = 0;
    
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] <= nums[i - 1]) {
            ret += nums[i - 1] - nums[i] + 1;
            nums[i] += nums[i - 1] - nums[i] + 1;
        }
    }
    
    return ret;
};
