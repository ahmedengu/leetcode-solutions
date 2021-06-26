function canBeIncreasing(nums: number[]): boolean {
    for (let i = 0; i < nums.length; i++)
        if (isIncreasing(nums.filter((n, j) => j !== i))) return true;
    return false;
};

const isIncreasing = (nums: number[]) => {
    for (let i = 0; i < nums.length; i++)
        if (nums[i] <= nums[i - 1]) return false;
    return true;
}
