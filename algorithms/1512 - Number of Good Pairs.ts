function numIdenticalPairs(nums: number[]): number {
    const map = {};
    return nums.reduce((acc, x) => acc += (map[x] && map[x]++) || (map[x] = 1, 0), 0);
};
