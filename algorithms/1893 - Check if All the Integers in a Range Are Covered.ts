function isCovered(ranges: number[][], left: number, right: number): boolean {
    const bucket = new Array(51);
    for (const [s, e] of ranges)
        for (let i = s; i <= e; i++)
            bucket[i] = 1;
    for (let i = left; i <= right; i++)
        if (!bucket[i]) return false;
    return true;
};
