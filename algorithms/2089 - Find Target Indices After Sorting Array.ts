function targetIndices(nums: number[], target: number): number[] {
    return nums.sort((a, b) => a - b).reduce((acc, v, i) => ((v === target && acc.push(i)), acc), []);
};
