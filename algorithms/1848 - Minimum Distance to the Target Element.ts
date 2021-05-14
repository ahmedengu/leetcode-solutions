function getMinDistance(nums: number[], target: number, start: number): number {
    return nums.reduce((acc, v, i) => v === target ? Math.min(acc, Math.abs(start - i)) : acc, Infinity);
};
