function maxLengthBetweenEqualCharacters(s: string): number {
    let max = -1;
    for (let i = 0; i < s.length; i++) {
        const idx = s.lastIndexOf(s[i]);
        if (idx > i) max = Math.max(max, idx - i - 1);
    }

    return max;
};
