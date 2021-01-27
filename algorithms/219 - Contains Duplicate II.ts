function containsNearbyDuplicate(nums: number[], k: number): boolean {
    const set = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (set.has(nums[i])) return true;
        set.set(nums[i], 1);
        if (set.size > k) set.delete(nums[i - k]);
    }
    return false;
};
