function findDifferentBinaryString(nums: string[]): string {
    const set = new Set(nums.map(num => parseInt(num, 2)));
    for (let i = 0;; i++)
        if (!set.has(i))
            return i.toString(2).padStart(nums.length, '0');
};
