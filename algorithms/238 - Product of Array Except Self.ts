function productExceptSelf(nums: number[]): number[] {
    return nums.map((_, i) => nums.reduce((acc, num, j) => i === j ? acc : acc * num, 1));
};
