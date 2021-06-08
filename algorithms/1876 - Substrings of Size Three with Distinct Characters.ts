function countGoodSubstrings(s: string): number {
    let count = 0;
    for (let i = 0; i < s.length - 2; i++)
        if (new Set(s.substr(i, 3)).size === 3) count++;
    return count;
};
