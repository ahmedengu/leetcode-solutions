function arraySign(nums: number[]): number {
    return nums.reduce((acc, v) => {
        if (v > 0) v = 1;
        else if (v < 0) v = -1;
        return acc * v;
    }, 1);
};
