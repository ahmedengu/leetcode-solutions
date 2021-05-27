function sumOfUnique(nums: number[]): number {
    const bucket = new Uint8Array(101);
    nums.forEach(n => bucket[n]++);
    return bucket.reduce((acc, v, i) => v === 1 ? acc + i : acc, 0);
};
