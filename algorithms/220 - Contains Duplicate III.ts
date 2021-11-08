function containsNearbyAlmostDuplicate(nums: number[], k: number, t: number): boolean {
    for (let i = 0; i < nums.length; i++)
        for (let j = i + 1; j < nums.length; j++)
            if (j - i <= k && Math.abs(nums[i] - nums[j]) <= t) return true;
    return false;
};
