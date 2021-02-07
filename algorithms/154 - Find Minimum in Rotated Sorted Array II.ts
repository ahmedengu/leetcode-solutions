function findMin(nums: number[]): number {
    let lo = 0;
    let hi = nums.length - 1;
    let mid;
    while (lo < hi) {
        mid = lo + Math.floor((hi - lo) / 2);
        if (nums[mid] === nums[hi]) {
            hi--;
        } else if (nums[mid] > nums[hi]) {
            lo = mid + 1;
        } else {
            hi = mid;
        }
    }

    return nums[lo];
};
