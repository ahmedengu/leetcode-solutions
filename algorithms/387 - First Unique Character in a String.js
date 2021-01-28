function firstUniqChar(s: string): number {
    const set = _.countBy(s);
    for (let i = 0; i < s.length; i++) {
        if (set[s[i]] === 1) return i;
    }
    return -1;
};
