function searchRange(nums: number[], target: number): number[] {
    return [_.sortedIndexOf(nums, target), _.sortedLastIndexOf(nums, target)];
};
