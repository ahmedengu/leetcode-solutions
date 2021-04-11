function groupAnagrams(strs: string[]): string[][] {
    const map = {};
    const ret = [];

    for (const str of strs) {
        const key = getKey(str);
        if (!map[key]) map[key] = ret.push([]);
        ret[map[key] - 1].push(str);
    }

    return ret;
};

const getKey = (str) => {
    const count = _.times(26, () => 0);
    for (const c of str) count[c.charCodeAt() - 97]++;
    return count.join(',');
}
