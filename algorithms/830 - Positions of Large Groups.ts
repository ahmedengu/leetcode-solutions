function largeGroupPositions(s: string): number[][] {
    const ret = [];
    let start = 0;

    for (let i = 1; i < s.length + 1; i++) {
        if (s[start] !== s[i]) {
            if (i - start > 2) {
                ret.push([start, i - 1]);
            }
            start = i;
        }
    }

    return ret;
};
