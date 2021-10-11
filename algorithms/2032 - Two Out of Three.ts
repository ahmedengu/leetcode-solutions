function twoOutOfThree(nums1: number[], nums2: number[], nums3: number[]): number[] {
    const counts = {};

    for (const set of[new Set(nums1), new Set(nums2), new Set(nums3)])
        for (const num of set)
            counts[num] = (counts[num] || 0) + 1;

    return Object.entries(counts).filter(([, count]) => count >= 2).map(([num]) => +num);
};
