function maxProduct(nums: number[]): number {
    let max1 = -1,
        max2 = -1,
        len = nums.length,
        i = 0;

    for (; i < len; i += 1) {
        if (nums[i] >= max1) {
            max2 = max1;
            max1 = nums[i];
        } else if (nums[i] > max2) {
            max2 = nums[i];
        }
    }

    return (max1 - 1) * (max2 - 1);
};
