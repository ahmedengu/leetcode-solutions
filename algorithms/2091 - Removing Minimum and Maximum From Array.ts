function minimumDeletions(nums: number[]): number {
    if (nums.length < 3) return nums.length;
    const minIdx = nums.indexOf(_.min(nums));
    const maxIdx = nums.indexOf(_.max(nums));
    const [right, left] = maxIdx > minIdx ? [maxIdx, minIdx] : [minIdx, maxIdx];
    return Math.min(nums.length - left, right + 1, nums.length - right + left + 1);
};
