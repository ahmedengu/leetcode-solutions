function findOriginalArray(changed: number[]): number[] {
    changed.sort((a, b) => a - b);
    const ret = [];

    for (let i = 0; i < changed.length; i++) {
        const idx = _.sortedLastIndexOf(changed, changed[i] * 2);
        if (idx <= i) return [];
        ret.push(changed[i]);
        changed.splice(idx, 1);
    }

    return ret;
};
