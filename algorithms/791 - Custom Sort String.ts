function customSortString(S: string, T: string): string {
    const count = _.countBy(T);
    let ret = '';
    for (const c of S)
        if (count[c]) {
            ret += c.repeat(count[c]);
            count[c] = 0;
        }

    for (const c of Object.keys(count)) ret += c.repeat(count[c]);

    return ret;
};
