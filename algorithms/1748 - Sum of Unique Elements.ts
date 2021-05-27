function sumOfUnique(nums: number[]): number {
    return nums
        .sort()
        .reduce((acc, v, i, arr) => arr[i] !== arr[i - 1] && arr[i] !== arr[i + 1] ? acc + v : acc, 0);
};
