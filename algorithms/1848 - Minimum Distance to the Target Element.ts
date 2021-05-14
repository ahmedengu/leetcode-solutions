function getMinDistance(nums: number[], target: number, start: number): number {
    return nums.reduce((min, num, i) => num === target ? Math.min(min, Math.abs(start - i)) : min, Infinity);
};
