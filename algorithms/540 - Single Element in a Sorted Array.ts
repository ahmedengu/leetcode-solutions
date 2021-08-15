function singleNonDuplicate(nums: number[]): number {
    let l = 0;
    let r = nums.length;

    while (l <= r) {
        const mid = Math.floor((l + r) / 2);
        if (nums[mid] !== nums[mid - 1] && nums[mid] !== nums[mid + 1]) return nums[mid];
        const d = mid % 2 === 0 ? mid + 1 : mid - 1;
        if (nums[mid] === nums[d]) {
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }

    return -1;
};
