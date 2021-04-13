function findPeakElement(nums: number[]): number {
    let l = 0, r = nums.length - 1, mid;
    while (l < r)
        if (nums[mid = Math.floor((l + r) / 2)] > nums[mid + 1]) r = mid;
        else l = mid + 1;
    return l;
};
